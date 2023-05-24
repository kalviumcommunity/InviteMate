import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../Combined.css";
import headingData from "../CategoriesData";
import { appContext } from "../AppContext";

export default function Searchbar(props) {
  // console.log(options[0].map((sub)=>{return sub.map((each)=> {return each})}))

  // const {selectedCategory } = React.useContext(appContext)

  // console.log(selectedCategory)

  const optionValues = [
    headingData.map((all) => {
      return all.subHeading.map((sub) => {
        return sub.title;
      });
    }),
  ];
  const optionvalues = optionValues.flat(2);

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <div className="searchContainer">
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
          options={optionvalues}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Search Category..." id="params" />
          )}
        />
        {props.searchtext(value)}
      </div>
    </>
  );
}
