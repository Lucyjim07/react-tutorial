import { useMemo, useState } from 'react';

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log('Calculation done!');
    return Math.pow(num, 3);
  }

  // necesario para explicar porque se usa el hook useMemo
  // const result = cubeNum(number);

  // uso del hook useMemo
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter: {counter}</h1>
    </>
  );
}

export default UseMemoHook;
