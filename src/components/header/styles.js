import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;
