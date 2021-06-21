import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Container, Header, Title, Content, Body, Text} from 'native-base';

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Home Screen</Title>
        </Body>
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>This is Home Screen</Text>
      </Content>
    </Container>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default App;
