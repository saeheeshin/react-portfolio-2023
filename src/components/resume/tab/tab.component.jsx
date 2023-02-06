import "./tab.styles.scss";

const Tab = ({ tabChangeHandler }) => {
  return (
    <div className="tab grid__mobile--6 grid__desktop--4">
      <button onClick={tabChangeHandler} className="tab__experience active">
        Experience
      </button>
      <button onClick={tabChangeHandler} className="tab__education">
        Education
      </button>
    </div>
  );
};

export default Tab;
