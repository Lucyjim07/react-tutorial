import { createContext } from 'react';

export const AppContext = createContext();

const ContextProvider = (props) => {
  const profile = {
    name: 'Lucy Jiménez',
    job: 'Frontend developer',
  };
  const contact = {
    phone: '+57 312 345 6789',
    email: 'lucy.jimenez@mail.dev',
  };
  return (
    <AppContext.Provider value={{ profile, contact }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
