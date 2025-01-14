import express, { Application, NextFunction, Request, Response } from 'express';
import CountryRoutes from './routes/CountryRoutes';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    const IP_address = process.env.FE_IP || 'http://localhost:5173'

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', IP_address);
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Credentials', 'true'); 

      if (req.method === 'OPTIONS') {
        res.sendStatus(200); 
      } else {
        next();
      }
    });

    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api', CountryRoutes);
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
