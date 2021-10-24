import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 25%;
  max-height: 100% ;
  &:hover {
    overflow-y: auto;
  }
`;

export const ScrollContainer = styled.div`
  max-height: 100%;
`;
