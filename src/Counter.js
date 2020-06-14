import React from 'react';


export default ({ addCount, subCount, doubleCount, count }) => {
   return (<>
   <div>
     Counter
      <div>
        current => {count}
        <br />
        <br />
        <button onClick={() => addCount(1)}>+</button>
        <button onClick={() => subCount(1)}>-</button>
        <button onClick={() => doubleCount()}>x2</button>
      </div>
   </div>
   </>)
}
