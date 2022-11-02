import useForm from "../../hooks/form";
import { Box, Button } from "@mantine/core";
import "./styles.scss";
import { v4 as uuid } from "uuid";

function Form({ addToList }) {
  const defaultValues = {
    difficulty: 4,
    text: "text",
    assignee: "assignee",
  };

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    addToList(item);
  }

  return (
    <Box id="formBox">
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
            data-testid="text-input"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            data-testid="assignee-input"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
            data-testid="difficulty-input"
          />
        </label>

        <label>
          <Button type="submit">Add Item</Button>
        </label>
      </form>
    </Box>
  );
}

export default Form;
