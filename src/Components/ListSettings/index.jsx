import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Box, Checkbox } from '@mantine/core';

function SettingsForm() {
  const {
    showCompleted,
    toggleShowCompleted,
    itemQty,
    handleItemQty,
    sortParams,
    handleSortParams,
  } = useContext(SettingsContext);

  function handleFilterInput(e) {
    e.preventDefault();
    handleSortParams(e.target.value);
  }

  function handleChange(value) {
    handleItemQty(value);
  }

  return (
    <Box>
      <input
        value={sortParams}
        placeholder="Enter filter keyword"
        onChange={handleFilterInput}
      />
      <Checkbox
        label="Show completed?"
        checked={showCompleted}
        onChange={toggleShowCompleted}
        data-testid="show-completed-checkbox"
      />
      <input
        onChange={handleChange}
        type="range"
        min={1}
        max={5}
        name="difficulty"
        initialvalue={itemQty}
      />
      <span>Items per page</span>
    </Box>
  );
}

export default SettingsForm