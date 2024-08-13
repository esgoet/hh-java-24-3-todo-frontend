import {ToDo} from "../../types/types.ts";
import ToDoCard from "../card/ToDoCard.tsx";
import "./ToDoBoard.css";

type ToDoBoardProps = {
    allToDos: ToDo[]
}
export default function ToDoBoard({allToDos} : ToDoBoardProps) {
    return (
        <>
            <div id={"board"}>
                <section className={"board-section"}>
                    <h2>Open</h2>
                    {allToDos.filter(toDo => toDo.status === "OPEN").map((toDo) => <ToDoCard toDo={toDo}/>)}
                </section>
                <section className={"board-section"}>
                    <h2>In Progress</h2>
                    {allToDos.filter(toDo => toDo.status === "IN_PROGRESS").map((toDo) => <ToDoCard toDo={toDo}/>)}
                </section>
                <section className={"board-section"}>
                    <h2>Done</h2>
                    {allToDos.filter(toDo => toDo.status === "DONE").map((toDo) => <ToDoCard toDo={toDo}/>)}
                </section>
            </div>
        </>
    )
}