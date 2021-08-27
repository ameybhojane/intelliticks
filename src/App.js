import "./App.css";
import { useState } from "react";
import Displayprops from "./Displayprops.js";

function App() {
  const [newProp, setnewProp] = useState({
    name: "",
    description: "",
    size: "",
  });
  const [propList, setpropList] = useState([]);
  const [disablebutton, setdisablebutton] = useState(true);
  function Checker() {
    if (
      newProp.name !== "" &&
      newProp.description !== "" &&
      newProp.size !== ""
    ) {
      setdisablebutton(false);
    }
  }

  return (
    <div className="App">
      <h1>Welcome Agent</h1>
      <div>
        <h3>Add New Property</h3>
        <input
          placeholder={`Add Name`}
          value={newProp.name}
          onChange={(event) => {
            setnewProp({
              name: event.target.value,
              description: newProp.description,
              size: newProp.size,
            });
            Checker();
          }}
        />
        <input
          placeholder={`Add Description`}
          value={newProp.description}
          onChange={(event) => {
            setnewProp({
              name: newProp.name,
              description: event.target.value,
              size: newProp.size,
            });
            Checker();
          }}
        />
        <input
          placeholder={`Add Size`}
          value={newProp.size}
          onChange={(event) => {
            setnewProp({
              name: newProp.name,
              description: newProp.description,
              size: event.target.value,
            });
            Checker();
          }}
        />
        <button
          onClick={() => {
            setpropList([...propList, newProp]);
            setnewProp({
              name: "",
              description: "",
              size: "",
            });
            setdisablebutton(true);
          }}
          disabled={disablebutton}
        >
          Add Property
        </button>
      </div>
      <Displayprops
        propList={propList}
        setpropList={setpropList}
        Checker={Checker}
      />
    </div>
  );
}

export default App;
