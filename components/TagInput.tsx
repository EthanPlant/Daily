import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import useInput from '@/hooks/useInput';

export default function TagInput() {
  const [tag, setTag, onTagChange] = useInput('');
  const [tags, setTags] = useState<string[]>([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = tag.trim();

    if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setTag('');
    }

    if (key === 'Backspace' && !tag.length && tags.length && isKeyReleased) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop() as string;

      setTags(tagsCopy);
      setTag(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <div className="flex w-full max-w-full overflow-scroll pl-3">
      {tags.map((tag, i) => (
        <div
          className="my-1.5 ml-0 mr-2 flex items-center whitespace-nowrap rounded border-2 border-blue-200 bg-blue-200 py-0 pl-2 pr-1"
          key={i}
        >
          {tag}
          <button className="flex, cursor-pointer border-none p-1" onClick={() => deleteTag(i)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <input
        className="w-full min-w-[50%] rounded-s border-none bg-gray-200 p-3 pl-3"
        placeholder="Add Tag"
        value={tag}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onTagChange}
      />
    </div>
  );
}
