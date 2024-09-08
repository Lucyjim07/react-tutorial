import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

function UseContextHook() {
  const { profile, contact } = useContext(AppContext);

  return (
    <>
      <h1>UseContextHook</h1>
      <h2>
        {profile.name} - {profile.job}
      </h2>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </>
  );
}

export default UseContextHook;
