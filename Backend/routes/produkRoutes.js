import express from "express";
import {
  getProduk,
  getOneProduk,
  createProduk,
  deleteProduk,
  updateProduk,
} from "../controller/produk.js";

const router = express.Router();

router.get("/produk", getProduk);
router.get("/produk/:id", getOneProduk);
router.get("/produk/:id", updateProduk);
router.get("/produk", createProduk);
router.get("/produk/:id", deleteProduk);

export default router;
