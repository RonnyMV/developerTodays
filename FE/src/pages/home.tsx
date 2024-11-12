import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartSearch = async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    navigate('/countries');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleStartSearch}
        className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 transition"
      >
        Start Searching the Countries
      </button>
    </div>
  );
};

export default Home;

