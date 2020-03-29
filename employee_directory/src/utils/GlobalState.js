import React, { createContext, useReducer, useContext } from "react";
import _ from 'lodash';
const EmployeeContext = createContext();
const { Provider } = EmployeeContext;

// reducer function to handle the updation of state based on the action type
const reducer = (state, action) => {
    switch (action.type) {
        // setting the data of initial records passed in action.data to the currentEmployees and initialEmployees array
        case "init":
            return { ...state, currentEmployees: action.data, initialEmployees: action.data }
        case "filter":
            // checking the number of passed filters in action.data 
            if (action.data.length > 0) {
                // applying the passed filters on the initial employees array
                let filteredEmployees = state.initialEmployees.filter(employee => {
                    let isFiltered = false;
                    for(var i=0; i < action.data.length; i++) {
                        isFiltered = employee.department === action.data[i].value || employee.designation === action.data[i].value;
                        if(isFiltered === true)
                            break;
                    }
                    return isFiltered;
                });
                // Returning the filtered employees to the currentEmployees array
                return { ...state, currentEmployees: filteredEmployees, filters: action.data};
            }
            else {
                // There are no filters passed so setting the initialEmployees as currentEmployees
                return { ...state, currentEmployees: state.initialEmployees }
            }
        case "sort":
            if(action.data !== null && action.data.value !== null ) {
                let sortedEmployees = [];
                // Sorting the employees based on the employee name, department name and designation
                switch(action.data.value) {
                    case "Employee Name":
                        sortedEmployees = state.currentEmployees.sort((a, b) => (a.name > b.name) ? 1 : -1);
                        return { ...state, currentEmployees: sortedEmployees }
                    case "Department Name":
                        sortedEmployees = state.currentEmployees.sort((a, b) => (a.department > b.department) ? 1 : -1);
                        return { ...state, currentEmployees: sortedEmployees }
                    case "Designation":
                        sortedEmployees = state.currentEmployees.sort((a, b) => (a.designation > b.designation) ? 1 : -1);
                        return { ...state, currentEmployees: sortedEmployees }
                }
            }
            return { ...state, currentEmployees: state.currentEmployees }
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const EmployeeContextProvider = ({ value = [], ...props }) => {
    // Creating global store using useReducer hook. 
    const [state, dispatch] = useReducer(reducer, { currentEmployees: value, initialEmployees: value, filters: value });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};

export { EmployeeContextProvider, useEmployeeContext };
