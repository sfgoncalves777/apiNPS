import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const userController = new UserController;
const surveysController = new SurveysController;
const sendMailController = new SendMailController;
const answerController = new AnswerController;
const npsController = new NpsController;

const routes = Router();

routes.post('/users', userController.create);
routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);
routes.post('/sendMail', sendMailController.execute);
routes.get("/answers/:value", answerController.execute);
routes.get("/nps/:survey_id", npsController.execute);

export { routes } ;