import * as React from "react";
import { Input, styleHeaderInput, styleSearchIcon } from "./style";
import { useTheme, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CustomInput = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon?: boolean;
}) => {
  const theme = useTheme();

  const { palette }: any = theme;
  const {
    primary: { grey, lightGrey },
    mode,
  }: any = palette;
  return (
    <Box sx={styleHeaderInput}>
      {icon && <SearchIcon sx={styleSearchIcon} />}
      <Input
        placeholder={placeholder}
        mode={mode}
        grey={grey}
        lightGrey={lightGrey}
      />
    </Box>
  );
};

export default CustomInput;
