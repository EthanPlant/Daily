import { faGear, faRectangleList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import ListContainer from './ListContainer';

export default function LeftBar() {
  return (
    <aside className="flex h-screen w-1/5 flex-col bg-gray-200 xl:w-56" aria-label="Left Bar">
      <h1 className="mb-12 ml-3 mt-4 font-inter text-2xl font-bold">
        <FontAwesomeIcon className="mr-2" icon={faRectangleList} />
        <Link href="/">Daily</Link>
      </h1>
      <ListContainer />
      <div className="mb-4 ml-3 mt-auto flex flex-col items-start justify-center">
        <button className="mb-3">
          <FontAwesomeIcon icon={faGear} className="mr-1" />
          Settings
        </button>
        <button
          className="rounded bg-blue-200 px-4 py-2 transition-colors hover:bg-blue-400"
          onClick={() => void signOut()}
        >
          <FontAwesomeIcon icon={faRightFromBracket} rotation={180} className="mr-1" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
