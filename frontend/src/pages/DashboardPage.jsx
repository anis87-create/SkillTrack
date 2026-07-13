import PageSkeleton from "../components/PageSekeleton"
import { useAuthMeQuery, useLoginMutation } from "../features/auth/services/authApi"
import Activities from "../features/dashboard/layouts/Activities"
import Header from "../features/dashboard/layouts/Header"
import Skills from "../features/dashboard/layouts/Skills"
import Targets from "../features/dashboard/layouts/Targets"

const DashboardPage = ({targets}) => {  
   const {isLoading}  = useAuthMeQuery();
if(isLoading) return <PageSkeleton />;
  return (
    <div className="h-full  border-gray-200">
       <Header />
       <Skills />
       <div className="my-4 flex flex-col lg:grid lg:grid-cols-2 gap-2">
           <Targets  
              targets={targets}
           />
           <Activities />
       </div>
    </div>
  )
}

export default DashboardPage
