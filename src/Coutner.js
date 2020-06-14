import React from 'react';

export default ({ addCount, count }) => {
   return (<>
   <div>
     Counter
      <div>
        current => {count}
        <br />
        <br />
        <button onClick={() => addCount(1)}>+</button>
      </div>
   </div>
   </>)
}
