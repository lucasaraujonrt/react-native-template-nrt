import React from 'react';
import Row from '@mobile/components/Grid/Row/Row';
import Background from '@mobile/components/Background/Background';
import EmptyState from '../../assets/svg/ic_development.svg';

const Home: React.FC = () => {
  return (
    <Background scrollView>
      <Row alignSelf="center" pdTop={20}>
        <EmptyState />
      </Row>
    </Background>
  );
};

export default Home;
