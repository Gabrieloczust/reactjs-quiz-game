import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Confirm } from ".";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<Confirm />", () => {
  describe("smoke tests", () => {
    it("should render component", () => {
      const { container } = createComponent();
      expect(container.firstChild).toBeDefined();
    });

    it("should render cancel button", () => {
      const { getByText } = createComponent();
      expect(getByText("Cancel")).toBeInTheDocument();
    });

    it("should render start button", () => {
      const { getByText } = createComponent();
      expect(getByText("Start")).toBeInTheDocument();
    });
  });

  describe("params", () => {
    it("should render start button disabled when numberQuestions is invalid", () => {
      const { getByText } = createComponent();
      expect(getByText("Start")).toBeDisabled();
    });
  });

  describe("actions", () => {
    it("should navigate to home page when click cancel button", () => {
      const { getByText } = createComponent();

      fireEvent.click(getByText("Cancel"));
      expect(mockNavigate).toBeCalledWith("/");
    });
  });
});

const createComponent = () => {
  return render(
    <BrowserRouter>
      <Confirm />
    </BrowserRouter>
  );
};
