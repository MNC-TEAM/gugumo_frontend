import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import type { Metadata, Viewport } from "next";
import StoreProvider from "@provider/ReduxProviders";
import ThemeClient from '@provider/ThemeClient';
import StyledComponentsRegistry from '@provider/registry';
import AuthProvider from '@provider/AuthProvider';
import GlobalStyleProvider from '@provider/GlobalStyleProvider';
import "./font.css";
import CustomModal from '@components/modal/custom-modal';

export const metadata: Metadata = {
  title: "구구모",
  description: "동네 구기종목 매치 서비스 구구모 입니다.",
  manifest : "/manifest.json",
  icons : {
    icon : [
      { rel: 'apple-touch-icon', sizes: '57x57', url: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', url: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', url: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', url: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', url: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', url: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', url: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', url: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/icons/apple-icon-180x180.png' },
    ]
  }
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
                  <CustomModal/>
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