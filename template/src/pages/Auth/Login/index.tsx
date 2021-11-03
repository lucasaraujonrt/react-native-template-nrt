import React from 'react';
import { Button, Row, Background, Input } from '@mobile/components';
import Toaster from '@mobile/services/toaster';
import useForm from '@mobile/hooks/useForm';

const Login: React.FC = () => {
  const [form, onChange, clear] = useForm({ name: '', email: '' });

  return (
    <Background>
      <Row pdTop={5} alignSelf="center">
        <Button
          title="Press Me!! Error"
          disabled={false}
          onPress={() => Toaster.info('Error', 'ao enviar dados')}
        />
        <Input
          title="Insira seu nome"
          value={form.name}
          onChangeText={(value: string) => onChange('name', value)}
        />
      </Row>
    </Background>
  );
};

export default Login;
