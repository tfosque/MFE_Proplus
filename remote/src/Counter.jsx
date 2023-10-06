import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <section
      className="container"
      style={{ background: "#025f9e", color: "#fff" }}
    >
      <div>Counter App</div>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)} className="btn btn-secondary">
        Add Count
      </button>
    </section>
  );
};
