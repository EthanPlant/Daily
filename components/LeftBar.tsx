import {
  faGear,
  faRectangleList,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ListContainer from './ListContainer'

export default function LeftBar() {
  return (
    <aside className="flex flex-col w-1/5 xl:w-56 h-screen bg-gray-200">
      <h1 className="font-inter font-bold text-2xl mt-4 mb-12 ml-3">
        <FontAwesomeIcon className="mr-2" icon={faRectangleList} />
        <Link href="/">Daily</Link>
      </h1>
      <ListContainer />
      <div className="mt-auto mb-4 flex flex-col ml-3 items-start justify-center">
        <button className="mb-3">
          <FontAwesomeIcon icon={faGear} className="mr-1" />
          Settings
        </button>
        <button className="bg-blue-200 hover:bg-blue-400 py-2 px-4 rounded transition-colors">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            rotation={180}
            className="mr-1"
          />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
