export interface BorderCountry {
  commonName: string;      
  officialName: string;   
  countryCode: string;    
  region: string;        
  borders: null | BorderCountry[]; 
}

export interface CountryDTO {
  commonName: string; 
  officialName: string;    
  countryCode: string;    
  region: string;
  borders: BorderCountry[]; 
  population: number[];
  flag: string;
}

export interface CountryResumedDTO { 
  countryCode: string;
  name: string;
}

export interface Country {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
  flag: {
    flag: string;
  };
  population: number[];
}

export interface Border {
  commonName: string;
  countryCode: string;
}