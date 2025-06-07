# A fictional onboarding platform that helps teams manage projects, people, and productivity

A responsive multi-step onboarding flow built using **React**, **TypeScript**, **Tailwind CSS**, and **React Router**. It collects user information across steps and saves it locally, simulating a real-world onboarding experience.

---


## Tech Stack we have used:

-  React (with Vite)
-  TypeScript
-  Tailwind CSS
-  React Router DOM
-  LocalStorage (for persistence user data in case the user refeshes or goes bac to home page, the data remains intact)

---

##  Setup Instructions

1. **Clone the repository**  

   
2. **change the directory** 
   cd onboarding-app




# Folder Structure (Simplified)

   src/
    │
    ├── components/
    │   ├── Onboarding.tsx
    │   ├── ProgressBar.tsx
    │   └── steps/
    │   |    ├── PersonalInfoStep.tsx
    │   |    ├── BusinessInfoStep.tsx
    │   |    └── PreferencesStep.tsx
    │   └── Dashboard/
    |   |   |── StatsCard.tsx
    │   |   ├── WeelyCHrt.tsx.tsx
    │   |
    |   |── Dashboard.tsx
    |   |── FormInput.tsx
    |   |── FormSelect.tsx
    |   |── Onboarding.tsx
    |   |── ProgressBar.tsx
    |
    ├── context/
    │   └── UserContext.tsx
    │
    ├── types/
    │   └── user.ts
    │
    ├── App.tsx
    ├── main.tsx
    └── index.css
    └── Readme.md

##  Screenshots of the app
![image 1](image.png)
![Image 2](image2.png)
![image 3](image3.png)