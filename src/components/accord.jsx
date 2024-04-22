import React, { useState } from 'react';
import './accord.css';
import data from './data';

function Accord() {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getId) {
    // console.log(getId);
    setSelected(getId === selected ? null : getId);
  }

  function handleMultipleSelection(getId) {
    const cpyMultiple = [...multipleSelected];
    const getIndexofId = cpyMultiple.indexOf(getId);

    if (getIndexofId === -1) {
      cpyMultiple.push(getId);
    } else {
      cpyMultiple.splice(getIndexofId, 1);
    }

    setMultipleSelected(cpyMultiple);
    console.log(multipleSelected);
  }

  function handleMultiple() {
    setEnableMultiple((prev) => !prev);
    console.log(enableMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={handleMultiple}>ENABLE MULTI SELECTION</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiple
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multipleSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> no data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accord;
