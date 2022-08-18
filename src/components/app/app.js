import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Alex F.", salary: 3400, increase: false, rise: false, id: 2 },
        { name: "Fin C.", salary: 4500, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filterButton: "all",
    };
    this.visibleDate = "";
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = ([name, salary]) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: ++this.countOfEmployee,
    };
    this.setState(({ data }) => {
      let newArrayofItem = data.slice(0);
      newArrayofItem[newArrayofItem.length] = newItem;
      return {
        data: newArrayofItem,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((elem) => elem.name.indexOf(term) > -1);
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onThePressedButton = (button) => {
    this.setState({ filterButton: button });
  };
  filterOnTheCurrentButton = (items, button) => {
    switch (button) {
      case "rise":
        return items.filter((elem) => elem.rise === true);
      case "moreThen1000":
        return items.filter((elem) => elem.salary > 1000);
      default:
        return items;
    }
  };

  render() {
    const { data, term, filterButton } = this.state;
    this.countOfEmployee = this.state.data.length;
    this.premium = this.state.data.filter(
      (elem) => elem.increase === true
    ).length;
    this.visibleDate = this.filterOnTheCurrentButton(
      this.searchEmp(data, term),
      filterButton
    );
    return (
      <div className="app">
        <AppInfo
          countOfEmployee={this.countOfEmployee}
          premium={this.premium}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            onThePressedButton={this.onThePressedButton}
            filterButton={filterButton}
          />
        </div>
        <EmployeesList
          data={this.visibleDate}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
