import Child from './Child';
/* Paso de información de un componente padre a un componente hijo */
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

/* ----------------------------------------------------------------- */

/* Paso de información de un componente padre a un componente hijo */
// function Father() {
//   const handleClickButton = (message) => {
//     console.log(`Message from button: ${message}`);
//   };

//   return (
//     <>
//       <Child onClickButton={handleClickButton} />
//     </>
//   );
// }
// export default Father;

/* ----------------------------------------------------------------- */

/* Adición de tags dentro de un componente hijo */

function Father() {
  return (
    <>
      <Child>
        <h1>Title</h1>
        <p>Content</p>
      </Child>
      <br />
      <Child>
        <h2>Subtitle</h2>
        <p>Other content</p>
      </Child>
    </>
  );
}

export default Father;

/* ----------------------------------------------------------------- */
