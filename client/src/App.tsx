import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import "antd/dist/antd.css";

function App() {
  // const list = [{
  //   id: 1,
  //   children: [{
  //     id: 2,
  //     children: [{
  //       id: 3
  //     }]
  //   }]
  // }];

  // const getId = (list: any[], nextArr: number[] = []): number[] => {
  //   list.forEach((item: any) => (item.id && nextArr.push(item.id)) && (item.children && getId(item.children, nextArr)))
  //   return nextArr
  // }
  // console.log(getId(list));
  return (
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  );
}

export default App;
