import { useState } from "react";
import CountryGrid from "../components/countryGrids"

const CountriesSearch: React.FC = () =>  {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-xl">
    
    <h1 className="text-[30px] font-bold mb-8 text-center text-slate-700">Explore Countries</h1>

    <div className="relative mb-8 ">
      <input
        type="text"
        placeholder="Search countries..."
        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
        <CountryGrid
        searchQuery={searchQuery}
        />

    </div>
   
  </div>

  )
}

export default CountriesSearch