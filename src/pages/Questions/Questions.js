import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";

import { useQuestionsContext } from "contexts";
import { FormQuestions, ReportAnswers } from "components";
import * as GlobalStyles from "styles";

export const Questions = () => {
  const navigate = useNavigate();
  const { questions } = useQuestionsContext();

  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map(({ question, correct_answer }) => ({
      question,
      answer: null,
      correct_answer,
    }))
  );

  const isFinished = activeStep === questions.length;
  const isLastQuestion = activeStep === questions.length - 1;
  const activeQuestion = questions[activeStep];

  const handleChangeAnswer = (event) => {
    setAnswers(
      answers.map((answer, index) => {
        if (index === activeStep) {
          return {
            ...answer,
            answer: event.target.value,
          };
        }

        return answer;
      })
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    handleNext();
    localStorage.setItem("answers", JSON.stringify(answers));
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
        <>
          <Typography sx={{ mt: 2 }} textAlign="center">
            All questions completed - you&apos;re finished
          </Typography>

          <ReportAnswers answers={answers} />

          <Button
            variant="outlined"
            color="warning"
            onClick={() => navigate(`/`)}
            sx={{ maxWidth: "150px", margin: "0 auto" }}
          >
            New Game
          </Button>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}
          >
            <Typography
              sx={{ mt: 2, mb: 1 }}
              fontWeight="bold"
              dangerouslySetInnerHTML={{ __html: activeQuestion.question }}
            ></Typography>

            <FormQuestions
              name={activeQuestion.question}
              value={answers[activeStep].answer}
              onChange={handleChangeAnswer}
              answers={activeQuestion.answers}
            />
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
              <Button
                onClick={handleFinish}
                disabled={!answers[activeStep].answer}
                color="success"
              >
                Finish
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!answers[activeStep].answer}
              >
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </GlobalStyles.Container>
  );
};
