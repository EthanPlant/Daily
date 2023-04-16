import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useInput from '@/hooks/useInput';

type ListProps = {
  isActive: boolean;
  initialName: string;
  setActive: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function List({ isActive, initialName, setActive }: ListProps) {
  const [name, , onNameChange] = useInput(initialName);
  return (
    <div
      className={`mx-auto my-0 flex h-12 w-44 cursor-pointer items-center rounded-lg pl-2 leading-10 transition-colors xl:w-4/5 ${
        isActive && 'bg-blue-300'
      }`}
      onClick={setActive}
    >
      <input
        type="text"
        className={`w-36 border-none outline-none transition-colors xl:w-4/5 ${
          isActive ? 'bg-blue-300' : 'pointer-events-none bg-gray-200'
        }`}
        value={name}
        onChange={onNameChange}
        aria-label="List Name"
      />
      {isActive && <FontAwesomeIcon icon={faXmark} />}
    </div>
  );
}
