import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Container = styled("div")(({ theme, direction }) => ({
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: direction || "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
  gap: theme.spacing(2),
}));

export const BigButton = styled(Button)({
  padding: "1rem 3rem",
  fontSize: "1rem",
});
