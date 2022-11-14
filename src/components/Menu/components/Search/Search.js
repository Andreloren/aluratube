import React from "react";
import { StyledSearch } from "./StyledSearch";

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDaBusca(e.target.value)}
        value={valorDaBusca}
      />
      <button onClick={(e) => setValorDaBusca("")}>Limpar</button>
    </StyledSearch>
  );
}
