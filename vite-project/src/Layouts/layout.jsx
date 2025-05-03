import React, { useState } from "react";
import "./Layout.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router";
const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh", margin: "0", borderRadius: "" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: " 20px" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            switch (key) {
              case "1":
                navigate("/");
                break;
              case "2":
                navigate("/about");
                break;
              case "3":
                // This route doesn't exist yet, but we'll prepare for it
                navigate("/contact");
                break;
              default:
                navigate("/");
            }
          }}
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
