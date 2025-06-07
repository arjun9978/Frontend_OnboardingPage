import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[]; // Optional labels for steps
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepLabels }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      className="w-full"
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label="Progress"
    >
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary-500 to-accent h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between flex-wrap gap-2">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNum = index + 1;
          const isActive = stepNum <= currentStep;
          return (
            <div
              key={stepNum}
              tabIndex={0}
              className={`text-xs sm:text-sm font-semibold cursor-default select-none transition-colors duration-300
                ${isActive ? 'text-primary-600' : 'text-gray-400'}
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 rounded`}
              title={stepLabels ? stepLabels[index] : `Step ${stepNum}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {stepLabels ? stepLabels[index] : `Step ${stepNum}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
