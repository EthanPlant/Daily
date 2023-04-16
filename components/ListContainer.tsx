import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import List from './List'

export default function ListContainer() {
  const [activeList, setActiveList] = useState(0)
  return (
    <div>
      <h2 className="font-inter text-base font-bold ml-5">My Lists</h2>
      <div className="py-3 flex flex-col">
        <List
          isActive={activeList === 0}
          initialName="List 1"
          setActive={() => setActiveList(0)}
        />
        <List
          isActive={activeList === 1}
          initialName="List 2"
          setActive={() => setActiveList(1)}
        />
        <List
          isActive={activeList === 2}
          initialName="List 3"
          setActive={() => setActiveList(2)}
        />
        <button className="w-36 xl:w-4/5 max-h-12 my-auto mx-0 leading-5 pl-2 rounded-lg cursor-pointer text-gray-700 text-start">
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          New List
        </button>
      </div>
    </div>
  )
}
