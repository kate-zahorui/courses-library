import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface IProps {
  title: string;
}

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: [theme.palette.secondary.main],
  fontSize: "24px",
  lineHeight: 1.2,
  [theme.breakpoints.up("sm")]: {
    fontSize: "32px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));

const HeaderTitle: React.FunctionComponent<IProps> = ({ title }) => {
  return <StyledTitle variant="h1">{title}</StyledTitle>;
};

export default HeaderTitle;
