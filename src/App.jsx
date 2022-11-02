import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./Components/Header";
import SettingsForm from "./Components/ListSettings";
import ToDo from "./Components/ToDo";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
