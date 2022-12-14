import React, { useContext, useEffect, useState } from "react";
import { Menu, Button, Group, Grid } from "@mantine/core";
import { v4 as uuid } from "uuid";

import { SettingsContext } from "../../Context/Settings";
import TodoItem from "../Item";
import Form from "../ItemForm";
import "./styles.scss";

const ToDoList = () => {
  const { showCompleted, itemQty, sortParams } = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [page, setPage] = useState(1);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function addToList(item) {
    setList([...list, item]);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  function changePage(e) {
    e.preventDefault();
    setPage(parseInt(e.target.value));
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list, incomplete]);

  let sortedList = [...list];
  if (!showCompleted) {
    sortedList = sortedList.filter((item) => !item.complete);
  }

  sortedList = sortedList.filter((item) => {
    return item.text.toLowerCase().includes(sortParams.toLowerCase());
  });

  let pageButtons = [];
  let pageQty = Math.ceil(sortedList.length / itemQty);
  for (let i = 1; i <= pageQty; i++) {
    pageButtons[i] = (
      <Button variant="outline" onClick={changePage} value={i} key={uuid()}>
        {i}
      </Button>
    );
  }

  sortedList = sortedList.filter(
    (item, idx) => idx < page * itemQty && idx >= (page - 1) * itemQty
  );

  return (
    <>
      <h1 id="headerH1" data-testid="todo-h1">
        To Do List: {incomplete} items pending
      </h1>
      <Grid grow gutter="xl">
        <Grid.Col span={1}>
          <Menu>
            <Form addToList={addToList} />
          </Menu>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            {sortedList.map((item) => (
              <TodoItem
                key={item.id}
                toggleComplete={toggleComplete}
                item={item}
                deleteItem={deleteItem}
              />
            ))}
            <Group id="pageButtons">{pageButtons}</Group>
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDoList;
