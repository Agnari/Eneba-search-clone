// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchGames = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/list?search=${query}`);
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => fetchGames(search), 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const styles = {
    pageBackground: "min-h-screen bg-eneba-purple-primary text-white w-full",
    
    // The main container now manages the 3-column split
    mainLayout: "w-full flex justify-center py-8", 
    
    // Side columns replace your old margins
    sideColumn: "hidden xl:block flex-1 max-w-[200px]", 
    
    // The center keeps your specific width
    centerContent: "w-full max-w-6xl px-6",
    
    resultsHeading: "text-sm text-purple-300 mb-6 uppercase tracking-widest font-semibold",
    gridSystem: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
    reportLabel: "fixed bottom-10 right-0 bg-white text-black py-2 px-4 font-bold text-[12px] shadow-2xl cursor-pointer hover:bg-gray-200 transition-colors z-[100]"
  };

  return (
    <div className={styles.pageBackground}>
      <Navbar search={search} setSearch={setSearch} />

      {/* THREE-COLUMN SYSTEM */}
      <main className={styles.mainLayout}>
        
        {/* 1. LEFT CONTAINER */}
        <aside className={styles.sideColumn}>
        </aside>

        {/* 2. CENTER CONTAINER */}
        <div className={styles.centerContent}>
          <h2 className={styles.resultsHeading}>
            Results found: {games.length}
          </h2>

          <div className={styles.gridSystem}>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {!loading && games.length === 0 && (
            <div className="text-center py-20 opacity-50 italic">
              No games found for "{search}"
            </div>
          )}
        </div>

        {/* 3. RIGHT CONTAINER */}
        <aside className={styles.sideColumn}>
        </aside>

      </main>

      {/* Floating Label */}
      <div className={styles.reportLabel}>Report a problem</div>
    </div>
  );
}

export default App;