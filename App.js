import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";
import axios from "axios";
import "./style.css";


function App() {
  const [data, setData] = useState({});
  const [message, setMessage] = useState('')
  const getWeather = (city) => {
    const KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    const APIlink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(APIlink)
      .then(({ data }) => {
        console.log(data);
        setData(data);
        setMessage('')
      })
      .catch(() => {
        setMessage('Э пиши нормально а!');
        setData({});
    });
  }
  return (
    <div className="App">
      <Form getWeather={getWeather} />
      <Table message={message} data={data} />
    </div>
  );
}

export default App;
