import React, { useState } from 'react';
import { Preferences } from '../../types/user';
import { Sun, Moon, Layout, Grid, Minimize2 } from 'lucide-react';

interface PreferencesStepProps {
  data: Preferences;
  onDataChange: (data: Preferences) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const PreferencesStep: React.FC<PreferencesStepProps> = ({
  data,
  onDataChange,
  onSubmit,
  onBack,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSubmit();
  };

  const handleChange = (field: keyof Preferences, value: string) => {
    onDataChange({ ...data, [field]: value as any });
  };

  const themeOptions = [
    { value: 'light', label: 'Light Theme', icon: Sun, description: 'Clean and bright interface' },
    { value: 'dark', label: 'Dark Theme', icon: Moon, description: 'Easy on the eyes' },
  ];

  const layoutOptions = [
    { value: 'classic', label: 'Classic', icon: Layout, description: 'Traditional layout with sidebar' },
    { value: 'modern', label: 'Modern', icon: Grid, description: 'Card-based modern interface' },
    { value: 'minimal', label: 'Minimal', icon: Minimize2, description: 'Clean and focused design' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Customize your experience</h2>
        <p className="text-gray-600">Choose your preferred theme and dashboard layout</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Theme Preference</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {themeOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange('theme', option.value)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                data.theme === option.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <option.icon className={`w-6 h-6 ${data.theme === option.value ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{option.label}</h4>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dashboard Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {layoutOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange('dashboardLayout', option.value)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                data.dashboardLayout === option.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <option.icon className={`w-6 h-6 ${data.dashboardLayout === option.value ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{option.label}</h4>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Setting up...</span>
            </span>
          ) : (
            'Complete Setup'
          )}
        </button>
      </div>
    </div>
  );
};

export default PreferencesStep;