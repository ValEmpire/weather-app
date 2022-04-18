import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";

import { store } from "./redux/store";

import IndexPage from "./pages";

function App() {
  return (
    <Provider store={store()}>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
