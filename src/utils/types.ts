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
    email: string | null,
    gamingConsole: string | null,
    gamerId: string | null,
    age: string | null,
    newsLetter: boolean,
}

export type fielDataType = {
    gamingConsole: {value: string, label: string},
    country: {value: string, label: string},
    name: {value: string, label: string},
    phone: {value: string, label: string},
    mail: {value: string, label: string},
    gamingId: {value: string, label: string},
    age: {value: string, label: string},
    checkedPrivacy: {value: boolean, label: string},
    checkedTerms: {value: boolean, label: string},
    checkedLegalAge: {value: boolean, label: string},
    checkedNewsletter: {value: boolean, label: string},
}

export type MissingDataType = {
    gamingConsole: {value: boolean, label: string},
    country: {value: boolean, label: string},
    name: {value: boolean, label: string},
    phone: {value: boolean, label: string},
    mail: {value: boolean, label: string},
    gamingId: {value: boolean, label: string},
    age: {value: boolean, label: string},
    checkedPrivacy: {value: boolean, label: string},
    checkedTerms: {value: boolean, label: string},
    checkedLegalAge: {value: boolean, label: string},
    checkedNewsletter: {value: boolean, label: string},
}