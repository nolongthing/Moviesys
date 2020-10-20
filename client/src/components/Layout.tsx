import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import List from '../pages/List';
import Add from '../pages/Add';
import Edit from '../pages/Edit';

export default class LayoutCom extends Component {

  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout>
        <Header>
          <NavLink to='/'>
            管理系统
        </NavLink>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="1" >
                <NavLink to="/list">列表</NavLink>
              </Menu.Item>
              <Menu.Item key="2" >
                <NavLink to="/add">添加</NavLink>
              </Menu.Item>
              <Menu.Item key="3" >
                <NavLink to="/edit">修改</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
            <Route path="/edit" component={Edit} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
