import { useState, useEffect } from 'react';
import { businesses } from './data/businesses';
import './App.css';

function App() {
  const [list, setList] = useState(businesses);

  useEffect(() => {
    console.log("business list:", list);
  }, [list]);

  return (
    <div className="App">
      <ul>
        {businesses.map((business) => {
          return <li key={business.id}>{business.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
