import type { AppProps } from 'next/app';

import { ThemeProvider } from '~theme/ThemeProvider';
import { FontFaceLoader } from '~components/FontFaceLoader';

import '~/src/css/core.css';
import '~/src/css/components.css';
import '~/src/css/utilities.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <FontFaceLoader>
        <Component {...pageProps} />
      </FontFaceLoader>
    </ThemeProvider>
  );
}

export default MyApp;
