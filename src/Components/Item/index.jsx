import React from "react";
import { Card, Text, Badge, CloseButton, Group, Checkbox } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import "./styles.scss";

function Item({ item, toggleComplete, deleteItem }) {
  const [value, toggle] = useToggle();

  let badgeColor = "blue";

  return (
    <Card id="todoItemList" shadow="sm" p="lg" radius="md">
      <span>
        <Card.Section>
          <Badge 
            className={'badgeToggleComplete'+ (value ? 'badgeTogglePending':'')}
            onClick={() => toggle()}
            label="Complete"
            color={badgeColor}
            variant="solid"
            text="Text"
          >
            {value ? 'pending': 'complete'}
          </Badge>
          <CloseButton
            id="taskCloseButton"
            onClick={() => deleteItem(item.id)}
          />
          <span id="itemAssignee">Assigned to: {item.assignee}</span>
          <hr />
        </Card.Section>
      </span>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{item.text}</Text>
      </Group>
      <span id="difficultyText">
        <Checkbox onClick={() => toggleComplete(item.id)} label="Complete" />
        <small>Difficulty: {item.difficulty}</small>
      </span>
    </Card>
  );
}

export default Item;
