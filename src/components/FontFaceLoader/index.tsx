import { useTheme } from '~hooks/useTheme';
import { useFontLoadingApi } from '~hooks/useFontLoadingApi';

export const FontFaceLoader: React.FC = ({ children }) => {
  const {
    fonts: {
      base: { typefaces: baseTypefaces },
      code: { typefaces: codeTypefaces },
    },
  } = useTheme();

  useFontLoadingApi({
    fonts: [...baseTypefaces, ...codeTypefaces],
  });

  return <div id="font-face-loader">{children}</div>;
};
