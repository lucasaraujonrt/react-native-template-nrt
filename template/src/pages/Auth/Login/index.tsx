import React from 'react';
import Background from '@mobile/components/Background/Background';
import { Button, Row } from '@mobile/components';
import Toaster from '@mobile/services/toaster';

const Login: React.FC = () => {
  return (
    <Background>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! Error"
          disabled={false}
          onPress={() => Toaster.info('Error', 'ao enviar dados')}
        />
      </Row>
    </Background>
  );
};

export default Login;
