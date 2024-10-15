import './global.css';

import StyledComponentsRegistry from '@/providers/styledComponentsRegistry';
import ThemeProvider from '@/providers/themeProvider';

import { Main } from './styled';

export const metadata = {
  title: 'Movies',
  description: 'Movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <StyledComponentsRegistry>
            <Main>{children}</Main>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
