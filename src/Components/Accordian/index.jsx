import { useState } from "react";
import "./styles.css";
import data from "./data";

//  what r we doing we r going to do
// single selections
// mutiple selections

export default function Accordian() {
  // single selections
  const [selected, setSelected] = useState(null);

  // multiple selections
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    // if else statement in ternary operator
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          fontSize: "70px",
          marginBottom: "-95px",
        }}
      >
        Accordian App
      </h1>
      <div className="wrapper">
        {/* Event handler in here */}
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multiple Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={data.id} className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content"> {dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content"> {dataItem.answer}</div>
                    )}

                {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null} */}
              </div>
            ))
          ) : (
            <div> No Data Is Found 😔</div>
          )}
        </div>
      </div>
      <hr className="line-below" />
    </>
  );
}
