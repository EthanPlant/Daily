import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

import useOnClickOutside from '@/hooks/useOnClickOutside';

import TagInput from './TagInput';

export default function Task() {
  const [expanded, setExpanded] = useState(false);

  const taskRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(taskRef, () => {
    setExpanded(false);
  });

  return (
    <div
      className={`flex flex-col gap-5 overflow-hidden rounded-lg bg-gray-200 p-3 leading-10 ${
        expanded ? 'max-h-80' : 'max-h-14'
      } transition-max-height duration-500 ease-in-out`}
      onClick={() => setExpanded(true)}
      ref={taskRef}
    >
      <div className="flex items-center justify-start gap-3 bg-gray-200">
        <input
          type="checkbox"
          className="m-0 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-2 border-solid border-gray-600 bg-gray-200 p-0"
        />
        <div className="flex w-3/5 flex-col">
          <div className="ml-1 h-3 text-xs leading-3">No Date</div>
          <input
            type="text"
            className="pointer-events-none inline-block h-8 w-96 bg-gray-200 font-normal leading-8"
            value="Task Name"
          />
        </div>
      </div>
      <div>
        <label>
          Date
          <input type="date" className="ml-16 bg-gray-200" />
        </label>
      </div>
      <div className="flex justify-between">
        <label>Priority</label>
        <span>
          <label>
            High
            <input
              type="radio"
              name="priority"
              value={1}
              checked={true}
              className="ml-1 accent-red-400"
            />
          </label>
        </span>
        <span>
          <label>
            Medium
            <input type="radio" name="priority" value={2} className="ml-1 accent-yellow-400" />
          </label>
        </span>
        <span>
          <label>
            High
            <input type="radio" name="priority" value={3} className="ml-1 accent-gray-400" />
          </label>
        </span>
        <span></span>
      </div>
      <div className="flex justify-between">
        <label className="ml-1">
          Tags
          <TagInput />
        </label>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
