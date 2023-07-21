import { ThemeType } from '../utils/types';
const NoticePrivacy = ({theme}: {theme: ThemeType}) => {
    const ThanksMsgStyle = {
        borderColor: theme.mortal_kombat.border_color,
        borderStyle: 'solid',
        width: '90vw',
        maxHeight: '80vh',
        backgroundColor: theme.mortal_kombat.background_color,
        padding: '10px 30px',
        boxSizing: 'border-box',
        marginTop: '8vh',
        overflow: 'auto',
        color: theme.mortal_kombat.white,
    }
    return (
        <div style={ThanksMsgStyle}>
            <p style={{fontSize: '18px'}}>
                SECRETARÍA DE GOBERNACIÓN!!!!<br />
                DIRECCIÓN GENERAL DE RADIO, TELEVISIÓN Y CINEMATOGRAFÍA<br />
                DIRECCIÓN DE CONTENIDOS Y DISTRIBUCIÓN DE SEÑALES DE RADIO Y TELEVISIÓN<br />
            </p>
            <p style={{fontSize: '18px'}}>
                Ref.:     Solicitud de autorización del concurso <br />
                “MK11 TORNEO MEGACABLE 2022 MÉXICO”.<br />
            </p>
            <p style={{fontSize: '14px'}}>
                En nombre y representación de WARNER HOME VIDEO MÉXICO, S.A. DE C.V. (“Warner”), personalidad que acredito mediante copia simple de la Escritura Pública de la Ciudad de México, señalando como domicilio para oír y recibir todo tipo de documentos y notificaciones el ubicado en Bosque de Duraznos No. 61, Oficina 5E, Bosques de las Lomas, C.P. 11700, Ciudad de México, con número telefónico 5552591156, y autorizando para los mismos efectos a los señores Paul Kavanagh Gómez, Patricio Gorozpe Huerdo, Luis Ignacio Martel Gómez de León, Enrique Dusan Bojanic Vidal, Federico Gallego García, Federico Manuel Villela Lascurain, Alejandra Rivera Fuertes, Rodrigo Adrián Rodríguez Pérez, Mauricio Álvarez Tostado Alba, Alejandro Gorozpe Ruiz, Nerea González Santiesteban, Juan Carlos González Ramos, Andrea Varas Lefort, Paulina Cabrera Mendiola, Álvaro Arroyo Raab, Juan Pablo Sánchez Mejorada Hernández, Lizbed Marisol Camarillo García y Hugo Antonio Castillo Domínguez, indistintamente, ante usted, comparezco y expongo:
            </p>
            <p style={{fontSize: '14px'}}>
                Que por medio del presente escrito vengo a informar a esa H. Dirección General la intención que tiene Warner de llevar a cabo el concurso denominado “MK11 TORNEO MEGACABLE 2022 MÉXICO” (el “Concurso”).
            </p>
            <p style={{fontSize: '14px'}}>
                1. Requisitos de Admisión: 
            </p>
            <p style={{fontSize: '14px'}}>
                Los participantes del Concurso serán preseleccionados por Warner a través del siguiente procedimiento: (i) Personas físicas, con residencia en la República Mexicana, mayores de 17 años de edad (indistintamente, “Jugador”, “Participante” y/o “Competidor”); (ii) Cada jugador debe tener acceso al videojuego “Mortal Kombat 11” (“Videojuego”) para uso en la consola Play Station 4 (“PS4”), o bien, Xbox One; (iii) contar con un control compatible con la consula mencionada; (iv) tener una cuenta de suscripción válida en PlayStation, Plus/XboxLive, según corresponda, además de un ID de PSN asociada/Gamertag; (v) contar con una conexión a internet que permita navegar, cuando menos a 5 MB de ancho de banda; y (vi) residir habitualmente en la Ciudad de México
            </p>
            <p style={{fontSize: '14px'}}>
                Una vez preseleccionados los Participantes bajo el criterio mencionado, participarán en el Concurso un máximo de 256 Jugadores.
            </p>
        </div>
    )
}
export default NoticePrivacy;