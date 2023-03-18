import { AppBar } from "@mui/material";

interface IProps {
  children: any;
}

const Header: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <AppBar color="primary" position="static" sx={{ padding: "16px 0" }}>
      {children}
    </AppBar>
  );
};

export default Header;
