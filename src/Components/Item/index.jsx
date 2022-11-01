import React from 'react';
import { Card, Text, Badge, CloseButton, Group } from '@mantine/core';
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
          <span id='itemAssignee'>{item.assignee}
          </span>
          <hr />
        </Card.Section>
      </span>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{item.text}</Text>
      </Group>
      <p id='difficultyText'><small>Difficulty: {item.difficulty}</small></p>
    </Card>
  )
}

export default Item;
