# REACT JS

React es una biblioteca de Javascript para construir interfaces de usuario dinámicas e interactivas. Fue creada por Facebook en el 2011.

Con React podemos describir una página web usando pequeños componentes reutilizables y React se encargará de crear y actualizar los elementos del DOM (Document Object Model). En resumen, los componentes nos ayudan a escribir código reutilizable, modular y mejor organizado.

Una aplicación de React es un árbol de componentes con el componente App como raiz que junta todo.

## Componentes de React

Para crear un componente en React se pueden usar clases o funciones, pero las funciones son más fáciles de escribir.
Tanto React como el estandar que lo controla, espera que los nombres de los componentes estén expresados en **PascalCasing** en el siguiente ejemplo se muestra la creación de un componente funcioanl.

```jsx
// JSX: JavaScript XML
function Message() {
    return (
        <h1>Hola nuevo programador!</h1>;
    )
}

// Para usarlo se exporta como un objeto predeterminado del modulo
export default Message;
```

JSX permite crear contenido dinámico al mezclar Javascript con HTML. El simbolo de llaves ({}) permite hacer que una variable o una funcion se pueda agregar a las etiquetas de HTML. Cualquier elemento que retorne un valor puede ser colocado dentro del simbolo de llaves ({})

```jsx
function Message() {
    const nombre = 'Lucy';
    return (
        <h1>Hola {nombre}!</h1>;
    )
}

```

## Como funciona React

Cuando la aplicación se inicia, React toma el árbol de componentes y crea una estructura llamada **Virtual DOM**. Este DOM virtual es una representación ligera en memoria del árbol de componentes y es distinto al DOM que tienen los navegadores. Cuando el estado del componente es actualizado, React actualiza el nodo correspondiente en el DOM virtual para reflejar el nuevo estado. Luego compara el estado del DOM virtual actual con el anterior para identificar los nodos que han sufrido algun cambio y deben actualizarce, luego actualizará esos nodos en el DOM real, el DOM del navegador

## Diferencias entre una biblioteca y un framework

- **Biblioteca:** Herramienta que proporciona una funcionalidad específica
- **Framework:** Proporciona un conjunto de herramientas y directrices para construir aplicaciones

## Renderizado condicional

Es una técnica usada para mostrar por pantalla componentes dependiendo de la evaluación de una condición. Existen várias formas de renderizar un elemento de forma condicional.

- Usando el operador ternario, se puede evaluar una condicion y renderizar uno y otro elemento dependiendo de la evaluación de esa condición.
- También se puede hacer esto es mediante la utilización del AND lógico (&&). La condición se evaluará y en caso de ser verdadera retornará la segunda parte de la expresión, mostrando por pantalla el mensaje deseado

```jsx
function Lista() {
  const ciudades = [];

  return (
    <>
      <h1>Lista de ciudades</h1>
      {ciudades.length === 0 ? <p>No hay ciudades.</p> : null}
      {ciudades.length === 0 && <p>No hay ciudades.</p>}
    </>
  );
}
```

## Paso de propiedades de un componente padre a un componente hijo

Para enviar propiedades de un componente superior o padre hacia un componente inferior o hijo en la estructura de árbol que crea React se hace lo siguiente.

### Componente hijo

El componente funcional hijo espera como parámetros de la función todos los valores que espera recibir desde quien está invocando esa funcion, es decir el componente padre. Existen dos formas de recibir esos parámetros:

- Creando un objeto único que agrupa todos los parámetros
- Desestructurando los parámetros para recibirlos uno a uno

```jsx
// recibiendo todos los parámetros en un objeto props
function Child(props) { ... }

// desestructurando los parámetros para recibirlos uno a uno
function Child({ title, description, price }) { ... }
```

![componente hijo recibiendo información desde un componente padre](./assets/react-child-component.png)

### Componente padre

El componente padre deberá enviar las propiedades que espera el componente hijo como argumentos, a través de atributos que tiene el componente hijo. Los atributos se deben llamar igual en el componente padre y en el hijo para que se cree la relación correctamente

```jsx
// uso del componente hijo desde el componente padre
function Father() {
  return (
    <>
      <Child
        title={'Laptop'}
        description={'The best laptop gaming in the market.'}
        price={1800}
      />
    </>
  );
}
```

![componente padre enviando información a un componente hijo](./assets/react-father-component.png)

