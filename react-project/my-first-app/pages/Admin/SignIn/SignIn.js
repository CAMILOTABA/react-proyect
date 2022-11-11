import React from "react";
import { Layout , Tabs } from "antd";
import Login from "../../../src/components/MenuComponents/Login";
import Register from "../../../src/components/MenuComponents/Register";

export default function SignIn(){
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return(
        <Layout>
            <Content>
                <Tabs type="card">
                    <TabPane tab={<span>Inicio sesion</span>} key="1">
                      <Login/>  
                    </TabPane>
                    <TabPane TabPane tab={<span>registro</span>} key="2">
                        <Register/>
                  </TabPane> 
                </Tabs>
            </Content>
        </Layout>
    );
}
