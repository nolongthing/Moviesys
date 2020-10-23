import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  );
}

export default App;
