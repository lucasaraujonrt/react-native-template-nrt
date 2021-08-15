import React from 'react';
import Background from '@mobile/components/Background/Background';
import Button from '@mobile/components/Button/Button';
import Row from '@mobile/components/Grid/Row/Row';
import { success, error, info } from '@mobile/services/Toast';
import navigationService from '@mobile/services/navigation';

const Login: React.FC = () => {
  return (
    <Background>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! Success"
          disabled={false}
          onPress={() => success('Info', 'React native baby')}
        />
      </Row>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! Error"
          disabled={false}
          onPress={() => error('Info', 'React native baby')}
        />
      </Row>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! Info"
          disabled={false}
          onPress={() => info('Info', 'React native baby')}
        />
      </Row>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! TabBar"
          disabled={false}
          onPress={() => navigationService.navigate('Content')}
        />
      </Row>
    </Background>
  );
};

export default Login;
