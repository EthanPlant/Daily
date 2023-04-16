import TaskCreator from './TaskCreator'

export default function TaskList() {
  return (
    <div className="flex flex-col items-stretch gap-4 mx-9">
      <TaskCreator />
    </div>
  )
}
