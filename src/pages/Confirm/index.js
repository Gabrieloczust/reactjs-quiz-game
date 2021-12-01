import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questionsNumbers } from "data";
import { getQuestions } from "services";
import { useQuestionsContext } from "contexts";
import * as GlobalStyles from "styles";

export const Confirm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const isValidNumberQuestions = !questionsNumbers.includes(
    Number(params?.numberQuestions)
  );

  const [disabled, setDisabled] = useState(isValidNumberQuestions);
  const { setQuestions } = useQuestionsContext();

  const handleCancel = () => {
    navigate(`/`);
  };

  const handleStart = async () => {
    setDisabled(true);
    const response = await getQuestions(params.numberQuestions);
    setQuestions(response);
    navigate(`/questions`);
  };

  return (
    <GlobalStyles.Container direction="row">
      <GlobalStyles.BigButton color="secondary" onClick={handleCancel}>
        Cancel
      </GlobalStyles.BigButton>

      <GlobalStyles.BigButton
        variant="outlined"
        color="success"
        size="large"
        disabled={disabled}
        onClick={handleStart}
      >
        Start
      </GlobalStyles.BigButton>
    </GlobalStyles.Container>
  );
};
