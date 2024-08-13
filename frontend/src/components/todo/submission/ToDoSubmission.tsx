import {FormEvent, useState} from "react";

type ToDoSubmissionProps = {
    addToDo: (toDo: string) => void;
}

export default function ToDoSubmission({addToDo}:ToDoSubmissionProps) {
    const [toDo, setToDo ] = useState<string>("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (toDo) {
            addToDo(toDo);
            setToDo("");
            alert("Submitted!")
            return
        }
        alert("Please enter ToDo");

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Type new To Do..."} onChange={(e) => setToDo(e.target.value)} value={toDo}/>
                <button type={"submit"}>Add</button>
            </form>
        </>
    )
}