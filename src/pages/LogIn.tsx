import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import { AuthContext } from '../context/AuthContext';

import styles from "./Login.module.scss"

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};


const Login: React.FC = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('AuthContext is undefined');
  }

  const { setAuthenticated } = context;
  

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (values.username === 'user' && values.password === 'user123') {
      setAuthenticated(true);
      navigate('/characters');
    } else {
      alert('Invalid credentials');
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className={`${styles.background}`}>
    <div className={styles.mainSection}>
      <div className={styles.form}>
        <h2>Login</h2>
    
    <Form 
    className={styles.formContainer}
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className={styles.inputContainer}>
      <Form.Item<FieldType>
        name="username"
        
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
        placeholder='Username'
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password 
        placeholder='Password'
        />
      </Form.Item>
      <div className={styles.rememberContainer}>
      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      </div>
      </div>

      <div className={styles.continueBtnContainer}>
      <Form.Item label={null}>
        <Button 
        className={styles.continueBtn}
        block type="primary" 
        htmlType="submit">
          Continue
          <ArrowRightOutlined />
        </Button>
      </Form.Item>
      </div>
    </Form>
    </div>
    </div>
    </section>
  );
};

export default Login;
