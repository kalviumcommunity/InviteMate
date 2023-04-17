import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Combined.css'

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function Searchbar() {

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete 
        value={value} 
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue} 
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo" 
        options={options} 
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}