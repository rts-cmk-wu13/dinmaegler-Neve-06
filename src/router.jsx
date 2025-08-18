import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Agents from "./pages/Agents";
import Loading from "./Components/Loading";
import { ErrorBoundary } from "./Components/Error";
import { handleSubmit } from "./api/actions";
import Login from "./pages/Login";
import RequireAuth from "./Components/RequireAuth";
import { getHomes, getHome, fourHomes } from "./api/homes";
import { getAgents, getAgent, threeAgents } from "./api/agents";
import { homeLoader } from "./api/homeloader";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,    
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: "list",
                element: <List />,
                loader: getHomes
            },
            {
                path: "agents",
                element: <Agents/>,
                loader: getAgents
            },
            {
                path: "list/:id",
                element: 
                <Detail />,
                loader: getHome
            },
            {
                path: "agents/:id",
                
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit,
            },
            {
                path: "login",
                element: <Login />
            },
            {   
                path: "*",  
                element: <NotFound />
            } 
        ]
    }

]);
export default router;