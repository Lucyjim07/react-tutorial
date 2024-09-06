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
