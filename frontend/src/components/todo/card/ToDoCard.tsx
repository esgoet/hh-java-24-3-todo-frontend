import {ToDo} from "../../types/types.ts";
import "./ToDoCard.css";

type ToDoCardProps = {
    toDo: ToDo
}
export default function ToDoCard({toDo} : ToDoCardProps) {
    return (
        <>
            <article className={"card"}>
                <h3>{toDo.description}</h3>
                <p>{toDo.status}</p>
            </article>
        </>
    )
}