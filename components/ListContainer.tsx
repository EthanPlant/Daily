import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from './List'

export default function ListContainer() {
  return (
    <div>
      <h2 className="font-inter text-base font-bold ml-5">My Lists</h2>
      <div className="py-3 flex flex-col">
        <List initialActive initialName="List 1" />
        <List initialName="List 2" />
        <List initialName="List 3" />
        <button className="w-36 xl:w-4/5 max-h-12 my-auto mx-0 leading-5 pl-2 rounded-lg cursor-pointer text-gray-700 text-start">
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          New List
        </button>
      </div>
    </div>
  )
}