![relación entre componentes padre e hijo](./assets/react-father-child-relationship.png)

## Escucha de eventos enviados desde un componente hijo a un componente padre. Notificar una acción desde un componente hijo hacia un componente padre.

Para poder escuchar desde un componente padre, eventos ejecutados dentro de un componente hijo, se deben enviar funciones que actuarán como callbacks desde el elemento padre hacia el hijo y esperar a que el hijo use esa función para finalmente notificar al componente padre que un evento ha ocurrido.

### Componente padre

El componente padre crea una funcion que por lo general tiene un nombre que inicia con `handle...`, el propósito de ésta función es el de manejar el evento generado desde el componente hijo, de allí que su nombre inicie con esta palabra. Es una convención que se sugiere seguir siempre. Esta función puede o no puede tener parámetros y será ejecutada desde el componente hijo, pero la lógica que se ejecutará estará implementada en el componente padre.

```jsx
function Father() {
  // función que pretende manejar el evento click de un botón que está en el componente hijo.
  // esta función espera recibir un mensaje como parámetro y posteriormente imprimir por consola el mensaje enviado desde el componente hijo.
  // notar que el nombre de la función inicia con la palabra 'handle' ya que manejará la notificación enviada desde el componente hijo.
  const handleClickButton = (message) => {
    console.log(`Message from button: ${message}`);
  };

  return (
    <>
      {/* el componente hijo espera recibir la función en un argumento llamado 'onClickButton'.  La función es enviada al componente hijo pero no se ejecuta inmediatamente, por eso, no se deben colocar paréntesis () al final del nombre de la función */}
      <Child onClickButton={handleClickButton} />
    </>
  );
}

export default Father;
```

![componente padre enviando una función a un componente hijo para recibir una notificación](./assets/react-father-notification.png)

### Componente hijo

El componente hijo espera un valor cualquiera en sus parámetros y por eso se sugiere que si lo que se espera es una función para notificarle de la ocurencia de un eventos al componente padre, este parámetro inicie con `on...`. Luego, esta función es usada en alguno de los elementos del componente hijo que pueda disparar una acción, como por ejemplo los eventos `onClick`, `onFocus`, `onKeyDown`, etc.

```jsx
// El componente hijo espera recibir un valor por parámetro, se sabe que es una función porque inicia con 'on'.
function Child({ onClickButton }) {
  return (
    <>
      <button
        onClick={() => {
          // La función enviada desde el padre, será ejecutada dentro del evento 'onClick' del botón. Por eso, en este momento si se colocan los paréntesis () que indican la ejecución de la función y se envían todos los argumentos requeridos para que le componente padre los reciba y actúe según la lógica implementada.
          onClickButton('Hi, you click me');
        }}
      >
        Click Me!
      </button>
    </>
  );
}
```

![componente hijo recibiendo una función desde el componente padre para disparar una notificación](./assets/react-child-notification.png)

A continuación se explican en una secuencia los pasos efectuados durante la comunicación de los dos componentes.

![componentes padre e hijo interactuando con una función](./assets/react-father-child-notification.png)

## Componentes como hijos de otro componente.

En react podemos crear componentes que tengan otros componentes internamente, permitiendo reutilización de código y también logrando adaptación y flexibilidad.
El objetivo de pasar otros componentes o incluso código HTML dentro de otro componente permite crear componentes reutilizables y modificables con una amplia variedad de posibilidades. Esto se puede lograr pasando todos los tags en una sola propiedad que por convención se llamará children y haciendo que se renderice todo en un componente hijo. El componente hijo actuará como un contenedor y permitirá mantener el mismo diseño, El componente padre es el que decidirá qué elementos le enviará al componente hijo para ser renderizados. El componente padre podrá usar tantas veces como quiera el componente hijo cambiando su contenido.

![componentes padre e hijo interactuando con contenido children](./assets/react-father-child-children.png)

## Diferencia entre State & Props

**Props:**

- Son las entradas que se pasan a un componente.
- Son parecidas a los parámetros de una función.
- Se deben tratar como inmutables (que no se pueden cambiar).

**State:**

- Información manejada por un componente que puede cambiar con el tiempo.
- Son parecidas a las variables locales dentro de una función.
- Se deben tratar como mutables (pueden cambiar con el tiempo).

Algo que tienen en común las propiedades y el estado es que cada vez que cambian, React va a volver a renderizar el componente.

## Hooks

### useState

