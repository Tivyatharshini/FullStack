// DataComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [age, setAge] = useState(0);
  const [temp, setTemp] = useState(0);

  // Fetch data from the server on component mount
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/data')
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Handle form submission
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/api/data', { message: inputMessage, age })
      .then((response) => {
        setResponseMessage(response.data.message);
        setTemp(response.data.age);
      })
      .catch((error) => console.error('Error sending data:', error));
  };

  return (
    <div>
      <h1>Data from Server</h1>
      <p>{data}</p>
      <form onSubmit={handleClick}>
        <label>
          Message:
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Message from server: {responseMessage}</p>
      <p>Age from server: {temp}</p>
    </div>
  );
};

export default DataComponent;
