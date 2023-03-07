import React from "react";

const Employees = (props) => {
  const { employees } = props;

  return (
    <div className="people">
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>SurName</th>
            <th>Days</th>
            <th>SalaryPerDay</th>
            <th>Salary</th>

            <th>
              Salary People <input type="number" />
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employees) => (
            <tr key={employees.id}>
              <td>{employees.name}</td>
              <td>{employees.surname}</td>
              <td>
                {employees.days}
                <input type="number" />
              </td>
              <td>
                {employees.salaryPerDay}
                <input type="number" />
              </td>
              <td>
                <input type="number" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
