import { render, fireEvent, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { questionsNumbers } from "data";
import { Home } from ".";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<Home />", () => {
  describe("smoke tests", () => {
    it("should render component", () => {
      const { container } = createComponent();
      expect(container.firstChild).toBeDefined();
    });

    it("should render title", () => {
      const { getByText } = createComponent();
      expect(getByText("Quiz Game")).toBeInTheDocument();
    });

    it("should render description", () => {
      const { getByText } = createComponent();
      expect(getByText("Select the number of questions")).toBeInTheDocument();
    });

    it("should render questions select", () => {
      const { getByTestId } = createComponent();
      expect(getByTestId("select-questions")).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("should navigate to confirm page when select number question", () => {
      const { getByRole } = createComponent();

      fireEvent.mouseDown(getByRole('button'));
      const listbox = within(getByRole('listbox'));
    
      fireEvent.click(listbox.getByText(questionsNumbers[0]));
      expect(mockNavigate).toBeCalledWith(`/confirm/${questionsNumbers[0]}`);
    });
  });
});

const createComponent = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
