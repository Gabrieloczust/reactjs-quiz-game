import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const Description = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
}));
