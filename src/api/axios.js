import React, { useEffect } from 'react';
import axios from 'axios';

export const List = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        return response;
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
};
