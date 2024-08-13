// components/CustomInput.js
import { useState } from 'react';

export default function CustomInput({
  label,
  id,
  value,
  onChange,
  onBlur,
  onKeyDown,
  disabled,
  type = 'text',
  placeholder,
  color = 'gray',
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (event) => {
    if (type === 'number') {
      if (event.nativeEvent.data !== 'e' && event.nativeEvent.data !== 'E') {
        event.target.value = event.target.value.replace(/[eE]/g, '');
      } else {
        event.target.value = inputValue;
      }
    }
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-2 top-2 transition-all ${
          inputValue ? 'text-xs -top-2' : 'text-base top-2'
        } text-${color}-500`}
        style={{ color, borderColor: color }}
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full px-3 py-2 mt-4 border rounded-md text-des"
        value={inputValue}
        type={type}
        placeholder={placeholder}
        onInput={handleInput}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        disabled={disabled}
        required
      />
    </div>
  );
}
