import { Container as MaterialContainer, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(MaterialContainer)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));