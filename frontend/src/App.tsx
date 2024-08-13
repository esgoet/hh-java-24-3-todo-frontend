
import './App.css'
import {useEffect, useState} from "react";
import {ToDo} from "./components/types/types.ts";
import axios from "axios";
import ToDoBoard from "./components/todo/board/ToDoBoard.tsx";

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


    //addToDo function


  return (
    <>
    {/*    Header*/}
        <ToDoBoard allToDos={allToDos}/>
    {/*    ToDo Gallery --> filtern mit status
        contains: ToDo Card, mit einzelnem ToDo */}
    {/*    Add ToDo*/}
    {/*    Footer */}
    </>
  )
}

export default App
