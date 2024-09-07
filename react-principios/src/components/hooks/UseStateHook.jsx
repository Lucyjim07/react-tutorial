// uso básico del Hook useState
import { useState } from 'react';

function UseStateHook() {
  const [color, setColor] = useState('Red');

  const handleColor = () => setColor('Blue');
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={handleColor}>Blue</button>
    </>
  );
}

export default UseStateHook;

// uso complejo del Hook useState
// import { useState } from 'react';

// function UseStateHook() {
//   const [developer, setDeveloper] = useState({
//     name: 'Lucy',
//     role: 'frontend',
//     year: 2023,
//     tech: ['HTML', 'CSS', 'Javascript'],
//   });

//   const handlesetDeveloper = () => {
//     setDeveloper((prev) => {
//       return { ...prev, year: 2024 };
//     });
//   };

//   return (
//     <>
//       <div>
//         <h1>My name is {developer.name}</h1>
//         <h2>
//           I am a {developer.role} developer since {developer.year}
//         </h2>
//       </div>
//       <div>
//         <button onClick={handlesetDeveloper}>Update year</button>
//       </div>
//     </>
//   );
// }

// export default UseStateHook;
