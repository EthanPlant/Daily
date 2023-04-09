import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

type ListProps = {
  initialActive?: boolean
  initialName: string
}

export default function List({ initialActive, initialName }: ListProps) {
  const [name, setName] = useState(initialName)
  const [active, setActive] = useState(initialActive)
  return (
    <button
      className={`flex items-center w-44 xl:w-4/5 h-12 my-0 mx-auto leading-10 pl-2 rounded-lg cursor-pointer transition-colors ${
        active && 'bg-blue-300'
      }`}
      onClick={() => setActive(!active)}
    >
      <input
        type="text"
        className={`w-36 xl:w-4/5 border-none outline-none transition-colors ${
          active ? 'bg-blue-300' : 'bg-gray-200 pointer-events-none'
        }`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {active && <FontAwesomeIcon icon={faXmark} />}
    </button>
  )
}
