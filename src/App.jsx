import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import Trending from './components/Trending';
import LyricsSearch from './components/search/Search';





function App() {
  const [res, setRes] = useState('');

  async function fetchData(){

    return fetch('/api/associations/',{
      mode: 'no-cors',
    }).then(result => {
      return result.json()
    }
      )
  }

  const onFinish = async (values) => {  
    console.log("starting ")
    let temp = await fetchData().then(value => {
      console.log(value)
      return value;
    });
    setRes(temp.message.body.track_list)

    console.log('resonate ', temp.message.body.track_list);

    /*
    *     useState is not immediately available.
     May have to force rerender if data is needed 
     in the current component. see results of first 
     log attempt vs following attempts

    */
    console.log('Success:', values, res);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



      {/* <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

  <LyricsSearch results={res}></LyricsSearch> */}




{/* 

Trending component



 */}

  <Trending></Trending>

    </div>
  );
}

export default App;
