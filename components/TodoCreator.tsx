import { useState } from 'react'
import TagInput from './TagInput'

export default function TodoCreator() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className={`bg-gray-200 leading-10 p-3 rounded-lg flex flex-col gap-5 overflow-hidden ${
        expanded ? 'max-h-80' : 'max-h-12'
      } transition-[max-height] duration-500 ease-in-out`}
      onClick={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <input
        type="text"
        className="leading-10 border-none outline-none bg-gray-200"
        placeholder="Add Task"
      />
      <label className="ml-1">
        Date
        <input
          type="date"
          className="ml-[20%] leading-10 border-none outline-none bg-gray-200"
        />
      </label>
      <div className="flex justify-between">
        <label className="ml-1">Priority</label>
        <span>
          <label>
            High
            <input
              type="radio"
              name="priority"
              value="high"
              className="ml-2 accent-red-400"
            />
          </label>
        </span>
        <span>
          <label>
            Medium
            <input
              type="radio"
              name="priority"
              value="medium"
              className="ml-1 accent-yellow-400"
            />
          </label>
        </span>
        <span>
          <label>
            Low
            <input
              type="radio"
              name="priority"
              value="low"
              className="ml-1 accent-gray-400"
            />
          </label>
        </span>
        <span></span>
      </div>
      <label className="ml-1">
        Tags
        <TagInput />
      </label>
    </div>
  )
}
