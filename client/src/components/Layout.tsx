import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import List from '../pages/List';
import Add from '../pages/Add';
import Edit from '../pages/Edit';
import Index from '../pages/Index';

class LayoutCom extends Component<RouteComponentProps> {

  render() {
    const { Header, Sider, Content } = Layout;
    const path = this.props.location.pathname;
    return (
      <Layout>
        <Header>
          <NavLink to='/' >
            管理系统
        </NavLink>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[path]}
            >
              <Menu.Item key="/" >
                <NavLink to="/">首页</NavLink>
              </Menu.Item>
              <Menu.Item key="/list" >
                <NavLink to="/list">列表</NavLink>
              </Menu.Item>
              <Menu.Item key="/add" >
                <NavLink to="/add">添加</NavLink>
              </Menu.Item>
              <Menu.Item key="/edit" >
                <NavLink to="/edit">修改</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Route exact path="/" component={Index} />
            <Route path="/list" component={List} />
            <Route path="/add" component={Add} />
            <Route path="/edit" component={Edit} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}


export default withRouter(LayoutCom as any);
