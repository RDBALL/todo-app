import React, { useState } from "react";

export const SettingsContext = React.createContext();

function Settings({ children }) {
  const [showCompleted] = useState(true);
  const [itemQty] = useState(6);
  const [sortParams] = useState('');

  return (
    <SettingsContext.Provider value={{ showCompleted, itemQty, sortParams }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default Settings;