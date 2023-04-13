import TodoCreator from './TodoCreator'

export default function TodoList() {
  return (
    <div className="flex flex-col items-stretch gap-4 mx-9">
      <TodoCreator />
    </div>
  )
}
