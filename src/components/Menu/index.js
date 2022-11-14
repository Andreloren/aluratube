import Search from "./components/search/Search";
import DarkModeSwitch from "./components/switch/Switch";
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
