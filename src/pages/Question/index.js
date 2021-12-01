import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { useQuestionsContext } from "contexts";
import * as GlobalStyles from "styles";

export const Question = () => {
  const navigate = useNavigate();
  const { questions } = useQuestionsContext();
  const [activeStep, setActiveStep] = useState(0);

  const isFinished = activeStep === questions.length;
  const isLastQuestion = activeStep === questions.length - 1;
  const activeQuestion = questions[activeStep];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    const noHasQuestions = questions.length === 0;

    if (noHasQuestions) {
      navigate(`/`);
    }
  }, [questions, navigate]);

  return (
    <GlobalStyles.Container>
      <Stepper activeStep={activeStep}>
        {questions.map((questionObject) => (
          <Step key={questionObject.question}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      {isFinished ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All questions completed - you&apos;re finished
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mt: 2, mb: 1 }} fontWeight="bold">
              {activeQuestion.question}
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup
                name={activeQuestion.question}
                // value=""
              >
                {activeQuestion.answers.map((answer) => (
                  <FormControlLabel
                    key={answer}
                    control={<Radio />}
                    label={answer}
                    value={answer}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            {isLastQuestion ? (
              <Button onClick={handleFinish} color="success">
                Finish
              </Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </>
      )}
    </GlobalStyles.Container>
  );
};
