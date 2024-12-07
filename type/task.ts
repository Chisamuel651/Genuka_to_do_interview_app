export interface ITask {
    id: number,
    title: string,
    status: "Open"|"Closed"|"Archived",
    project: string,
    time: string,
    participants: string[],
    completed: boolean
}