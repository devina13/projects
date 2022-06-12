import React from "react";

function UserTable(props) {
  // console.log("props in table",props);
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>LASTNAME</th>
          </tr>
        </thead>
        <tbody>
          {props.userFormData.map((val, idx) => {
            return (
              <tr key={idx}>
                <td> {val.userName}</td>
                <td> {val.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;