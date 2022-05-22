import React from "react";
import List from "./List";

const Lists = ({ lists, remove, check, edit }) => {
  return (
    <div className="listWrap">
      <ul className="list-group">
        {lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            remove={remove}
            edit={edit}
            check={check}
            checked={list.checked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
