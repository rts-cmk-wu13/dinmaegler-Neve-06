import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext"; // ✅ to get token + user info

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { token, user } = useAuth(); 
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) setFavorites(JSON.parse(saved));
}, []);

// Save whenever favorites change
useEffect(() => {
  if (favorites.length > 0) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}, [favorites]);
  // Load favorites from backend when logged in
  useEffect(() => {
    if (!token || !user) return;

    fetch(`https://dinmaegler.onrender.com/users/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setFavorites(data.homes || []); // full objects
      })
      .catch(err => console.error("Failed to load favorites", err));
  }, [token, user]);

  // ✅ define syncFavorites BEFORE toggleFavorite
  const syncFavorites = (updatedFavorites) => {
    if (!token || !user) return;

    fetch(`https://dinmaegler.onrender.com/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
body: JSON.stringify({ homes: updatedFavorites.map(h => h.id) })
    })
      .then((res) => res.json())
      .then((data) => console.log("✅ Synced favorites", data))
      .catch((err) => console.error("❌ Failed syncing favorites", err));
  };

const toggleFavorite = (home) => {
  setFavorites((prev) => {
    const exists = prev.some((h) => h.id === home.id);
    const updated = exists
      ? prev.filter((h) => h.id !== home.id)
      : [...prev, home];

    // Send only IDs if backend requires
    syncFavorites(updated.map(h => h.id));

    return updated;
  });
};

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);