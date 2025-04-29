import React, { useState } from "react";
import "./Layout.css"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  return (
    <Layout style={{minHeight: "100vh" , margin:"0", borderRadius:""}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{borderTopLeftRadius:"20px", borderBottomLeftRadius: " 20px"}}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <UserOutlined />, label: "Todo-List" },
            { key: "2", icon: <VideoCameraOutlined />, label: "About Us" },
            { key: "3", icon: <UploadOutlined />, label: "Contact Us" }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            height: "80vh",
            width: "80vw",
            display: "Flex",
            alignItems: "center",
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
