import React from "react";
import { Card, Text, Badge, CloseButton, Group } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import "./styles.scss";

function Item({ item, toggleComplete, deleteItem }) {
  const [value, toggle] = useToggle();

  const onClick = () => {
    toggleComplete(item.id);
    toggle();
  }
  let badgeColor = "green";

  return (
    <Card id="todoItemList" shadow="sm" p="lg" radius="md">
      <span>
        <Card.Section>
          <Badge 
            className={'badgeToggleComplete'+ (value ? 'badgeTogglePending':'')}
            onClick={() => onClick()}
            label="Complete"
            color={badgeColor}
            variant="filled"
            text="Text"
          >
            {!value ? 'pending': 'complete'}
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
    </Card>
  );
}

export default Item;
