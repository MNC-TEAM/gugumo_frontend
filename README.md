# 구구모

<p align="center">
  <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/a25dc9db-e28d-4310-b252-21f14b9147b9">
</p>

> **개발기간** 2024.04 ~ 2024.05

<br/>

## 서비스 주소

https://gugumo.vercel.app/

<br />

## 프로젝트 소개

배드민턴, 농구, 풋살, 테니스, 탁구, 야구 등 여러 가지 구기종목들을 좋아하거나 취미로 활동하시는데 같이 하실 분이 없거나 구하기 힘드신 분들을 위해서 만든 구기종목 모집 매칭 서비스입니다. 해당 매칭을 이용해서 근처 지역들에 사시는 분들끼리의 담소를 권유해 취미활동을 공유하도록 도와주고 있습니다.

<br />

## 시작 가이드

### 요구사항

- Node.js 20.11.1^
- Npm 10.5.0^

### Installation

```
$ git clone https://github.com/gugumo-service/gugumo_frontend.git
$ cd gugumo_frontend
```

### Frontend

```
$ npm install
$ npm run dev
```

<br />

## 기술 스택

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1715970881275?alt=media&token=47b52b75-bc18-4604-9322-d9f1194e1b40)](https://github.com/msdio/stackticon)
<br />

## 주요 기능

### ⭐ 간단한 매칭시스템

- 단기 모집, 장기 모집을 선택해서 원하는 모집으로 게시글을 작성할 수 있습니다
- 작성한글과 태그를 이용하여 원하는 구기종목의 게시글을 조회할 수 있습니다.
- 오픈카톡을 이용해서 원하는 사람들과의 매칭을 이루게 해줍니다.

### ⭐ 작성한글 조회

- 작성했던 글들을 조회할 수 있습니다.

### ⭐ 북마크 등록

- 원하는 게시글을 북마크를 해서 저장할 수 있습니다.

### ⭐ JWT을 이용한 토큰방식 로그인

- JWT을 이용한 토큰방식으로 로그인을 구현 하였습니다.

<br />

## 화면 구성

|                                                    메인페이지                                                    |                                                   북마크페이지                                                   |                                                     작성한글                                                     |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/58eaf5be-547f-4215-b3c5-19013d8b0c2f) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/b1651a82-619e-42d9-b812-109f63d97f96) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/2d1a59d6-edec-49ee-b629-93a139cbb90b) |
|                                                      로그인                                                      |                                                     회원가입                                                     |                                                    마이페이지                                                    |
| ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/b3b29943-bdd9-4e5e-b4c4-a3d091ffea24) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/3a6b143c-fd57-4d4c-aca3-733132f49788) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/65cf7af3-39c0-4686-bf4f-b1614ead2a52) |
|                                               작성페이지 단기모집                                                |                                               작성페이지 장기모집                                                |                                                    상세페이지                                                    |
| ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/d5c1c430-b7b2-46e5-a37f-0008b494338f) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/fef819c3-f418-4af7-9dcd-94600f4c1559) | ![image](https://github.com/gugumo-service/gugumo_frontend/assets/96280450/0621da6f-0fe7-4ba3-9706-80cf423fb1d1) |

<br />

## 아키텍쳐

```
gugumo_frontend
├─ .eslintrc.json
├─ .storybook
│  ├─ main.ts
│  └─ preview.tsx
├─ .swc
│  └─ plugins
│     └─ v7_windows_x86_64_0.106.15
├─ jest.config.js
├─ jest.setup.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ asset
│  │  ├─ balltype
│  │  │  ├─ ball01.png
│  │  │  ├─ ball02.png
│  │  │  ├─ ball03.png
│  │  │  ├─ ball04.png
│  │  │  ├─ ball05.png
│  │  │  └─ ball06.png
│  │  ├─ icon
│  │  │  ├─ bell.svg
│  │  │  ├─ bookmark.svg
│  │  │  ├─ calender.svg
│  │  │  ├─ close.svg
│  │  │  ├─ down.svg
│  │  │  ├─ edit.svg
│  │  │  ├─ link.svg
│  │  │  ├─ next.svg
│  │  │  ├─ prev.svg
│  │  │  ├─ prev_arrow.svg
│  │  │  ├─ search.svg
│  │  │  ├─ user.svg
│  │  │  ├─ view.svg
│  │  │  └─ write.svg
│  │  ├─ image
│  │  │  ├─ banner.jpg
│  │  │  ├─ desktop_banner.png
│  │  │  ├─ icon.png
│  │  │  ├─ mob_popup.png
│  │  │  ├─ notfound.png
│  │  │  └─ popup.png
│  │  ├─ logo.svg
│  │  └─ simbol.svg
│  └─ mockServiceWorker.js
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (auth)
│  │  │  ├─ bookmark
│  │  │  │  ├─ bookmark.style.ts
│  │  │  │  ├─ loading.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ mypage
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ style.ts
│  │  │  └─ post
│  │  │     ├─ edit
│  │  │     │  └─ [postid]
│  │  │     │     └─ page.tsx
│  │  │     ├─ list
│  │  │     │  └─ page.tsx
│  │  │     ├─ style.ts
│  │  │     └─ write
│  │  │        └─ page.tsx
│  │  ├─ (route)
│  │  │  ├─ detail
│  │  │  │  └─ [postid]
│  │  │  │     ├─ detail.style.ts
│  │  │  │     ├─ loading.tsx
│  │  │  │     └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ loading.tsx
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  │  ├─ member
│  │  │  │  ├─ login
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ mypage
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ new
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ nickname
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ password
│  │  │  │     └─ route.ts
│  │  │  └─ post
│  │  │     ├─ bookmark
│  │  │     │  └─ route.ts
│  │  │     ├─ detail
│  │  │     │  └─ [postid]
│  │  │     │     └─ route.ts
│  │  │     ├─ get
│  │  │     │  └─ route.ts
│  │  │     ├─ my
│  │  │     │  └─ route.ts
│  │  │     └─ write
│  │  │        └─ route.ts
│  │  ├─ components
│  │  │  ├─ auth
│  │  │  │  ├─ Modal
│  │  │  │  │  ├─ Login
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ style.ts
│  │  │  │  │  ├─ Modal.style.ts
│  │  │  │  │  └─ Sign
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     └─ style.ts
│  │  │  │  ├─ PrivateRoute
│  │  │  │  │  └─ PrivateRoute.tsx
│  │  │  │  └─ Sns
│  │  │  │     ├─ Sns.style.ts
│  │  │  │     └─ Sns.tsx
│  │  │  ├─ common
│  │  │  │  ├─ Button
│  │  │  │  │  ├─ Alert
│  │  │  │  │  │  ├─ Alert.stories.ts
│  │  │  │  │  │  ├─ Alert.style.ts
│  │  │  │  │  │  └─ Alert.tsx
│  │  │  │  │  ├─ AuthBtn
│  │  │  │  │  │  ├─ AuthBtn.stories.ts
│  │  │  │  │  │  ├─ AuthBtn.style.ts
│  │  │  │  │  │  └─ AuthBtn.tsx
│  │  │  │  │  ├─ BallTag
│  │  │  │  │  │  ├─ BallTag.style.ts
│  │  │  │  │  │  └─ BallTag.tsx
│  │  │  │  │  ├─ Bookmark
│  │  │  │  │  │  ├─ Bookmark.stories.ts
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ style.ts
│  │  │  │  │  ├─ OpenTalk
│  │  │  │  │  │  ├─ OpenTalk.stories.ts
│  │  │  │  │  │  ├─ OpenTalk.style.ts
│  │  │  │  │  │  └─ OpenTalk.tsx
│  │  │  │  │  ├─ Prev
│  │  │  │  │  │  ├─ Prev.style.ts
│  │  │  │  │  │  └─ Prev.tsx
│  │  │  │  │  ├─ Primary
│  │  │  │  │  │  ├─ Primary.stories.ts
│  │  │  │  │  │  ├─ Primary.style.ts
│  │  │  │  │  │  └─ Primary.tsx
│  │  │  │  │  ├─ Tag
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ style.ts
│  │  │  │  │  │  └─ Tag.stories.ts
│  │  │  │  │  └─ WhiteBtn
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     ├─ style.ts
│  │  │  │  │     └─ WhiteBtn.stories.ts
│  │  │  │  ├─ Card
│  │  │  │  │  ├─ Layout
│  │  │  │  │  │  ├─ Card.stories.ts
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ style.ts
│  │  │  │  │  └─ Tag
│  │  │  │  │     ├─ Tag.stories.ts
│  │  │  │  │     ├─ Tag.style.ts
│  │  │  │  │     └─ Tag.tsx
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.stories.tsx
│  │  │  │  │  ├─ Footer.style.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Header
│  │  │  │  │  ├─ Header.stories.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ style.ts
│  │  │  │  ├─ Input
│  │  │  │  │  ├─ Input.stories.ts
│  │  │  │  │  ├─ Input.tsx
│  │  │  │  │  └─ style.ts
│  │  │  │  └─ Select
│  │  │  │     ├─ Select.tsx
│  │  │  │     └─ style.ts
│  │  │  ├─ detail
│  │  │  │  └─ PrevBtn
│  │  │  │     ├─ PrevBtn.style.ts
│  │  │  │     └─ PrevBtn.tsx
│  │  │  ├─ main
│  │  │  │  ├─ Paging
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ style.ts
│  │  │  │  └─ style.ts
│  │  │  ├─ mypage
│  │  │  │  ├─ Form
│  │  │  │  │  ├─ NickName
│  │  │  │  │  │  └─ Nickname.tsx
│  │  │  │  │  ├─ Password
│  │  │  │  │  │  └─ Password.tsx
│  │  │  │  │  └─ style.ts
│  │  │  │  └─ UserInfo
│  │  │  │     ├─ style.ts
│  │  │  │     └─ UserInfo.tsx
│  │  │  ├─ notfound
│  │  │  │  └─ style.ts
│  │  │  ├─ popup
│  │  │  │  ├─ popup.style.ts
│  │  │  │  └─ popup.tsx
│  │  │  └─ post
│  │  │     └─ NoSsrEditor.tsx
│  │  ├─ constant
│  │  │  ├─ meeting.ts
│  │  │  ├─ meetingQuery.ts
│  │  │  └─ sort.ts
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  └─ PretendardVariable.woff2
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  └─ types
│  │     ├─ detail.ts
│  │     ├─ meeting.ts
│  │     └─ mypage.ts
│  ├─ lib
│  │  ├─ ModalProvider.tsx
│  │  ├─ QueryProvider.tsx
│  │  ├─ registry.tsx
│  │  └─ ThemeClient.tsx
│  ├─ mocks
│  │  ├─ browser.ts
│  │  ├─ dummy.json
│  │  ├─ handlers.ts
│  │  ├─ index.ts
│  │  ├─ MSWComponent.tsx
│  │  └─ server.ts
│  ├─ store
│  │  ├─ features
│  │  │  ├─ auth
│  │  │  │  └─ user.ts
│  │  │  └─ modal
│  │  │     └─ modal.ts
│  │  ├─ hook.ts
│  │  ├─ Providers.tsx
│  │  └─ store.ts
│  ├─ stories
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ button.css
│  │  ├─ Button.stories.ts
│  │  ├─ Button.tsx
│  │  ├─ Colors.mdx
│  │  ├─ Configure.mdx
│  │  ├─ header.css
│  │  ├─ Header.stories.ts
│  │  ├─ Header.tsx
│  │  ├─ Iconography.mdx
│  │  ├─ page.css
│  │  ├─ Page.stories.ts
│  │  ├─ Page.tsx
│  │  └─ Typography.mdx
│  ├─ styles
│  │  ├─ global.ts
│  │  ├─ styled-components.d.ts
│  │  └─ theme.ts
│  └─ __tests__
│     ├─ Login.spec.tsx
│     └─ Sign.spec.tsx
└─ tsconfig.json
```

<br />

## 웹개발팀

<table>
  <tr>
    <th style="width: 200px; text-align : center;">김지유</th>
    <th style="width: 200px; text-align : center;">박희성</th>
    <th style="width: 200px; text-align : center;">김창호</th>
  </tr>
  <tr style="border-bottom: 1px solid white;">
    <td>
        <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/d6716133-cc01-451c-af07-0da997725785">
    </td>
    <td style="border-left: 1px solid white;">
        <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/6c18d80c-5aed-48ec-90ad-f847437e83a0">
    </td>
    <td style="border-left: 1px solid white;">
        <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/412dbdcb-8dad-4bc9-8ae4-bc28fba73f6c">
    </td>
  </tr>
  <tr style="border-bottom: 1px solid white; text-align : center;">
    <td>FE</td>
    <td style="border-left: 1px solid white;">BE</td>
    <td style="border-left: 1px solid white;">BE</td>
  </tr>
</table>

<br />

## 디자인팀

<table>
  <tr>
    <th style="width: 200px; text-align: center">정하은</th>
  </tr>
  <tr style="border-bottom: 1px solid white;">
    <td>
        <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/757d814c-6dd6-4546-b950-3d9505b4e1b7">
    </td>
  </tr>
  <tr style="border-bottom: 1px solid white; text-align : center;">
    <td>
        디자이너
    </td>
  </tr>
</table>
