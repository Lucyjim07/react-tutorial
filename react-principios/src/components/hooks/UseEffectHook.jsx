import { useEffect, useState } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <h1>I`ve rendered {count} times</h1>
    </>
  );
}

export default UseEffectHook;
