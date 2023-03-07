const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={props.increment}>➕</button>
      <h1>{props.counter}</h1>
      <button onClick={props.decrement}>➖</button>
    </div>
  );
};

export default Counter;
