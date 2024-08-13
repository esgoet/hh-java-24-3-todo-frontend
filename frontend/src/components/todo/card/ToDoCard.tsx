import {ToDo} from "../../types/types.ts";
import "./ToDoCard.css";
import {useState} from "react";
import ToDoEdit from "../edit/ToDoEdit.tsx";

type ToDoCardProps = {
    toDo: ToDo,
    deleteToDo: (toDo: ToDo) => void,
    updateToDo: (oldToDo: ToDo, newToDo: ToDo) => void
}
export default function ToDoCard({toDo, deleteToDo, updateToDo } : ToDoCardProps) {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <>
            <article className={"card"}>
                <h3>{toDo.description}</h3>
                <button onClick={()=>deleteToDo(toDo)}>Delete</button>
                <button onClick={()=> setModal(true)}>Edit</button>
            </article>
           <ToDoEdit toDo={toDo} updateToDo={updateToDo} modal={modal} closeModal={()=> setModal(false)}/>

        </>
    )
}