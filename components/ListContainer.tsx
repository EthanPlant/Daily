import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import List from './List';

export default function ListContainer() {
  const [activeList, setActiveList] = useState(0);
  return (
    <div>
      <h2 className="ml-5 font-inter text-base font-bold">My Lists</h2>
      <div className="flex flex-col py-3">
        <List isActive={activeList === 0} initialName="List 1" setActive={() => setActiveList(0)} />
        <List isActive={activeList === 1} initialName="List 2" setActive={() => setActiveList(1)} />
        <List isActive={activeList === 2} initialName="List 3" setActive={() => setActiveList(2)} />
        <button className="mx-0 my-auto max-h-12 w-36 cursor-pointer rounded-lg pl-2 text-start leading-5 text-gray-700 xl:w-4/5">
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          New List
        </button>
      </div>
    </div>
  );
}
