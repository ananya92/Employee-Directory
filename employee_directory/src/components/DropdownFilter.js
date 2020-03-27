import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

class DropdownFilter extends React.Component {
  constructor() {
    super();
    this.state = {
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
    };

    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }

  render() {
    return (
      <div>
        <Select
          name="filters"
          placeholder="Filter by"
          value={this.state.multiValue}
          options={this.state.filterOptions}
          onChange={this.handleMultiChange}
          multi
        />
      </div>
    );
  }
}

export default DropdownFilter;