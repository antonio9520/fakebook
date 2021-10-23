import styled from "styled-components";
// import theme from "theme";


export const stylesIcon = {
  width: 28,
  height: 28,
};

export const stylesTabs = {
  "& .MuiTabs-indicator": {
    height: 4,
    borderRadius: 15,
  },
  "&:hover .Mui-selected": {
    backgroundColor: "inherit",
  },
};

export const stylesTab = {
  width: 110,
  marginTop: 1,
  marginLeft: 1,
  marginRight: 1,
  marginBottom: 0.5,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "#F2F2F2",
  },
  "& .Mui-selected": {
    backgroundColor: "red",
  },
};

export const Container = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  z-index: 99;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 33px;
`;
export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
`;

export const HeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  & > h4 {
    margin-left: 10px;
  }
`;
