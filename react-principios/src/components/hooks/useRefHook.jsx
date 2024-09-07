// explicación de uso del hook useRef con variables

import { useEffect, useRef, useState } from 'react';

function UseRefHook() {
  const [value, setValue] = useState(0);

  // explicación de uso del hook useEffect infinito
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   });

  // explicación del uso del hook useRef
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render count: {count.current}</h1>
    </>
  );
}

export default UseRefHook;

/* --------------------------------------------- */

// explicación de uso del hook useRef con elementos del DOM
// import { useRef } from 'react';

// function UseRefHook() {
//   const inputElement = useRef();

//   const handleButtonClick = () => {
//     console.log(inputElement);
//     inputElement.current.style.background = 'blue';
//   };

//   return (
//     <>
//       <input type='text' ref={inputElement} />
//       <button onClick={handleButtonClick}>Chlick Here</button>
//     </>
//   );
// }

// export default UseRefHook;
