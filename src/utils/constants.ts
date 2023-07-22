export const USER_ID = {
    GAMERTAG: 'Gamertag',
    PSN_ID: 'PSN ID',
    USER_ID: 'User ID',
    GAMER_ID: 'Gamer ID',
}

export const COUNTRIES = {
    ARGENTINA: 'Argentina',
    COLOMBIA: 'Colombia',
    //MEXICO: 'México',
}

export const COUNTRY_CODES: {[key: string]: string} = {
    Argentina: '+54',
    Colombia: '+57',
    //México: '+52',
}

export const THEME = {
    formWidth: 350,
    mortal_kombat: {
        border_color: '#9b936f',
        button_color: '#330103',
        button_border: '#a47b3d',
        text_color: '#faf7cc',
        text_color_bold: '#ddbd58',
        input_color: '#3d3f49',
        input_mandatory: '#f8ac15',
        white: '#ffffff',
        background_color: 'rgba(0, 0, 0, 0.4)',
    }
}

export const BACKGROUND = {
    mortal_kombat: 'mortal_kombat',
}

export const FIELD_LABEL = {
    NOMBRE_DEL_JUGADOR : 'Nombre completo',
    PAIS : 'País',
    NUMERO_DE_TELEFONO : 'Número de teléfono',
    CORREO_ELECTRONICO : 'Correo electrónico',
    CONSOLA_EN_LA_QUE_JUEGA : 'Consola en la que juega',
    GAMERTAG : 'Gamertag',
    PSN_ID : 'PSN ID',
    EDAD : 'Edad (+18)',
}

export const FIELD_DATA = {
    gamingConsole: {value: '', label: 'gamingConsole'},
    country: {value: '', label: 'country'},
    name: {value: '', label: 'name'},
    phone: {value: '', label: 'phone'},
    mail: {value: '', label: 'mail'},
    gamingId: {value: '', label: 'gamingId'},
    age: {value: '', label: 'age'},
    checkedPrivacy: {value: false, label: 'checkedPrivacy'},
    checkedTerms: {value: false, label: 'checkedTerms'},
    checkedLegalAge: {value: false, label: 'checkedLegalAge'},
    checkedNewsletter: {value: false, label: 'checkedNewsletter'},
}

export const MISSING_DATA = {
    gamingConsole: {value: false, label: 'gamingConsole'},
    country: {value: false, label: 'country'},
    name: {value: false, label: 'name'},
    phone: {value: false, label: 'phone'},
    mail: {value: false, label: 'mail'},
    gamingId: {value: false, label: 'gamingId'},
    age: {value: false, label: 'age'},
    checkedPrivacy: {value: false, label: 'checkedPrivacy'},
    checkedTerms: {value: false, label: 'checkedTerms'},
    checkedLegalAge: {value: false, label: 'checkedLegalAge'},
    checkedNewsletter: {value: false, label: 'checkedNewsletter'},
}

export const GAMING_CONSOLE = {
    XBOX_ONE: 'Xbox',
    XBOX_SERIES: 'Xbox Series X/S',
    PS4: 'PlayStation 4',
    PS5: 'PlayStation 5',
    PC: 'PC',
}