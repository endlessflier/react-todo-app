import { useContext, useRef } from "react";
import { AppContext } from "./App";

function ToDoItem({ index }) {
  const { toDoList, setToDoList } = useContext(AppContext);
  const task = toDoList[index];

  const handleDeleteTask = () => {
    setToDoList(toDoList.filter((x, i) => i !== index));
  };

  const handleCheckbox = (e) => {
    const newToDoList = toDoList.map((x, i) =>
      i === index ? { completed: e.target.checked, taskName: x.taskName } : x
    );
    setToDoList(newToDoList);
  };
  return (
    <div className="todo">
      <div>
        <input
          id={index}
          type="checkbox"
          onChange={handleCheckbox}
          checked={task.completed}
        />
        <label className={task.completed && "checked"} htmlFor={index}>
          {task.taskName}
        </label>
      </div>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}

function MyToDoForm() {
  const { toDoList, setToDoList } = useContext(AppContext);

  const taskNameRef = useRef(null);

  const handleAddTask = () => {
    setToDoList([
      ...toDoList,
      { completed: false, taskName: taskNameRef.current.value }
    ]);
  };
  return (
    <div className="todoForm">
      <div className="inputBox">
        <input placeholder="enter task..." type="text" ref={taskNameRef} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {toDoList.map((task, index) => (
        <ToDoItem key={index} index={index} />
      ))}
    </div>
  );
}

export default MyToDoForm;
