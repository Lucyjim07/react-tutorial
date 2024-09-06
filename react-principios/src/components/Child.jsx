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

function Child({ onClickButton }) {
  return (
    <>
      <button
        onClick={() => {
          onClickButton('Hi, you click me');
        }}
      >
        Click Me!
      </button>
    </>
  );
}

export default Child;
