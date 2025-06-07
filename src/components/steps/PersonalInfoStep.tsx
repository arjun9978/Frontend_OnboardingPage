import React, { useState } from 'react';
import { PersonalInfo } from '../../types/user';
import FormInput from '../FormInput';

interface PersonalInfoStepProps {
  data: PersonalInfo;
  onDataChange: (data: PersonalInfo) => void;
  onNext: () => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  data,
  onDataChange,
  onNext,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onDataChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Onboard! Let's get started</h2> */}
        <p className="text-gray-600">Fill in the credentials to proceed further!</p>
      </div>

      <FormInput
        label="Full Name"
        value={data.name}
        onChange={(value) => handleChange('name', value)}
        error={errors.name}
        placeholder="Enter your full name"
        required
      />

      <FormInput
        label="Email Address"
        type="email"
        value={data.email}
        onChange={(value) => handleChange('email', value)}
        error={errors.email}
        placeholder="Enter your email address"
        required
      />

      <div className="flex justify-end pt-6">
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoStep;