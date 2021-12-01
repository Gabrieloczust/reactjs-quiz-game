import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './Home'
import { Question } from './Question'

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}
