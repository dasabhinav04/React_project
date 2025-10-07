import React, { useState } from 'react';
import Cards from './Cards';
import Parent from './UcallBack/Parent';
import ExampleOne from './UseReducer/ExampleOne';
import ExampleTwo from './UseReducer/ExampleTwo';

function Home() {
  console.log("home");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      {/* <p>Count in home {count}</p>
      <button onClick={() => setCount((d) => d + 1)}>
        count button
      </button> */}
      {/* <Cards />
      <Parent/>
      <ExampleOne/>
      <ExampleTwo/> */}
    </div>
  );
}

export default Home;
