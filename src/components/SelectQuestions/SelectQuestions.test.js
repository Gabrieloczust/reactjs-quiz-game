import { render, fireEvent, within } from "@testing-library/react";
import { questionsNumbers } from "data";
import { SelectQuestions } from ".";

describe("<SelectQuestions />", () => {
  describe("smoke tests", () => {
    it("should render component", () => {
      const { container } = createComponent();
      expect(container.firstChild).toBeDefined();
    });

    it("should render label", () => {
      const { getByTestId } = createComponent();
      const label = getByTestId("select-label-questions");
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent("Questions");
    });

    it("should render select", () => {
      const { getByTestId } = createComponent();
      expect(getByTestId("select-questions")).toBeInTheDocument();
    });

    it("should render select not disabled", () => {
      const { getByTestId } = createComponent();
      expect(getByTestId("select-questions")).not.toBeDisabled();
    });
  });

  describe("actions", () => {
    it("should call afterChange when change value", () => {
      const mockAfterChange = jest.fn();
      const { getByRole } = createComponent({ afterChange: mockAfterChange });

      fireEvent.mouseDown(getByRole("button"));
      const listbox = within(getByRole("listbox"));

      fireEvent.click(listbox.getByText(questionsNumbers[0]));
      expect(mockAfterChange).toBeCalledWith(questionsNumbers[0]);
    });
  });
});

const createComponent = (props = {}) => {
  return render(<SelectQuestions {...props} />);
};
