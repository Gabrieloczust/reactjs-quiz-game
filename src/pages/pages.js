import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Confirm, Questions } from ".";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm/:numberQuestions" element={<Confirm />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};
