import styled from "styled-components";

export const StyledBanner = styled.div`
  height: 40vh;
  background-image: url(${({ bg }) => bg});
  width: 100%;
`;
