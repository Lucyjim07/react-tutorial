function Child({ title, description, price }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p>
          Price: <span>${price}</span>
        </p>
      </div>
    </>
  );
}

export default Child;
