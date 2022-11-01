import React from 'react';
import { Card, Text, Badge, CloseButton, Group, Checkbox } from '@mantine/core';
import './styles.scss'

function Item({ item, toggleComplete, deleteItem }) {
  return (
    <Card id='todoItemList' shadow="sm" p="lg" radius="md" withBorder>
      <span>
        <Card.Section >
          <Badge color="green" variant="solid">
            Pending
          </Badge>
          <CloseButton id='taskCloseButton' onClick={() => deleteItem(item.id)} />
          <span id='itemAssignee'>Assigned to: {item.assignee}
          </span>
          <hr />
        </Card.Section>
      </span>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{item.text}</Text>
      </Group>
      <span>
        <p id='difficultyText'>
          <Checkbox onClick={() => toggleComplete(item.id)} label="Complete" />
          <small>
            Difficulty: {item.difficulty}
          </small>
        </p>
      </span>
    </Card>
  )
}

export default Item;
