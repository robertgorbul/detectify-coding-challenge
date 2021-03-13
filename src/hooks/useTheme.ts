import { useContext } from 'react';

import { Theme } from '~/src/theme';
import { ThemeContext } from '~theme/ThemeProvider';

export const useTheme = (): Theme => useContext(ThemeContext);
