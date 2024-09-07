import { useCallback, useState } from 'react';
import UseCallbackHookChild from './UseCallbackHookChild';

function UseCallbackHookFather() {
  const [count, setCount] = useState(0);

  const handleNewFn = useCallback(() => {}, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
      <UseCallbackHookChild onHandleNewFn={handleNewFn} />
    </>
  );
}

export default UseCallbackHookFather;
