import styled from "styled-components";

export const styleHeaderInput = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "primary.grey",
  padding: "7px 10px",
  marginLeft: "10px",
  borderRadius: "33px",
  height: "40px",
};

export const Input = styled.input<{
  mode: string;
  lightGrey: string;
  grey: string;
}>`
  border: none;
  background-color: transparent;
  outline-width: 0;
  margin-left: 10px;
  font-size: 15px;
  width: 100%;
  color: ${(p) => (p.mode === "light" ? "" : "#fff")};
  ::placeholder {
    color: ${(p) => (p.mode === "light" ? "" : p.lightGrey)};
  }
`;

export const styleSearchIcon = {
  color: "primary.lightGrey",
};
