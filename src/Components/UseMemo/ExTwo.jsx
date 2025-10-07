import React, { useEffect, useState } from 'react'

function ExTwo() {
    const [search, setSearch] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

    useEffect(() => {
        console.log('Filtering with useEffect')
        const result = items.filter(
            item => 
                item.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredItems(result);
    }, [search])
    
  return (
    <div>
        <h1>Example 2</h1>
        <input type="text"
        placeholder='Search Fruit'
        value={search}
        onChange={e => setSearch(e.target.value)}/>
        <ul>
            {filteredItems.map(item => 
                <li key={item}>{item}</li>
            )}
        </ul>
        
    </div>
  )
}

export default ExTwo