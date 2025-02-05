import e from "express";
import newsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = e.Router();
const {create, findAll, topNews} = newsController;

router.post('/', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topNews);

export default router;