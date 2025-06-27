import { Request, Response } from "express";
import { createProductService } from "../service/products.service";
import { getAllProductsService } from "../service/products.service";
import { deleteProductByIdService } from "../service/products.service";

export const createProduct = async (req: Request, res: Response) => {
  const { nome, preco, descricao } = req.body;

  if (!nome || !preco || !descricao) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const product = await createProductService(nome, preco, descricao);

  res.status(201).json({ productCreated: product });

  return;
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const resultado = await deleteProductByIdService(Number(id));

  if (resultado === 0) {
    res.status(404).json({ error: "Produto não encontrado" });
    return;
  }

  res.status(200).json({ message: "Produto deletado com sucesso" });
};
