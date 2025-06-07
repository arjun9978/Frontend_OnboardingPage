// import React from 'react';
// import { useUser } from '../context/UserContext';
// import { Users, FolderOpen, Bell, LogOut } from 'lucide-react';
// import StatsCard from './dashboard/StatsCard';
// import WeeklyChart from './dashboard/WeeklyChart';

// const Dashboard: React.FC = () => {
//   const { userData, clearUserData } = useUser();

//   if (!userData) {
//     return null;
//   }

//   const handleLogout = () => {
//     clearUserData();
//     window.location.href = '/';
//   };

//   const statsData = [
//     {
//       title: 'Team Members',
//       value: 24,
//       icon: Users,
//       color: 'bg-blue-500',
//       trend: { value: 12, isPositive: true },
//     },
//     {
//       title: 'Active Projects',
//       value: 8,
//       icon: FolderOpen,
//       color: 'bg-green-500',
//       trend: { value: 3, isPositive: true },
//     },
//     {
//       title: 'Notifications',
//       value: 12,
//       icon: Bell,
//       color: 'bg-orange-500',
//       trend: { value: 5, isPositive: false },
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//               <p className="text-sm text-gray-600">Welcome back, {userData.name}!</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <LogOut className="w-4 h-4" />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* User Info Card */}
//         <div className="bg-blue-50 rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Personal Info</h3>
//               <div className="mt-2 space-y-1">
//                 <p className="text-gray-900">{userData.name}</p>
//                 <p className="text-gray-600">{userData.email}</p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Company Details</h3>
//               <div className="mt-2 space-y-1">
//                 <p className="text-gray-900">{userData.companyName}</p>
//                 <p className="text-gray-600">{userData.industry}</p>
//                 <p className="text-gray-600">{userData.companySize}</p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Preferences</h3>
//               <div className="mt-2 space-y-1">
//                 <p className="text-gray-900 capitalize">{userData.theme} Theme</p>
//                 <p className="text-gray-600 capitalize">{userData.dashboardLayout} Layout</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {statsData.map((stat, index) => (
//             <StatsCard
//               key={index}
//               title={stat.title}
//               value={stat.value}
//               icon={stat.icon}
//               color={stat.color}
//               trend={stat.trend}
//             />
//           ))}
//         </div>

//         {/* Chart */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <WeeklyChart />
          
//           {/* Additional Info Card */}
//           <div className="bg-slate-50 rounded-xl shadow-sm border border-gray-100 p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
//             <div className="space-y-3">
//               <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                 <div className="font-medium text-gray-900">Invite Team Members</div>
//                 <div className="text-sm text-gray-600">Add new people to your workspace</div>
//               </button>
//               <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                 <div className="font-medium text-gray-900">Create New Project</div>
//                 <div className="text-sm text-gray-600">Start a new project with your team</div>
//               </button>
//               <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                 <div className="font-medium text-gray-900">View Reports</div>
//                 <div className="text-sm text-gray-600">Check detailed analytics and insights</div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;





import React from 'react';
import { useUser } from '../context/UserContext';
import { Users, FolderOpen, Bell, LogOut } from 'lucide-react';
import StatsCard from './dashboard/StatsCard';
import WeeklyChart from './dashboard/WeeklyChart';

const Dashboard: React.FC = () => {
  const { userData, clearUserData } = useUser();

  if (!userData) {
    return null;
  }

  const handleLogout = () => {
    clearUserData();
    window.location.href = '/';
  };

  const statsData = [
    {
      title: 'Team Members',
      value: 24,
      icon: Users,
      color: 'bg-emerald-600',
      trend: { value: 12, isPositive: true },
    },
    {
      title: 'Active Projects',
      value: 8,
      icon: FolderOpen,
      color: 'bg-amber-500',
      trend: { value: 3, isPositive: true },
    },
    {
      title: 'Notifications',
      value: 12,
      icon: Bell,
      color: 'bg-rose-600',
      trend: { value: 5, isPositive: false },
    },
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-[#475569] to-[#1e293b] text-white">
      {/* Header */}
      <header className="bg-zinc-900 shadow-md border-b border-zinc-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold">📟 Dashboard</h1>
              <p className="text-sm text-zinc-300">Welcome back, {userData.name}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* User Info Card */}
        <div className="bg-white rounded-xl shadow-md border border-zinc-200 p-6 mb-10">
          <h2 className="text-xl font-semibold text-zinc-800 mb-4">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Personal Info</h3>
              <div className="mt-2 space-y-1 text-zinc-700">
                <p>{userData.name}</p>
                <p className="text-zinc-500">{userData.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Company Details</h3>
              <div className="mt-2 space-y-1 text-zinc-700">
                <p>{userData.companyName}</p>
                <p className="text-zinc-500">{userData.industry}</p>
                <p className="text-zinc-500">{userData.companySize}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Preferences</h3>
              <div className="mt-2 space-y-1 text-zinc-700">
                <p className="capitalize">{userData.theme} Theme</p>
                <p className="capitalize text-zinc-500">{userData.dashboardLayout} Layout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Charts & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeeklyChart />

          {/* Actions */}
          <div className="bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl shadow-md border border-violet-300 p-6">
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">✨ Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg bg-white hover:bg-violet-50 border border-violet-300 transition">
                <div className="font-medium text-zinc-800">Invite Team Members</div>
                <div className="text-sm text-zinc-500">Add new people to your workspace</div>
              </button>
              <button className="w-full text-left p-4 rounded-lg bg-white hover:bg-violet-50 border border-violet-300 transition">
                <div className="font-medium text-zinc-800">Create New Project</div>
                <div className="text-sm text-zinc-500">Start a new project with your team</div>
              </button>
              <button className="w-full text-left p-4 rounded-lg bg-white hover:bg-violet-50 border border-violet-300 transition">
                <div className="font-medium text-zinc-800">View Reports</div>
                <div className="text-sm text-zinc-500">Check detailed analytics and insights</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
