import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "../controllers/listing.controller";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({ message: "Listing API is working!" });
});


router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

export default router;
