import { render } from '@testing-library/react';
import React from 'react';

import { WelcomeScreen } from 'src/modules/welcome-screen/welcome-screen';

describe('<WelcomeScreen />', () => {
  it('should render', () => {
    const { container } = render(<WelcomeScreen />);

    expect(container.querySelector('.app')).toBeDefined();
  });
});
