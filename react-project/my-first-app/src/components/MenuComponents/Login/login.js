import React from "react";
import { Form,Button,Input } from "antd";
import { UserOutlined } from "@ant-desing/icons";

import "./Login.scss";
export default function Login(){
    return (
        <Form className="login-form">
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="email"
                    name="email"
                    placeholder="correo electronico"
                    className="login-form_input"
                    />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="password"
                    name="password"
                    placeholder="contraseña"
                    className="login-form_input"
                    />
            </Form.Item>
            <Form.Item>
                <Button html type="submit" className="login-form_button">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
}