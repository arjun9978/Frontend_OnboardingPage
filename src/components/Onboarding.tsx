// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../context/UserContext';
// import ProgressBar from './ProgressBar';
// import PersonalInfoStep from './steps/PersonalInfoStep';
// import BusinessInfoStep from './steps/BusinessInfoStep';
// import PreferencesStep from './steps/PreferencesStep';
// import { PersonalInfo, BusinessInfo, Preferences } from '../types/user';

// const Onboarding: React.FC = () => {
//   const navigate = useNavigate();
//   const { updateUserData } = useUser();
//   const [currentStep, setCurrentStep] = useState(1);
//   const totalSteps = 3;

//   const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
//     name: '',
//     email: '',
//   });

//   const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
//     companyName: '',
//     industry: '',
//     companySize: '',
//   });

//   const [preferences, setPreferences] = useState<Preferences>({
//     theme: 'light',
//     dashboardLayout: 'modern',
//   });

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handleBack = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     const userData = {
//       ...personalInfo,
//       ...businessInfo,
//       ...preferences,
//       onboardingCompleted: true,
//     };
    
//     updateUserData(userData);
//     navigate('/dashboard');
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <PersonalInfoStep
//             data={personalInfo}
//             onDataChange={setPersonalInfo}
//             onNext={handleNext}
//           />
//         );
//       case 2:
//         return (
//           <BusinessInfoStep
//             data={businessInfo}
//             onDataChange={setBusinessInfo}
//             onNext={handleNext}
//             onBack={handleBack}
//           />
//         );
//       case 3:
//         return (
//           <PreferencesStep
//             data={preferences}
//             onDataChange={setPreferences}
//             onSubmit={handleSubmit}
//             onBack={handleBack}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-gray-200 rounded-2xl shadow-xl p-8 md:p-12">
//   <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 animate-slow-pulse-zoom">
//   Welcome Onboard! Let's get started
// </h2>


//   <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
//   <div className="transition-all duration-300 ease-in-out">
//     {renderStep()}
//   </div>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Onboarding;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ProgressBar from './ProgressBar';
import PersonalInfoStep from './steps/PersonalInfoStep';
import BusinessInfoStep from './steps/BusinessInfoStep';
import PreferencesStep from './steps/PreferencesStep';
import { PersonalInfo, BusinessInfo, Preferences } from '../types/user';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserData } = useUser();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    email: '',
  });

  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    companyName: '',
    industry: '',
    companySize: '',
  });

  const [preferences, setPreferences] = useState<Preferences>({
    theme: 'light',
    dashboardLayout: 'modern',
  });

  // Load saved data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      if (parsedData.name) {
        setPersonalInfo({
          name: parsedData.name || '',
          email: parsedData.email || '',
        });
      }

      if (parsedData.companyName) {
        setBusinessInfo({
          companyName: parsedData.companyName || '',
          industry: parsedData.industry || '',
          companySize: parsedData.companySize || '',
        });
      }

      if (parsedData.theme) {
        setPreferences({
          theme: parsedData.theme || 'light',
          dashboardLayout: parsedData.dashboardLayout || 'modern',
        });
      }

      if (parsedData.onboardingCompleted) {
        navigate('/dashboard'); // Skip onboarding if already done
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    const userData = {
      ...personalInfo,
      ...businessInfo,
      ...preferences,
      onboardingCompleted: false,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [personalInfo, businessInfo, preferences]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const userData = {
      ...personalInfo,
      ...businessInfo,
      ...preferences,
      onboardingCompleted: true,
    };

    localStorage.setItem('userData', JSON.stringify(userData)); // Save as completed

    updateUserData(userData);
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={personalInfo}
            onDataChange={setPersonalInfo}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <BusinessInfoStep
            data={businessInfo}
            onDataChange={setBusinessInfo}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <PreferencesStep
            data={preferences}
            onDataChange={setPreferences}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-200 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 animate-slow-pulse-zoom">
              Welcome Onboard! Let's get started
            </h2>

            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            <div className="transition-all duration-300 ease-in-out">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
