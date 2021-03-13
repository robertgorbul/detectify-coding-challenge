import { useEffect } from 'react';

type FontLoadingApiProps = {
  fonts: string[];
  className?: string;
};

export const useFontLoadingApi = ({
  fonts,
  className = 'fonts-loaded',
}: FontLoadingApiProps): void => {
  useEffect(() => {
    (async () => {
      try {
        await Promise.all(
          fonts.map(async (name) => document.fonts.load(`normal 1em ${name}`))
        );

        document.body.classList.add(className);
      } catch {
        console.error('An error occurred during font loading');
      }
    })();
  }, [fonts, className]);
};
