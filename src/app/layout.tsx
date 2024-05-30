import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import StoreProvider from "@store/Providers";
import ThemeClient from '@provider/ThemeClient';
import StyledComponentsRegistry from '@provider/registry';
import Login from '@components/auth/Modal/Login';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: "구구모",
  description: "동네 구기종목 매치 서비스 구구모 입니다.",
};

export const viewport : Viewport = {
  width : "device-width",
  initialScale : 1,
  maximumScale : 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ThemeClient>
            <StyledComponentsRegistry>
                <StoreProvider>
                  <Login/>
                  {children}
                </StoreProvider>
            </StyledComponentsRegistry>
          </ThemeClient>
      </body>
    </html>
  );
}
