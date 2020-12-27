import React from 'react';
import './DropdownList.scss';

interface Props {
  id?: string;
  options: Array<{ value: string; text: string }>;
  value: string;
  handleOnChange: (value: string) => void;
  label?: string;
  placeHolder: string;
}

export default function DropdownList(props: Props) {
  const { id, options, value, handleOnChange, label, placeHolder } = props;

  return (
    <label className='dropdownList'>
      <span>{label}</span>
      <select id={id} value={value} onChange={(e) => handleOnChange(e.target.value)}>
        <option value='' hidden>
          {placeHolder}
        </option>
        {options.map((e, index) => (
          <option key={`${id}-${index}`} value={e.value}>
            {e.text}
          </option>
        ))}
      </select>
    </label>
  );
}
