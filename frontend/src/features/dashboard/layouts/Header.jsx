import { Link, useOutletContext } from "react-router-dom";
import avatar from "../../../assets/yann_competence_et_fiabilite_1_1.png";
import { Plus } from "lucide-react";

const Header = () => {
  const outletContext = useOutletContext();
  const user = outletContext?.user ?? outletContext;
  const getFirstName = (fullName) => {
    return fullName?.split(' ')[0] || '';
  }
  return (
    <section className="border border-gray-200 bg-violet-50 rounded-lg overflow-hidden p-4 md:p-4  flex flex-col md:flex-row md:items-center md:justify-between">
      
      <div className="z-10 md:w-[45%] lg:w-[50%]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Bonjour {getFirstName(user?.name)} 👏
        </h1>

        <p className="mt-3 md:mt-4 mb-4 md:mb-6 text-sm md:text-base text-gray-600 max-w-65 md:max-w-none">
          Continue ta progression aujourd&apos;hui.
        </p>

        {/* Desktop + tablette */}
        <Link to="/goals" className="hidden md:flex bg-primary items-center justify-center rounded text-white cursor-pointer px-4 py-2 text-sm md:text-base w-fit">
          <Plus className="text-white mr-2 w-4 h-4 md:w-5 md:h-5" />
          Ajouter un objectif
        </Link>
      </div>

      <div className="flex flex-col items-end mt-8 md:mt-20 lg:mt-0 md:w-[55%] lg:w-[50%]">
        <img
          src={avatar}
          alt=""
          className="w-48 h-32 md:w-72 md:h-44 lg:w-96 lg:h-56 object-contain"
        />

        {/* Mobile uniquement */}
        <div className="text-left w-full">
        <Link to="/goals" className="flex md:hidden bg-primary items-center justify-center rounded text-white cursor-pointer px-4 py-2 text-sm w-[60%] start mt-3">
          <Plus className="text-white mr-2 w-4 h-4" />
          Ajouter un objectif
        </Link>
        </div>
      </div>

    </section>
  );
};

export default Header;
