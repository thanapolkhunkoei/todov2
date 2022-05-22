import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  const [list, setList] = useState("");
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );
  const [editing, setEditing] = useState(false);
  const [listObject, setlistObject] = useState({});
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const getLists = JSON.parse(localStorage.getItem("lists"));
    if (getLists) {
      setLists(getLists);
    }
    // console.log(lists);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      setLists([...lists, { title: list, id: Date.now(), checked: false }]);
      console.log(lists);
      setList("");
    } else if (editing) {
      updateEditList();
      setEditingText("");
    }
  };

  const updateEditList = () => {
    const { title, id, checked } = listObject;
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.title = editingText;
      }
      return item;
    });

    // console.log(newList);

    setLists(newList);
    setEditing(false);
    setList("");
  };

  const deleteList = (id) => {
    const removeAndUpdate = lists.filter((item) => item.id !== id);
    setLists(removeAndUpdate);
    console.log(lists);
  };

  const checkList = (id) => {
    const index = lists.findIndex((item) => item.id === id);
    const showLists = [...lists];

    showLists[index] = {
      id: lists[index].id,
      title: lists[index].title,
      checked: !lists[index].checked,
    };
    setLists(showLists);
    console.log(lists);
  };

  const editList = (id) => {
    const editedList = lists.find((item) => item.id === id);
    setEditing(true);
    // setList(editedList.title);
    setlistObject(editedList);
    setEditingText("");
  };

  const cancleEdit = () => {
    setEditing(false);
    setList("");
  };

  const clear = () => {
    localStorage.clear("lists");
    setLists([]);
  };

  return (
    <>
      <Layout>
        <Header />
        <Form
          editingText={editingText}
          setEditingText={setEditingText}
          updateEditList={updateEditList}
          cancleEdit={cancleEdit}
          editList={editList}
          list={list}
          editing={editing}
          changes={(e) => setList(e.target.value)}
          submit={onSubmit}
        />
        <Lists
          lists={lists}
          remove={deleteList}
          check={checkList}
          edit={editList}
        />
        <Footer clear={clear} />
      </Layout>
    </>
  );
}

export default App;
