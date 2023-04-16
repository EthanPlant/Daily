import useInput from '@/hooks/useInput'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEvent } from 'react'

type ListProps = {
  isActive: boolean
  initialName: string
  setActive: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function List({ isActive, initialName, setActive }: ListProps) {
  const [name, , onNameChange] = useInput(initialName)
  return (
    <div
      className={`flex items-center w-44 xl:w-4/5 h-12 my-0 mx-auto leading-10 pl-2 rounded-lg cursor-pointer transition-colors ${
        isActive && 'bg-blue-300'
      }`}
      onClick={setActive}
    >
      <input
        type="text"
        className={`w-36 xl:w-4/5 border-none outline-none transition-colors ${
          isActive ? 'bg-blue-300' : 'bg-gray-200 pointer-events-none'
        }`}
        value={name}
        onChange={onNameChange}
        aria-label="List Name"
      />
      {isActive && <FontAwesomeIcon icon={faXmark} />}
    </div>
  )
}
