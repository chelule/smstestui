import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
import './App.css';
import SmsintegrationForm from './forms/SmsintergrationForm'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const SmsIntegrationFormInst = Form.create()(SmsintegrationForm);

    
class App extends Component {
  render() {
    return (
      <Layout className="layout">
      <Header className="App-header">
        <img src={logo} alt="logo" />
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">SMS Testing</Menu.Item>
          <Menu.Item key="2">Configuration Page</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <div>
        <h1 className="App-title">SMS Integration Test UI</h1>
        <h2 className="App-title">This is a platform to test the SMS sytem.</h2> 
        <SmsIntegrationFormInst />
        </div>
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Living Goods 2018
      </Footer>
    </Layout>
    );
  }
}

export default App;
