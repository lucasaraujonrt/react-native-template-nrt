import React from 'react';
import { renderWithTheme } from '../../test-utils';
import { Button } from '@mobile/components';

describe('Button Snapshot', () => {
  it('should be render', () => {
    const component = renderWithTheme(
      <Button title="testing" onPress={() => {}} disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
