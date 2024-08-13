
import './App.css'
import {useEffect, useState} from "react";
import {ToDo} from "./components/types/types.ts";
import axios from "axios";
import ToDoBoard from "./components/todo/board/ToDoBoard.tsx";
import ToDoSubmission from "./components/todo/submission/ToDoSubmission.tsx";

function App() {
    const [allToDos, setAllToDos ] = useState<ToDo[]>([]);

    function loadToDos() {
        axios.get("/api/todo")
            .then((response) => setAllToDos(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(()=> {
        loadToDos();
    },[])


    function addToDo(toDoDesc: string) {
        const toDo : ToDo = {
            id: "",
            description: toDoDesc,
            status: "OPEN"
        }
        axios.post("/api/todo", toDo)
            .then((r) => r.status === 200 && loadToDos())
            .catch((error) => console.log(error));
    }

    function deleteToDo(toDo: ToDo) {
        axios.delete(`/api/todo/${toDo.id}`)
            .then((r) => r.status === 200 && loadToDos())
            .catch((error) => console.log(error));
    }

    function updateToDo(oldToDo: ToDo, newToDo: ToDo) {
        axios.put(`api/todo/${oldToDo.id}/update`, newToDo)
            .then((r) => r.status === 200 && loadToDos())
            .catch((error) => console.log(error));
    }


  return (
    <>
    {/*    Header*/}
        <main>
            <ToDoSubmission addToDo={addToDo}/>
            <ToDoBoard allToDos={allToDos} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
        </main>

    {/*    Footer */}
    </>
  )
}

export default App
