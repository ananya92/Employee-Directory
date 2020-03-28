import React from "react";
// default context object with properties corresponding to Provider values

const EmployeeListContext = React.createContext({
  employees: [],
  onClick: () => undefined
});

export default EmployeeListContext;
