import { Router } from "express";
import { getCybertronian, getCybertronianById } from "./controllers/cybertronians-controller";

const router = Router();

router.get("/cybertronians", getCybertronian);
router.get("/cybertronians/:id", getCybertronianById)

export default router;
