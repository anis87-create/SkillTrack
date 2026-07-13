import { Search } from 'lucide-react'
import React from 'react'
import Tabs from './Tabs'
const SearchContainer = ({searchValue, setSearchValue}) => {
  const handleChange = (e) => {
     setSearchValue(e.target.value);     
  }
  return (
    <div className='flex justify-between items-center py-4'>
      <Tabs />
      <div className="relative max-w-sm">
        {/* Icône purement visuelle, aucun événement lié */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div> 
        {/* Input standard sans attribut value ou onChange */}
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={searchValue}
          placeholder="Rechercher un objectif..."
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
        />
      </div>
    </div>
  )
}

export default SearchContainer
