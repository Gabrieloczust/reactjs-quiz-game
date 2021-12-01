import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Questions } from ".";

describe("<Questions />", () => {
  describe("smoke tests", () => {
    it("should render component", () => {
      const { container } = createComponent();
      expect(container.firstChild).toBeDefined();
    });
  });
});

const createComponent = () => {
  return render(
    <BrowserRouter>
      <Questions />
    </BrowserRouter>
  );
};
