const color = {
    Primary : "#4FAAFF",
    OnPrimary : "#FFFFFF",
    Surface : "#F4F5F8",
    OnSurface : "#878787",
    OnBackgroundGray : "#A5A5A5",
    Background : "#FFFFFF",
    OnBackground : "#000000",
    Error : "#FF4444",
    OnError : "#FFFFFF",
    Outline : "#D9D9D9",
    SubColor1 : "#BFE0FF",
    SubColor2 : "#D2FFAE",
    SubColor3 : "#FDC9AF"
}

const fontSize = {
    titleMediumB : "24px",
    titleSemibold : "24px",
    titleMedium : "24px",
    buttonSemibold : "18px",
    buttonMedium : "18px",
    bodyMedium : "16px",
    captionMedium : "13px",
    captionRegular : "13px"
}

const fontWeight = {
    titleMediumB : "500",
    titleSemibold : "600",
    titleMedium : "500",
    buttonSemibold : "600",
    buttonMedium : "500",
    bodyMedium : "500",
    captionMedium : "500",
    captionRegular : "400"
}

export const theme = {
    color,
    fontSize,
    fontWeight
};

export type ThemeType = typeof theme;