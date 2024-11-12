import React, { useEffect, useState} from 'react';
import httpClient from '../service/httpClient';
import { Country } from '../dto/countries';

type CountryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  countryCode: string;
};

const CountryModal: React.FC<CountryModalProps> = ({ isOpen, onClose, countryCode }) => {
  const [data, setData] = useState<Country | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.normal.get(`/countries/${countryCode}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
    
  }, []);
  if (!isOpen ) return null;
  if(isLoading) return(
    <div className='bg-red-700'>Carregando .... </div>
  )

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-xs w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
        >
          &times;
        </button>
        {
        isLoading && ( 
          <div className='bg-red-700'>Carregando .... </div>
        )
       }

       <div className="flex flex-col items-center space-y-4 mt-4">
          <span >

            <img 
            src={data?.flag?.flag}
            className="rounded-md">
            </img>
          </span>
          <h2 className="text-2xl font-semibold text-gray-700">{data?.commonName}</h2>

          <div className=' w-full flex justify-start items-start text-sm flex-col'>
            <p className='font-bold text-[18px] text-gray-500 mb-2'>Border Cities</p>
            {
              data?.borders?.map(
                (
                  element
                ) => (
                  <ul className="list-disc list-inside">
                    <li className="font-semibold text-gray-800">{element.commonName}</li>
                  </ul>
                )
              )
            }
          </div>
        </div> 
      
      </div>
    </div>
  )
};

export default CountryModal;
