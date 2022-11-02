import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 

import App from '../../App';
import Settings from '../../Context/Settings';

function addItem(text, assignee, difficulty) {
  const textInput = screen.getByTestId('text-input')
  fireEvent.change(textInput, { target: { value: text } })
  const assigneeInput = screen.getByTestId('assignee-input')
  fireEvent.change(assigneeInput, { target: { value: assignee } })
  const difficultyInput = screen.getByTestId('difficulty-input')
  fireEvent.change(difficultyInput, { target: { value: difficulty } })

  const addButton = screen.getByText('Add Item');
  fireEvent.click(addButton)
}

describe('Testing that the To Do list updates with user input', () => {

  test('To do items are rendered after they are added', async () => {
    render(<Settings><App /></Settings>);

    addItem('mock to do text', 'Rob', 1)

    const newTodoItem = screen.getByText('mock to do text');
    expect(newTodoItem).toBeInTheDocument();
  });

  test('Items past the page limit are not rendered', async () => {
    render(<Settings><App /></Settings>);

    addItem('mock to do text 1', 'Rob', 5)
    addItem('mock to do text 2', 'Rob', 5)
    addItem('mock to do text 3', 'Rob', 5)
    addItem('mock to do text 4', 'Rob', 5)
    addItem('mock to do text 5', 'Rob', 5)
    addItem('mock to do text 6', 'Rob', 5)
    addItem('mock to do text 7', 'Rob', 5)

    const hiddenItem = screen.queryByText('mock to do text 7');
    expect(hiddenItem).not.toBeInTheDocument();
  });
});