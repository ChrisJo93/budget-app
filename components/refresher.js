import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Refresher = () => {
  const [state, setState] = useState({
    firstInput: '',
    secondInput: '',
    final: '',
  });

  const add = (a, b) => {
    setState({ ...state, final: a - b });
    return a - b;
  };

  const handleUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(add(state.firstInput, state.secondInput));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Input:
          <input
            type="number"
            name="firstInput"
            value={state.firstInput}
            onChange={handleUpdate}
          ></input>
        </label>
        <label>
          Second Input:
          <input
            type="number"
            name="secondInput"
            value={state.secondInput}
            onChange={handleUpdate}
          ></input>
        </label>
        <input type="submit"></input>
      </form>
      <span>Total: {state.final}</span>
    </div>
  );
};

export default connect((state) => state)(Refresher);
