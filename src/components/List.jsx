import React from "react";

const List = ({ id, title, remove, check, edit, checked }) => {
  return (
    <li
      className={
        checked
          ? "bg-info list-group-item d-flex justify-content-between"
          : " list-group-item d-flex justify-content-between"
      }
    >
      {title}
      <div className="flex justify-content-evenly">
        <button
          className="btn btn-sm btn-danger me-2"
          onClick={() => remove(id)}
        >
          Del
        </button>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => edit(id)}
        >
          Edit
        </button>

        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => check(id)}
        >
          {checked ? "Undo" : "Check"}
        </button>
      </div>
    </li>
  );
};

export default List;
