import React, { useState } from 'react';

export default () => {
  const [count, setcount] = useState(0);
  const add = (n) => {
    setcount(count+1);
  }
   return (<>
   <div>
     Counter
      <div>
        current => {count}
        <br />
        <br />
        <button onClick={() => add(1)}>+</button>
      </div>
   </div>
   </>)
}
