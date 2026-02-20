import { Router } from "express";
import {
  getCybertronian,
  getCybertronianById,
  postCybertronian,
  deleteCybertronian,
} from "./controllers/cybertronians-controller";

const router = Router();

router.get("/cybertronians", getCybertronian);
router.post("/cybertronians", postCybertronian);
router.delete("/cybertronians/:id", deleteCybertronian);
router.patch("/cybertronians", postCybertronian);

router.get("/cybertronians/:id", getCybertronianById);

export default router;
