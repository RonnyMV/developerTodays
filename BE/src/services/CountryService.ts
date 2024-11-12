
import { ApiClient } from './../utils/apiClient';

export class CountryService {
  private static AVAILABLE_COUNTRIES_URL = 'https://date.nager.at/api/v3/AvailableCountries';
  private static COUNTRY_INFO_URL = 'https://date.nager.at/api/v3/CountryInfo';
  private static POPULATION_DATA_URL = 'https://countriesnow.space/api/v0.1/countries/population';
  private static FLAG_URL = 'https://countriesnow.space/api/v0.1/countries/flag/images';

  public async getAvailableCountries() {
    return await ApiClient.get(CountryService.AVAILABLE_COUNTRIES_URL);
  }

  public async getCountryInfo(countryCode: string) {
    const countryInfo = await ApiClient.get(`${CountryService.COUNTRY_INFO_URL}/${countryCode}`);
    const populationData = await ApiClient.get(CountryService.POPULATION_DATA_URL);
    const flagData = await ApiClient.get(CountryService.FLAG_URL);
    const population = populationData.data.find(
      (country: any) => country.iso3 === countryCode || country.code === countryCode
    ) || [];
    
    const flag = flagData.data.find(
      (country: any) => country.iso2 === countryCode || country.iso3 === countryCode
    ) || '';

    return {
      ...countryInfo,
      population,
      flag,
    };
  }
}
