import "./employees-add-form.css";
import { Component } from "react";
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
    this.onAdd = props.onAdd;
  }
  onValueChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  addToList = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.salary) {
      this.onAdd([this.state.name, this.state.salary]);
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.addToList}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;