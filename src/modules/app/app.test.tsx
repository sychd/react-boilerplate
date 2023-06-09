import { render } from '@testing-library/react';
import React from 'react';

import { App } from 'src/modules/app/app';

describe('<App />', () => {
  it('should render', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.app')).toBeDefined();
  });
});
