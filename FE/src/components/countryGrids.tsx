import React, { useEffect, useState } from 'react';
import httpClient from '../service/httpClient';
import { CountryResumedDTO } from '../dto/countries';
import CountryModal from './countryInfo';
import { Spin } from 'antd';

interface CountryGridProps {
  searchQuery: string;
}
const CountryGrid: React.FC<CountryGridProps> = ({ searchQuery }) => {
  const [countries, setCountries] = useState<CountryResumedDTO[]>([]);
  const [select, setSelect] = useState <string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleopenModal = (country:CountryResumedDTO) => { 
    setSelect(country.countryCode)
    setIsModalOpen(true)
  }

  const filteredCountries = countries.filter((country: CountryResumedDTO) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await httpClient.motion.get('/countries');
        const data: CountryResumedDTO = await response.data
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {
          isLoading && ( 
          <Spin tip="Loading..."  className='flex items-center justify-center absolute self-center '/>

          )
        }
      {countries && filteredCountries.map(
        (country: CountryResumedDTO) => (
        <div
          key={country.countryCode}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover: cursor-pointer"
        >
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{country.countryCode}</span>
              <div>
                <h2 className="text-xl font-semibold">{country.countryCode}</h2>
                <p className="text-sm text-gray-500">{country.name}</p>
              </div>
              <div className='w-full flex justify-end '>
                <button
                  className=' bg-slate-400 hover:bg-gray-900 rounded-md px-2 py-2 text-slate-100 font-bold'
                  onClick={() => handleopenModal(country)}
                > 
                  View
                </button>
                
              </div>
            </div>
          </div>
        </div>
        
      ))}
      {
        isModalOpen &&
          <CountryModal
          onClose={() => setIsModalOpen(false)}
          countryCode={select}
        />
      }
      
    </div>
  );
};

export default CountryGrid;

