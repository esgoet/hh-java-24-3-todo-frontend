export type ToDo = {
    id: string,
    description: string,
    status: "OPEN" | "IN_PROGRESS" | "DONE"
}

export type Action = {
    type: string,
    timestamp: string,
    todo: ToDo
}