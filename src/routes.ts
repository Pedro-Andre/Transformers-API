import { Router } from "express";
import {
  getCybertronian,
  getCybertronianById,
  postCybertronian,
  deleteCybertronian,
  updateCybertronian,
} from "./controllers/cybertronians-controller";

const router = Router();

router.get("/cybertronians", getCybertronian);
router.post("/cybertronians", postCybertronian);
router.delete("/cybertronians/:id", deleteCybertronian);
router.patch("/cybertronians/:id", updateCybertronian);
router.get("/cybertronians/:id", getCybertronianById);

export default router;
