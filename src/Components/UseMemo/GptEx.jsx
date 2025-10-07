import React, { useEffect, useMemo, useState } from 'react';

function GptEx() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

  // useEffect → handles filtering and sets state
  useEffect(() => {
    console.log('Filtering with useEffect...');
    const result = items.filter(
      item => item.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(result);
  }, [search]);

  // useMemo → runs only ONCE (doesn't re-run on search)
  const filteredItemsMemo = useMemo(() => {
    console.log('Memoizing items once...');
    return items; // just memoize the base items, not the search filter
  }, []); // empty dependency array → never recalculates after mount

  return (
    <div>
      <h1>chat gpt ex</h1>
      <input
        type="text"
        placeholder="Search fruit"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <h3>Filtered with useEffect</h3>
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Memoized items (static)</h3>
      <ul>
        {filteredItemsMemo.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default GptEx;
