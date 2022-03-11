import { useState, createContext } from "react";
import MyToDoForm from "./MyToDoForm";
import "./styles.css";

export const AppContext = createContext(null);

const initialTaskList = [
  { completed: false, taskName: "Account creation" },
  { completed: true, taskName: "Profile completion" },
  { completed: false, taskName: "Proposal" },
  { completed: true, taskName: "Interview 1" },
  { completed: false, taskName: "Interview 2" },
  { completed: false, taskName: "Interview 3" }
];

export default function App() {
  const [toDoList, setToDoList] = useState(initialTaskList);
  console.log("rendereed");
  return (
    <div className="App">
      <h1> To Do: {toDoList.length}</h1>
      <AppContext.Provider value={{ toDoList, setToDoList }}>
        <MyToDoForm />
      </AppContext.Provider>
    </div>
  );
}
