import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '../index';
import { IconPath } from '~/src/assets/icons';

describe('Button', () => {
  it('Should be clicked once', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button icon={IconPath.SEARCH} onClick={onClick} />
    );

    await fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should have text', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button icon={IconPath.SEARCH} onClick={onClick}>
        Button
      </Button>
    );

    expect(getByText('Button')).toBeTruthy();
  });

  it('Should have icon', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button icon={IconPath.SEARCH} onClick={onClick}>
        Button
      </Button>
    );

    expect(getByRole('img')).toBeTruthy();
  });
});
