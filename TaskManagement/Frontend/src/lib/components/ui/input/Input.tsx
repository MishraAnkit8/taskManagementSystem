// Input.tsx

import React, { useState } from 'react';
import '../../../../../src/App.css';

type InputProps = {
  value: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  inputClass?: string;
  onChange: (val: string) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  placeholder = '',
  isRequired = true,
  error = '',
  disabled = false,
  type = 'text',
  inputClass = '',
  onChange,
}) => {
  const [id] = useState(() => Math.random().toString(36).substring(2));

  return (
    <div className="lms-input-container"> {/* lms-input-container => margin-bottom */}
      <input
        id={id}
        className="lms-input"
        placeholder=""
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <label htmlFor={id} className="lms-placeholder">
        {placeholder}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      {error && (
        <div className="mt-1 text-red-500 text-sm">
          <span>(i) {error}</span>
        </div>
      )}
    </div> 

    
  );
};

export default Input;
