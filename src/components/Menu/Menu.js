import Search from "./components/Search/Search";
import DarkModeSwitch from "./components/Switch/Switch";
import { StyledMenu, Logo } from "./StyledMenu";

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
