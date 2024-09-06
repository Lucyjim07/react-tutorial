import { useState } from 'react';

function ListGroup() {
  const cities = ['New York', 'Tokio', 'London', 'Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className='list-group'>
        {cities.length === 0 && <p>No hay ciudades.</p>}
        {cities.map((city, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
