import React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '../index';
import { IconPath } from '~/src/assets/icons';

describe('Icon', () => {
  it('Should have svg', () => {
    const { getByRole } = render(<Icon icon={IconPath.SEARCH} />);

    expect(getByRole('img')).toBeTruthy();
  });
});
