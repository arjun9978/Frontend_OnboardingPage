import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  error,
  placeholder = 'Select an option',
  required = false,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white ${
            error
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default FormSelect;