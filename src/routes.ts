import { Router } from "express";
import { getCybertronian } from "./controllers/cybertronians-controller";

const router = Router();

router.get("/cybertronians", getCybertronian);

export default router;
