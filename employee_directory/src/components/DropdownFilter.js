import React, { useState, useEffect } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { useEmployeeContext } from "../utils/GlobalState";

function DropdownFilter() {
  const [_, dispatch] = useEmployeeContext();
  const [filterState, setFilterState] = useState({
    multiValue: [],
      filterOptions: [
        {label: "Department", value: "Department", disabled: true},
        {label: "Information Technology", value: "Information Technology"},
        {label: "Finance", value: "Finance"},
        {label: "Human Resources", value: "Human Resources"},
        {label: "Designation", value: "Designation", disabled: true},
        {label: "Manager", value: "Manager"},
        {label: "Software Engineer", value: "Software Engineer"},
        {label: "Business Analyst", value: "Business Analyst"},
        {label: "HR Specialist", value: "HR Specialist"},
        {label: "Accountant", value: "Accountant"}
      ]
  });

  useEffect(() => {
    dispatch({type: "filter", data: filterState.multiValue});
  }, [filterState]);

  function handleMultiChange(option) {
    setFilterState (state => {
      return {...filterState,
        multiValue: option
      };
    });
  }

  return (
    <div>
        <Select
          name="filters"
          placeholder="Filter by"
          value={filterState.multiValue}
          options={filterState.filterOptions}
          onChange={handleMultiChange}
          multi
        />
    </div>
  );
  }

export default DropdownFilter;