import React from 'react';
'use strict';

class Tab extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          taskName: "xxxxxxxxxxxxxxx",
            month: "zzzzzzzzzzzzz",
            priority: "Medium",
          done: 3000,
        },
        {
          taskName: "yyyyyyyyyyyyy",
            month: "zzzzzzzzzzzzz",
            priority: "Medium",
          done: 2000,

        },
        {
          taskName: "zzzzzzzzzzzzz",
          month: "zzzzzzzzzzzzz",
          priority: "Low",
          done: 2000,
        }
      ],
      appendDetails: false
    };
    this.records = [];
  }

  renderTable() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-condensed table-hover">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }

  renderRow() {
    const { records } = this.state;
    if (records) {
      var appendDetails = this.state.appendDetails;
      return records.map((record, i) => {
        if (!appendDetails) {
          if (record.month) {
            return (
              <tr key={++i}>
                <td>{record.taskName}</td>
                <td>{record.priority}</td>
                <td>{record.done}</td>
                <td
                  className="btn btn-link"
                  onClick={() => this.renderDetails(record.month)}
                >{`From ${record.count} entr${
                  record.count > 1 ? "ies" : "y"
                }`}</td>
              </tr>
            );
          }
        } else {
          return (
            <tr>
              <td colSpan="5">{this._renderDetails()}</td>
            </tr>
          );
        }
      });
    }
  }

  renderDetails(taskName) {
    this.records = this.state.records;

    var remain = this.records.filter(record => {
      return record.taskName === taskName;
    });

    this.setState({ appendDetails: true });

    this.setState({ records: remain });
  }

  _renderDetails() {
    if (this.state.appendDetails) {
      const { records } = this.state;
      var record = records[0];
      console.info(records);
      return (
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="text-left">{record.taskName}</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="text-right">
                  <span
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.restoreTable()}
                  >
                    &#10008;
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Append {record.count} rows
          </div>
        </div>
      );
    }
  }

  restoreTable() {
    this.setState({ appendDetails: false });
    var records = this.records;
    // make async call to get table data

    this.setState({ records: records });
  }

  render() {
    return <div>{this.renderTable()}</div>;
  }
}



//const Tab = () => (
//      <div>
//   bnvmdae;
//    </div>
//    );

export default Tab;

