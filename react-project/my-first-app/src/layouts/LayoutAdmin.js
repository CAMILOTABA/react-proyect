import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/MenuComponents/MenuTop/MenuTop";
import MenuSider from "../components/MenuComponents/MenuSider/MenuSider";
import {GithubOutlined} from "@ant-design/icons";
import SignIn from "../pages/Admin/signin"
import "./layoutAdmin.scss";

export default function layoutAdmin(props){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    const user = null;
    if (!user){
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/admin/login/login" element={<SignIn/>}/>
                </Routes>

            </>
        );
    }

        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout
                    className="layout-admin"
                    style={{ marginleft:menuCollapsed ? "80px" : "200px" }}
                >
                    <Header className="layout-admin_header">
                        <MenuTop 
                          menuCollapsed = {menuCollapsed}
                          setMenuCollapsed = {setMenuCollapsed}
                        />  
                    </Header>
                    <Content className="layout-admin_content">{children}</Content>
                    <Footer className="layout-admin_footer">
                        <GithubOutlined style={{fontSize:"17px"}} /> camiloTabares
                   
                    </Footer>
            </Layout>
        </Layout> 
        );
}