import React, { useState } from 'react';
import { BusinessInfo, INDUSTRIES, COMPANY_SIZES } from '../../types/user';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';

interface BusinessInfoStepProps {
  data: BusinessInfo;
  onDataChange: (data: BusinessInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({
  data,
  onDataChange,
  onNext,
  onBack,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!data.industry) {
      newErrors.industry = 'Please select an industry';
    }

    if (!data.companySize) {
      newErrors.companySize = 'Please select company size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleChange = (field: keyof BusinessInfo, value: string) => {
    onDataChange({ ...data, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell us about your business</h2>
        <p className="text-gray-600">This helps us customize your experience</p>
      </div>

      <FormInput
        label="Company Name"
        value={data.companyName}
        onChange={(value) => handleChange('companyName', value)}
        error={errors.companyName}
        placeholder="Enter your company name"
        required
      />

      <FormSelect
        label="Industry"
        value={data.industry}
        onChange={(value) => handleChange('industry', value)}
        options={INDUSTRIES}
        error={errors.industry}
        placeholder="Select your industry"
        required
      />

      <FormSelect
        label="Company Size"
        value={data.companySize}
        onChange={(value) => handleChange('companySize', value)}
        options={COMPANY_SIZES}
        error={errors.companySize}
        placeholder="Select company size"
        required
      />

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
        >
          Back
        </button>
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

export default BusinessInfoStep;