export interface PersonalInfo {
  name: string;
  email: string;
}

export interface BusinessInfo {
  companyName: string;
  industry: string;
  companySize: string;
}

export interface Preferences {
  theme: 'light' | 'dark';
  dashboardLayout: 'classic' | 'modern' | 'minimal';
}

export interface UserData extends PersonalInfo, BusinessInfo, Preferences {
  onboardingCompleted: boolean;
}

export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Marketing',
  'Consulting',
  'Other'
];

export const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-1000 employees',
  '1000+ employees'
];