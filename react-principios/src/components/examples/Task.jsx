// Ejemplo del uso del hook useCallback

import { useCallback, useState } from 'react';

const Task = () => {
  const [tasks, setTasks] = useState([{ name: 'task' }]);
  const [textTask, setTextTask] = useState('');

  const handleAddTask = useCallback(() => {
    console.log('Usando funcion para agregar una tarea');
    if (textTask.trim() === '') return;
    setTasks([...tasks, { id: tasks.length + 1, name: textTask }]);
    setTextTask('');
  }, [textTask]);

  const handleRemoveTask = useCallback((id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }, []);

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Task name'
          value={textTask}
          onChange={(e) => setTextTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <h2>My tasks</h2>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.name}</span>{' '}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Task;
