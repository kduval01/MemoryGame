import './App.css';
import MemoryCard from './components/memoryCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Memory Game</h1>
        <h4>Match Cards to Win</h4>
        <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
        <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        </div>
      </header>
    </div>
  );
}

export default App;