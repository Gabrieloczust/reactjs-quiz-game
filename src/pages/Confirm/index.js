import { useNavigate, useParams } from "react-router-dom";
import { questionsNumbers } from "data";
import * as GlobalStyles from "styles";

export const Confirm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const isValidNumberQuestions = questionsNumbers.includes(
    Number(params?.numberQuestions)
  );

  const handleCancel = () => {
    navigate(`/`);
  };

  const handleStart = () => {
    console.log("start");
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
        disabled={!isValidNumberQuestions}
        onClick={handleStart}
      >
        Start
      </GlobalStyles.BigButton>
    </GlobalStyles.Container>
  );
};
