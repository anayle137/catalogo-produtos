import { db } from "../database";

export const createProductService = async (nome: string, preco: number, descricao: string) => {
  try {
    const newProduct = await db("products").insert({
      nome,
      preco,
      descricao
    });

    return newProduct;
  } catch (err) {
    throw err;
  }
};

export const getAllProductsService = async () => {
  try {
    const products = await db("products").whereNull("deletedAt");
    return products;
  } catch (err) {
    throw err;
  }
};

export const deleteProductByIdService = async (id: number) => {
  try {
    const resultado = await db("products")
      .where({ id })
      .update({ deletedAt: new Date() });

    return resultado;
  } catch (err) {
    throw err;
  }
};
