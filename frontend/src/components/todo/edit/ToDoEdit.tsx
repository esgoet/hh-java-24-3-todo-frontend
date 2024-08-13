import {ToDo} from "../../types/types.ts";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";

type ToDoEditProps = {
    toDo: ToDo,
    updateToDo: (oldToDo: ToDo, newToDo: ToDo) => void,
    modal: boolean,
    closeModal: () => void;
}
export default function ToDoEdit({toDo, updateToDo, modal, closeModal}: ToDoEditProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [updatedToDo, setUpdatedToDo] = useState<ToDo>(toDo);

    useEffect(() => {
        if (modal) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [modal]);

    function onChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        setUpdatedToDo({...updatedToDo, [e.target.name]: e.target.value});
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (toDo != updatedToDo) {
            updateToDo(toDo, updatedToDo);
        }
        closeModal();
    }
    return (
        <>
            <dialog autoFocus={true} ref={dialogRef} onCancel={()=> closeModal()}>
                <form onSubmit={onSubmit}>
                    <label>
                        Description:
                        <input onChange={onChange} value={updatedToDo.description} name={"description"}/>
                    </label>
                    <label>
                        Status:
                        <select value={updatedToDo.status} name={"status"} onChange={onChange}>
                            <option value={"OPEN"}>Open</option>
                            <option value={"IN_PROGRESS"}>In Progress</option>
                            <option value={"DONE"}>Done</option>
                        </select>
                    </label>
                    <button type={"submit"}>Done</button>
                </form>
            </dialog>
        </>
    )
}