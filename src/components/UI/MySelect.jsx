import React from 'react';

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select className="MySelect"
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value=''>{defaultValue}</option>
      {options.map(option =>
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      )}
    </select>
  );
}

export default MySelect;
