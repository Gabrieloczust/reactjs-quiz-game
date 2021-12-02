import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SelectQuestions, DialogReportAnswers } from "components";

import * as GlobalStyles from "styles";
import * as Styles from "./Home.styles";

export const Home = () => {
  const [hasReport, setHasReport] = useState(false);
  const navigate = useNavigate();

  const handleSelectNumber = (number) => {
    navigate(`/confirm/${number}`);
  };

  useEffect(() => {
    const hasAnswers = localStorage.getItem("answers");

    if (hasAnswers) {
      setHasReport(JSON.parse(hasAnswers));
    }
  }, []);

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

      {hasReport && <DialogReportAnswers answers={hasReport} />}
    </GlobalStyles.Container>
  );
};
