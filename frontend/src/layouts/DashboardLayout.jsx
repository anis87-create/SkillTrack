import { useAuthMeQuery } from "../features/auth/services/authApi";
import Navbar from "../layouts/Navbar";
import SideBar from "../layouts/SideBar";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const { data } = useAuthMeQuery();
  const user = data?.user;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen bg-white">
      <div className="hidden lg:block border-r border-gray-200">
        <SideBar user={user} />
      </div>

      <div className="grid grid-rows-[80px_1fr] min-h-screen">
        <Navbar user={user} />

        <main className="min-h-0 overflow-auto p-4 lg:p-6">
           <Outlet context={user} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
