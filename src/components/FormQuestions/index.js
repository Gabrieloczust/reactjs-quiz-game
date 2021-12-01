import PropTypes from "prop-types";
import { FormControl } from "@mui/material";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

export const FormQuestions = ({ name, value, onChange, answers }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup name={name} value={value} onChange={onChange}>
        {answers.map((answer) => (
          <FormControlLabel
            key={answer}
            control={<Radio />}
            label={answer}
            value={answer}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

FormQuestions.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};
