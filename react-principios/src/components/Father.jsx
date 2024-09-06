// import Child from './Child';

// function Father() {
//   return (
//     <>
//       <Child
//         title={'Laptop'}
//         description={'The best laptop gaming in the market.'}
//         price={1800}
//       />
//     </>
//   );
// }

// export default Father;

import Child from './Child';
function Father() {
  const handleClickButton = (message) => {
    console.log(`Message from button: ${message}`);
  };

  return (
    <>
      <Child onClickButton={handleClickButton} />
    </>
  );
}

export default Father;
