import { Request, Response } from 'express';
import { CountryService } from '../services/CountryService';

export class CountryController {
  private countryService: CountryService;

  constructor() {
    this.countryService = new CountryService();
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const countries = await this.countryService.getAvailableCountries();
      res.json(countries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  public getOne = async (req: Request, res: Response) => {
    try {
      const countryCode = req.params.countryCode;
      const countryInfo = await this.countryService.getCountryInfo(countryCode);
      res.json(countryInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
