import styles from 'styles/Home.module.css';

const MonthDisplay = (props) => {
  return (
    <div>
      <p onClick={() => console.log(props)}>
        {props.month.month_name}: {props.month.id}
      </p>
    </div>
  );
};

export default MonthDisplay;
