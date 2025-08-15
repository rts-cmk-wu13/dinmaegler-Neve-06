

export async function homeLoader() {
    const [homes, agents] = await Promise.all([
       fetch('https://dinmaegler.onrender.com/homes?_limit=4&_start=2').then(res => res.json()),
       fetch('https://dinmaegler.onrender.com/agents?_limit=3').then(res => res.json())
    ]);
    return { agents, homes };
}