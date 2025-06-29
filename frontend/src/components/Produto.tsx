import { Trash } from "lucide-react";
import type { IProduto } from "../App";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface IProdutoCard extends IProduto {
    handleDelete: () => void;
}

export function ProdutoComponent({ nome, preco, descricao, handleDelete }: IProdutoCard) {
  return (
    <li className="bg-zinc-900 p-6 rounded-xl border-2 border-zinc-800 grid">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h2 className="font-black text-lg">{nome}</h2>
        <Badge>R$ {preco}</Badge>
      </div>
      <p className="text-zinc-400 mb-4">{descricao}</p>
      <Button
        onClick={handleDelete}
        className="justify-self-end"
        variant={"destructive"}
        size={"icon"}
      >
        <Trash />
      </Button>
    </li>
  );
}
