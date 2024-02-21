import React, { useState } from "react";

interface IToDos {
    id: number,
    task: string,
    isCompleted: boolean,
}

// const mockItems = [
//   { id: 1, task: "dinner", isComplete: true },
//   { id: 2, task: "lunch", isComplete: true },
//   { id: 3, task: "brunch", isComplete: false },
// ];
// input component and component that render lists
export const ToDoLists: React.FC = () => {
  // two useState
  // one for content of the task, text
  // one to display a list of tasks
  const [toDos, setToDos] = useState<IToDos[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
        const newTask: IToDos = {id: Date.now(), task, isCompleted: false}
        setToDos([...toDos, newTask]);
        setTask("");
    }
  }

  const handleDelete = (id: number) => {
    const updatedItems = toDos.filter((toDo) => toDo.id !== id)
    setToDos(updatedItems)
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            {toDo.task}
            <button onClick={() => handleDelete(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
