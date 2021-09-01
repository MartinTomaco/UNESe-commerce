import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address) => {
  const [position, setPosition] = useState({});
  const API_KEY = '29a1b5c0c5149b96d20d2e1d992c50a5';
  const API = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}`;

  useEffect(async () => {
    const response = await axios(API);
    setPosition([
      response.data.data[0].latitude,
      response.data.data[0].longitude,
    ]);
  }, []);
  return position;
};

export default useAddress;
