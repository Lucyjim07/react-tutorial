/* Recibir información de un componente padre a un componente hijo */
// function Child({ title, description, price }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <div>
//         <p>
//           Price: <span>${price}</span>
//         </p>
//       </div>
//     </>
//   );
// }

// export default Child;
/* ----------------------------------------------------------------- */

/* Recibir funciones de un componente padre a un componente hijo */
// function Child({ onClickButton }) {
//   return (
//     <>
//       <button
//         onClick={() => {
//           onClickButton('Hi, you click me');
//         }}
//       >
//         Click Me!
//       </button>
//     </>
//   );
// }

// export default Child;
/* ----------------------------------------------------------------- */

/* Recibir tags y otros componentes de un componente padre a un componente hijo */

function Child({ children }) {
  return <div>{children}</div>;
}

export default Child;

/* ----------------------------------------------------------------- */
