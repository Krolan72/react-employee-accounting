import "./app-info.css";
const AppInfo = ({ countOfEmployee, premium }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {countOfEmployee}</h2>
      <h2>Премию получат: {premium} </h2>
    </div>
  );
};

export default AppInfo;
