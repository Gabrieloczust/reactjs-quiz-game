import { useState } from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { questionsNumbers } from "data";

export const SelectQuestions = ({ afterChange }) => {
  const [quetions, setQuestions] = useState("");

  const handleChange = (event) => {
    setQuestions(event.target.value);
    afterChange?.(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 125 }}>
      <InputLabel
        id="select-label-questions"
        data-testid="select-label-questions"
      >
        Questions
      </InputLabel>

      <Select
        labelId="select-label-questions"
        id="select-questions"
        data-testid="select-questions"
        value={quetions}
        onChange={handleChange}
        autoWidth
        label="Questions"
      >
        {questionsNumbers.map((number) => (
          <MenuItem value={number} key={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectQuestions.propTypes = {
  afterChange: PropTypes.func,
};
