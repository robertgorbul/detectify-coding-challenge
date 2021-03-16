import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ActionButton } from '../index';
import { IconPath } from '~/src/assets/icons';

jest.mock('../ActionButton.module.css', () => ({}));

describe('ActionButton', () => {
  it('Should be clicked once', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ActionButton icon={IconPath.SEARCH} onClick={onClick} />
    );

    await fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should have icon', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ActionButton icon={IconPath.SEARCH} onClick={onClick} />
    );

    expect(getByRole('img')).toBeTruthy();
  });
});
