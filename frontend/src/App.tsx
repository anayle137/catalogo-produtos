import { Package, Plus } from "lucide-react";
import { InputComponent } from "./components/Input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import React from "react";
import { ProdutoComponent } from "./components/Produto";

export interface IProduto {
  id?: number;
  nome: string;
  preco: string | number;
  descricao: string;
}

function App() {
  const [produtos, setProdutos] = React.useState<IProduto[]>([]);
  const [nome, setNome] = React.useState("");
  const [preco, setPreco] = React.useState<string | number>("");
  const [descricao, setDescricao] = React.useState("");
  const [erro, setErro] = React.useState(false);

  async function getProducts() {
    try {
      const promiseProdutos = await fetch("/api/products");
      const response = await promiseProdutos.json();
      if (Array.isArray(response)) {
        setProdutos(response);
      } else if (response && Array.isArray(response.products)) {
        setProdutos(response.products);
      } else {
        console.error("Formato de resposta inesperado:", response);
        setProdutos([]);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  }

  async function handleAddProduto(event: React.FormEvent) {
    event.preventDefault();
    if (!nome || !preco || !descricao) {
      setErro(true);
      return;
    }
    setErro(false);
    const novoProduto: IProduto = {
      nome,
      preco: parseFloat(preco as string),
      descricao,
    };
    try {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });
      await getProducts();
      setNome("");
      setPreco("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  }

  async function handleDeleteProduto(id: number) {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      await getProducts();
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-[320px_1fr] container gap-8 h-screen py-12 max-laptop:grid-cols-1 max-laptop:gap-20">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <Package />
          <h1 className="text-xl font-bold">Catálogo de Produtos</h1>
        </div>
        <form onSubmit={handleAddProduto} className="flex flex-col gap-6">
          <InputComponent
            value={nome}
            handleChange={(e) => setNome(e.target.value)}
            htmlFor="nome_produto"
            id="nome_produto"
            label="Nome do Produto"
            placeholder="Digite o nome do produto..."
          />
          <InputComponent
            value={preco}
            type="number"
            handleChange={(e) => setPreco(e.target.value)}
            htmlFor="preco_produto"
            id="preco_produto"
            label="Preço do Produto"
            placeholder="Digite o preço do produto..."
          />
          <div className="flex flex-col gap-2">
            <Label htmlFor="desc_produto">Descrição do Produto</Label>
            <Textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="resize-none h-40"
              id="desc_produto"
              placeholder="Digite a descrição do produto..."
            />
          </div>
          <Button size={"lg"}>
            Cadastrar Produto
            <Plus />
          </Button>
          {erro && (
            <span className="block text-red-400">
              Por favor preencha todos os campos.
            </span>
          )}
        </form>
      </div>
      <main className="overflow-auto max-h-screen scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-200 max-laptop:overflow-visible grid">
        <ul className="grid grid-cols-3 items-start gap-5 max-laptop:grid-cols-1">
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <ProdutoComponent
                handleDelete={() => handleDeleteProduto(produto.id!)}
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
              />
            ))
          ) : (
            <span className="block justify-self-center mt-52 col-span-full text-5xl uppercase font-black text-zinc-900">
              Nenhum produto adicionado
            </span>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;