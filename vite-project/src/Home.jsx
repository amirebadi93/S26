import { useState } from "react";
import "./Home.css";

function Home() {
  const [item, setItem] = useState();
  const [list, setList] = useState(["Test", "test1", "test2"]);
  const handleRemove = index => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={item}
          onChange={e => {
            const tempValue = e.target.value;
            setItem(tempValue);
          }}
        />

        <button
          onClick={() => {
            const updatedList = [...list];
            updatedList.push(item);
            setList(updatedList);
            setItem("");
          }}
        >
          add
        </button>
      </div>
      <span>
        {item}
      </span>
      <div className="todo-list">
        <ul>
          {list.map((item, index) =>
            <div className="list-item" key={index}>

              <li>
                {item}
              </li>

              <div className="button-holder">
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>

            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
