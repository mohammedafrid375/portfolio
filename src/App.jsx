import React from "react";
import { motion } from "framer-motion";
import { Button, Layout, Menu } from "antd"; // Using Ant Design components
import "./App.css"; // Import a regular CSS file

const { Header, Content, Footer } = Layout;

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          {sections.map((section) => (
            <Menu.Item key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="content">
        <div className="hero-section" style={{ backgroundImage: "url('/path-to-your-bg.jpg')",height:"100vh" }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="title"
          >
            Welcome to My Portfolio
          </motion.h1>
          <Button type="primary" className="custom-button">
            Get Started
          </Button>
        </div>
      </Content>
      <Footer className="footer">© 2025 My Portfolio. All rights reserved.</Footer>
    </Layout>
  );
};

export default App;
