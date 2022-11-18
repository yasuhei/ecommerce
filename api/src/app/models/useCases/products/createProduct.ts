import { Request, Response } from "express";

import { Product } from "../../Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });
    res.status(201).json(product);

    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
}
