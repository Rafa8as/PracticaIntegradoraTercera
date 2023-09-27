import { Router } from "express";
import {
		login,
		register,
		logout,
		github,
		githubCallback,
		current,
} from '../controllers/sessions.controller.js';
import { restore } from "../controllers/views.controller.js";

const router = Router();




router.post('/login', login);
router.post('/register', register);
router.get('/current', current);
router.get('/github', github);
router.get('/githubCallback', githubCallback);
router.post('/logout', logout);
router.post ('/restore',restore)

export default router;