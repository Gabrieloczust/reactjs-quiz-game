import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export const ReportAnswers = ({ answers }) => {
  const [totalHits, setTotalHits] = useState(0);
  const [totalErros, setTotalErros] = useState(0);

  useEffect(() => {
    const hits = answers.reduce((acc, question) => {
      return (acc += Number(question.answer === question.correct_answer));
    }, 0);

    setTotalHits(hits);
    setTotalErros(answers.length - hits);
  }, [answers]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {answers.map((answer, index) => {
        const isError = answer.answer !== answer.correct_answer;
        const color = isError ? "red" : "green";

        return (
          <Box
            key={answer.question}
            sx={{ display: "flex", flexDirection: "column", mt: 3 }}
          >
            <Box sx={{ display: "flex", gap: "0.5rem", mb: 1 }}>
              <Typography fontWeight="bold">{`${++index})`}</Typography>

              <Typography
                color="#444"
                dangerouslySetInnerHTML={{ __html: answer.question }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Typography color={color} fontSize="0.9rem" fontWeight="bold">
                Answer:
              </Typography>

              <Typography
                color={color}
                fontSize="0.9rem"
                dangerouslySetInnerHTML={{
                  __html: answer.answer,
                }}
              />
            </Box>

            {isError && (
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Typography color="#326bc1" fontSize="0.9rem" fontWeight="bold">
                  Correct Answer:
                </Typography>

                <Typography
                  color="#326bc1"
                  fontSize="0.9rem"
                  dangerouslySetInnerHTML={{ __html: answer.correct_answer }}
                />
              </Box>
            )}
          </Box>
        );
      })}

      <Typography sx={{ mt: 5, mb: 3 }} textAlign="center" fontWeight="bold">
        You got {totalHits} {totalHits > 1 ? "questions" : "question"} right and{" "}
        {totalErros} {totalErros > 1 ? "questions" : "question"} wrong.
      </Typography>
    </Box>
  );
};

ReportAnswers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
