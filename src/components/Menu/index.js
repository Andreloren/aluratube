import Search from "./components/Search";
import DarkModeSwitch from "./components/Switch";
import { StyledMenu, Logo } from "./styles";

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
      <DarkModeSwitch />
    </StyledMenu>
  );
}
