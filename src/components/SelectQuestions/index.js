import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectQuestions = () => {
  const [quetions, setQuestions] = useState('');

  const handleChange = (event) => {
    setQuestions(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 125 }}>
      <InputLabel id="select-label-questions">Questions</InputLabel>
      <Select
        labelId="select-label-questions"
        id="select-questions"
        value={quetions}
        onChange={handleChange}
        autoWidth
        label="Questions"
      >
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </FormControl>
  );
}
