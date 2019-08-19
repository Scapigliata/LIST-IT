import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

function List({ list, index, completeList, deleteList }) {
  return (
    <div id="func-list-container"><li
      className="liTest containList"
      style={{ textDecoration: list.isCompleted ? "line-through" : "" }}
    >
      {list.text}
      <div>
        <button id="test-btn" className="completed-button check-btn" onClick={() => completeList(index)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="completed-button check-btn x-btn" onClick={() => deleteList(index)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </li></div>
  );
}

const saveToLocalStorage = (key, obj) => {
 try {
  localStorage.setItem(key, JSON.stringify(obj))
 } catch (err) {
  throw new Error(err.message)
 }
}

const fetchFromLocalStorage = (key) => {
  try {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
  } catch (err) {
    throw new Error(err.message)
   }
}

const TextForm = ({ addList, clearAllLists }) => {
  const [value, setValue] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addList(value);
    setValue("");
  };

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit} className="form-field">
        <input
          id="inputVal"
          className="input-field"
          type="text"
          placeholder="Enter a note"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div>
          <Button
            id="inputButton"
            value="Add note"
            type="submit"
            variant="success"
          >
            Go
          </Button>
        </div>
      </form>
      <div>
        <button className="clear-all-button" onClick={clearAllLists}>
          Clear All
        </button>
      </div>
    </div>
  );
};

const RenderLists = () => {
  const [lists, setLists] = useState(
    fetchFromLocalStorage('List-list') || []
  );

  useEffect(() => {
    saveToLocalStorage('List-list', lists)
  }, [lists])

  const addList = text => {
    const newLists = [...lists, { text }];
    setLists(newLists);
  };

  const completeList = index => {
    const newLists = [...lists];
    newLists[index].isCompleted = true;
    setLists(newLists);
  };

  const deleteList = index => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const clearAllLists = () => {
    setLists([])
  }

  return (
    <div id="renderListContainer">
      <TextForm addList={addList} clearAllLists={clearAllLists} />
      <ul id="myUl">
        {lists.map((list, index) => (
          <List
            key={index}
            index={index}
            list={list}
            completeList={completeList}
            deleteList={deleteList}
          />
        ))}
      </ul>
    </div>
  );
};

export default RenderLists;
