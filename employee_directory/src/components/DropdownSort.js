import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useEmployeeContext } from "../utils/GlobalState";

const options = [
  { value: 'Employee Name', label: 'Employee Name' },
  { value: 'Department Name', label: 'Department Name' },
  { value: 'Designation', label: 'Designation' },
];

function DropdownSort() {
  const [state, dispatch] = useEmployeeContext();

  // using useState hook to save the selected sort option
  const [sortState, setSortState] = useState({
      selectedOption: "",
  });

  // using useEffect hook to observe the state of sortState and call the dispatch function with sort action to update the store
  useEffect(() => {
    dispatch({type: "sort", data: sortState.selectedOption});
  }, [sortState]);

  // using useEffect hook to observe the filters in the store and clear the sort option field whenever the state of the filters changes
  useEffect(() => {
    setSortState({ selectedOption: "" })
  }, [state.filters]);

  // handleChange function to update the sort state when value from the dropdown is selected
  const handleChange = selectedOption => {
    setSortState(
      { selectedOption: selectedOption }
    );
  };
  return (
    <Select
      placeholder={"Sort by"}
      value={sortState.selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
}

export default DropdownSort;