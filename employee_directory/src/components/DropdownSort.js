import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Employee Name', label: 'Employee Name' },
  { value: 'Department Name', label: 'Department Name' },
  { value: 'Designation', label: 'Designation' },
];

class DropdownSort extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        placeholder={"Sort by"}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default DropdownSort;