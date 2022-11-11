import React from "react";
import { Form,Button,Input,Checkbox } from "antd";
import { UserOutlined } from "@ant-desing/icons";
import "./register.scss";

export default function Register(){
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        RepeatPassword:"",
        privacyPolicy: false,
    });
    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        }else { 
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });      
        }
    };
    return (
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="email"
                    name="email"
                    placeholder="correo electronico"
                    className="register-form_input"
                    value={inputs.email}
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
                    className="register-form_input"
                    value={inputs.password}
                    />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leido y acepto la politica de privacidad 
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button html type="submit" className="register-form_button">
                    crear cuenta 
                </Button>
            </Form.Item>
        </Form>
    );
}