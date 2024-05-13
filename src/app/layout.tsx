import StyledComponentsRegistry from "@/lib/registry";
import StoreProvider from "@/store/Providers";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import ThemeClient from "@/lib/ThemeClient";
import ModalContext from "@/lib/ModalProvider";
import QueryProvider from "@/lib/QueryProvider";

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
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
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <QueryProvider>
          <ThemeClient>
            <StyledComponentsRegistry>
              <StoreProvider>
                <ModalContext>
                  {children}
                </ModalContext>
              </StoreProvider>
            </StyledComponentsRegistry>
          </ThemeClient>
        </QueryProvider>
      </body>
    </html>
  );
}
