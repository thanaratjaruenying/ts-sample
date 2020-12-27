import React from 'react';

interface CheckboxInterface {
  label: string;
  isSelected: boolean;
  onCheckboxChange: (value: string) => void;
}

export default function Checkbox(props: CheckboxInterface) {
  const { label, isSelected, onCheckboxChange } = props;

  return (
    <label>
      <input type='checkbox' name={label} checked={isSelected} onChange={(e) => onCheckboxChange(e.target.name)} />
      {label}
    </label>
  );
}
