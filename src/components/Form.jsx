import React from "react";

const Form = ({
  list,
  changes,
  submit,
  editing,
  cancleEdit,
  editingText,
  setEditingText,
}) => {
  return (
    <>
      {editing ? (
        <form onSubmit={submit}>
          <div className="form-group row my-4">
            <div className="col-8">
              <input
                placeholder="Edit Todo list"
                type="text"
                className="form-control"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary me-2">
                Edit
              </button>
              <button
                // type="submit"
                className="btn btn-primary"
                onClick={cancleEdit}
              >
                Cancle
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={submit}>
          <div className="form-group row my-4">
            <div className="col-10">
              <input
                placeholder="Add to do list"
                type="text"
                className="form-control"
                value={list}
                onChange={changes}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
