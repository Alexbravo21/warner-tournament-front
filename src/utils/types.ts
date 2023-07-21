export type ThemeType = {
    formWidth: number,
    mortal_kombat: {
        border_color: string,
        button_color: string,
        button_border: string,
        text_color: string,
        text_color_bold: string,
        input_color: string,
        input_mandatory: string,
        white: string,
        background_color: string,
    }
}

export type TemplateParamsType = {
    name: string | null,
    country: string | null,
    phone: string | null,
    mail: string | null,
    gamingConsole: string | null,
    gamingId: string | null,
    age: string | null,
    newsletter: string | null,
}