import { Router } from 'express';
import { CountryController } from './../controllers/countryController';

const router = Router();
const countryController = new CountryController();

router.get('/countries', countryController.getAll);
router.get('/countries/:countryCode', countryController.getOne);



export default router;
