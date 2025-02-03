interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "MarkdownPrev",
    github: {
        title: "Cardelia",
        url: "https://github.com/subashkarki68/MarkdownPrev",
    },
    author: {
        name: "Ruchi Raj Karki",
        url: "https://github.com/subashkarki68",
    }
}