import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./index.css";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state is by default an object
      students: [
        {
          id: 1,
          name: "Expedita optio autem qui quam rerum asperiores. Modi expedita laboriosam totam ipsum et sed qui omnis qui. Quo soluta sit dolorem. Et enim rem ipsum quidem repellendus neque",
          age: 21,
          email: "wasif@email.com",
        },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={index}>
          <td>{id} </td>
          <td style={{ width: "890px", wordBreak: "break-all" }}>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="btn"
          table="etatFnc"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />

        <div>
          <h1 id="title">React Dynamic Table</h1>
          <table id="etatFnc">
            <tr>
              <tr className={"bgColor"} style={{ backgroundColor: "#d9531e" }}>
                {this.renderTableHeader()}
              </tr>
              {this.renderTableData()}
            </tr>
          </table>
        </div>

        {/* <table id="table-to-xls">
          <tr style={{ backgroundColor: "blue" }}>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Age_</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td />
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
          </tr>
          <tr>
            <td />
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
          </tr>
          <tr>
            <td />
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
          </tr>
        </table> */}
      </div>
    );
  }
}

export default Test;