useState es un hook de React, el cual crea una variable de estado, la cual nos ayuda a rastrear el estado en los componentes y actualiza la interface de usuario cuando este cambia.

Primero se debe entender porque se necesita el hook useState. Este hook permite que la interfaz se vuelva a renderizar en cada cambio que se genere de la variable que usa este hook, de lo contrario, si tenemos una variable común creada con javascript (`const color = 'red'`), React no podrá detectar los cambios efectuados en esta variable y no actualizará la pagina web.

```jsx
// importar el hook desde la biblioteca de React
import { useState } from 'react';

function UseStateHook() {
  // el hook 'useState' retorna un arreglo que se puede desestructurar en dos elementos:
  //  - el primero es la variable de estado
  //  - el segundo es una función que ayuda a actualizar la variable de estado

  const [color, setColor] = useState('Red');
  // se crea una funcion que maneja el cambio de estado llamando a la función actualizadora dada por el hook useState
  const handleColor = () => setColor('Blue');
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={handleColor}>Blue</button>
    </>
  );
}
```

![uso del hook useState](./assets/react-useState.png)

### useEffect

useEffect permite controlar posibles efectos secundarios de eventos en sus componentes. Algunos eventos que pueden probocar efectos secundarios son:

- Obtener información de un API
- Actualizar el DOM directamente
- Uso de timers como SetTimeout y SetInterval

El hook useEffect es una función que recibe 2 parámetros

1. Un callback que se encargará de manejar todos los efectos secundarios que puedan ocurrir en el componente.
2. Una lista de dependencias que pueden desencadenar efectos secundarios. Esta lista es opcional.

   a. Si no se coloca, el componente se va a renderizar cada vez que se detecte un cambio en el estado o en las propiedades del componente. Este caso puede hacer que el componente se actualice de forma infinita.

   b. Si se coloca una arreglo vacío ([]), el compponente solo se va a renderizar una vez, cuando éste es cargado.

   c. Si se coloca algúna variable o lista de variables, el componente se va a renderizar cada vez que detecte un cambio en cualquiera de los elementos de esa lista.

```jsx
// importar los hooks que se quieren usar
import { useEffect, useState } from 'react';

function useEfectHook() {
  // este estado se utilizará para actualizar la página con un contador
  const [count, setCount] = useState(0);

  // el hook de useEffect va a manejar los efectos secundarios de usar un setTimeout, el cual va a incrementar el contador cada segundo
  useEffect(
    // callback: manejará el efecto secundario de usar la función setTimeout
    () => {
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    },
    // lista de dependencias: todas las dependencias que se quieren rastrear para ejecutar el hook, esta lista puede ser vacía []
    [count]
  );

  return (
    <>
      <h1>I`ve rendered {count} times</h1>
    </>
  );
}

export default useEfectHook;
```

![uso del hook useEffect](./assets/react-useEffect.png)

### useRef

useRef nos permite crear variables mutables las cuales no van a volver a renderizar el componente, se puede usar como una mejora en el rendimiento de la aplicación evitando que el componente vuelva a renderizarse cuando una variable cambia. Este hook también es usado para acceder a los elementos del DOM y con ello dar la posibilidad de manipular determinados elementos.

A continuación se muestran sus dos usos.

En la siguiente imágen se ve que en la línea 5 se crea una variable con el uso del hook useRef y su valor es inicializado en 0. luego, en la linea 7 se hace uso del hook useEffect para que cada vez que el componente es renderizado incremente el valor de la variable referenciada en 1. El valor de esta variable se encuentra en la propiedad `current`. Finalmente en la línea 16 se muestra en la pantalla el valor que tiene la variable referenciada. De esta forma se evita que el componente se vuelva a renderizar cada vez que el valor de `count` es modificado.
![uso del hook useRef con variables](./assets/react-useRef-variable.png)

En el siguiente ejemplo de uso del hook useRef, se ve que en la linea 4 se crea una constante para guardar el elemento `input` que se encuentra en el DOM, finalmente en la linea 13, como uno de sus atributos se coloca la palabra `ref` y se asigna el elemento actual a la variable creada previamente. Se pueden usar eventos para manipular y cambiar el estado del elemento capturado, tal como lo hace la función implementada en la linea 6, la cual es llamada por el evento `onClick` del botón.
![uso del hook useRef con elementos del DOM](./assets/react-useRef-DOM-element.png)
