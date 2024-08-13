import {ToDo} from "../../types/types.ts";
import ToDoCard from "../card/ToDoCard.tsx";
import "./ToDoBoard.css";

type ToDoBoardProps = {
    allToDos: ToDo[],
    deleteToDo: (toDo: ToDo) => void,
    updateToDo: (oldToDo: ToDo, newToDo: ToDo) => void
}
export default function ToDoBoard({allToDos, deleteToDo, updateToDo} : ToDoBoardProps) {
    const statuses : string[] = ["OPEN","IN_PROGRESS","DONE"]
    return (
        <>
            <div id={"board"}>
                {statuses.map((status) => (
                    <section key={status} className={"board-section"}>
                        <h2>{status.replace("_", " ")}</h2>
                        {allToDos.filter(toDo => toDo.status === status).map((toDo) => <ToDoCard key={toDo.id}
                                                                                                 toDo={toDo}
                                                                                                 deleteToDo={deleteToDo}
                                                                                                 updateToDo={updateToDo}
                        />)}
                    </section>
                ))}
            </div>
        </>
    )
}