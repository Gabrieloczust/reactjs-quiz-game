import { QuestionsContentProvider } from "./questions";

export const GlobalContext = ({ children }) => {
  return <QuestionsContentProvider>{children}</QuestionsContentProvider>;
};

export { useQuestionsContext } from "./questions";
