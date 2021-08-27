import React, { useState } from "react";

function DisplayItem(props) {
  const { prop, propList, setpropList, i } = props;
  const [currProp, setcurrProp] = useState(prop);
  const [isEdit, setisEdit] = useState(false);
  function onDelete() {
    let arr = [];
    for (let j = 0; j < propList.length; j++) {
      if (i !== j) {
        arr.push(propList[j]);
      }
    }
    setpropList(arr);
    console.log(arr);
  }

  function updatelist() {
    let arr = [];
    for (let j = 0; j < propList.length; j++) {
      if (i !== j) {
        arr.push(propList[j]);
      } else {
        arr.push(currProp);
      }
    }
    setpropList(arr);
    console.log(currProp);
  }
  return (
    <>
      {isEdit ? (
        <>
          <tr>
            <td>
              <input
                value={currProp.name}
                onChange={(event) => {
                  setcurrProp({
                    name: event.target.value,
                    description: currProp.description,
                    size: currProp.size,
                  });
                  updatelist();
                }}
              ></input>
            </td>
            <td>
              <input
                value={currProp.description}
                onChange={(event) => {
                  setcurrProp({
                    name: currProp.name,
                    description: event.target.value,
                    size: currProp.size,
                  });
                  updatelist();
                }}
              ></input>
            </td>
            <td>
              <input
                value={currProp.size}
                onChange={(event) => {
                  setcurrProp({
                    name: currProp.name,
                    description: currProp.description,
                    size: event.target.value,
                  });
                  updatelist();
                }}
              ></input>
            </td>
            <td>
              <button
                onClick={() => {
                  setisEdit(false);
                  updatelist();
                }}
              >
                Save
              </button>
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td>{prop.name}</td>
          <td>{prop.description}</td>
          <td>{prop.size}</td>
          <td>
            <button
              onClick={() => {
                setisEdit(true);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                onDelete();
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

function Displayprops(props) {
  const { propList, setpropList, Checker } = props;
  Checker();
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Size</td>
          </tr>
        </thead>
        <tbody>
          {propList.map((prop, i) => {
            return (
              <DisplayItem
                prop={prop}
                propList={propList}
                setpropList={setpropList}
                i={i}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Displayprops;
