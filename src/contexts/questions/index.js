import { createContext, useState, useContext } from "react";

const DEFAULT_VALUE = {
  state: [],
  setState: () => {},
};

export const QuestionsContext = createContext(DEFAULT_VALUE);

export const QuestionsContentProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <QuestionsContext.Provider
      value={{
        questions: state,
        setQuestions: setState,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);

  if (context === undefined) {
    throw new Error(
      "useQuestionsContext must be used within a QuestionsContextProvider"
    );
  }

  return context;
};
