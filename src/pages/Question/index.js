import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuestionsContext } from "contexts";

export const Question = () => {
  const navigate = useNavigate();
  const { questions } = useQuestionsContext();

  useEffect(() => {
    const noHasQuestions = questions.length === 0;

    if (noHasQuestions) {
      navigate(`/`);
    }
  }, [questions, navigate]);

  return <div>Question page</div>;
};
