import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SelectQuestions } from "components";

import * as GlobalStyles from "styles";
import * as Styles from "./Home.styles";

export const Home = () => {
  const navigate = useNavigate();

  const handleSelectNumber = (number) => {
    navigate(`/confirm/${number}`);
  };

  return (
    <GlobalStyles.Container>
      <Styles.Title variant="h1" gutterBottom component="div" align="center">
        Quiz Game
      </Styles.Title>

      <Styles.Description>
        <Typography variant="subtitle1" gutterBottom component="div">
          Select the number of questions
        </Typography>

        <SelectQuestions afterChange={handleSelectNumber} />
      </Styles.Description>
    </GlobalStyles.Container>
  );
};
