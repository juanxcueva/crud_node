

import express from "express";
import { getAllBlogs, getBlog, createBlog, updateRegister, deleteRegister } from "../controllers/BlogController.js";

const router = express.Router();

router.get('/', getAllBlogs);

router.get('/:id', getBlog);

router.post('/', createBlog);

router.put('/:id', updateRegister);

router.delete('/:id', deleteRegister);

export default router;