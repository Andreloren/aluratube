import config from "../../../config.json";
import { StyledHeader } from "./styles";
import { StyledBanner } from "../banner/styles";
export function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <div className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </div>
    </StyledHeader>
  );
}
