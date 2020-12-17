import React, { useEffect } from 'react';
import * as Location from 'expo-location';
import { Container, Title } from './styles';

const Home = () => {
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        return;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
};

export default Home;
