import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import type { Metadata, Viewport } from "next";
import StoreProvider from "@provider/ReduxProviders";
import ThemeClient from '@provider/ThemeClient';
import StyledComponentsRegistry from '@provider/registry';
import Login from '@components/auth/Modal/Login';
import AuthProvider from '@provider/AuthProvider';
import GlobalStyleProvider from '@provider/GlobalStyleProvider';
import "./font.css";

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
      <body style={{fontFamily : "Pretendard"}}>
        <AuthProvider>
          <ThemeClient>
            <StyledComponentsRegistry>
              <GlobalStyleProvider>
                <StoreProvider>
                  <Login/>
                  {children}
                </StoreProvider>
              </GlobalStyleProvider>
            </StyledComponentsRegistry>
          </ThemeClient>
        </AuthProvider>
      </body>
    </html>
  );
}
