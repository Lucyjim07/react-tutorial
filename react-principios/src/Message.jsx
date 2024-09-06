function Message() {
  const nombre = 'Lucy';
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola nuevo programador!</h1>;
}

export default Message;
