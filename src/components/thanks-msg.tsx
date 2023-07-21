import { ThemeType } from '../utils/types';
const ThanksMsg = ({theme, isMobile}: {theme:ThemeType, isMobile: boolean}) => {
    const ThanksMsgStyle = {
        borderColor: theme.mortal_kombat.border_color,
        borderStyle: 'solid',
        textAlign: 'center',
        width: theme.formWidth,
        maxWidth: '90vw',
        backgroundColor: theme.mortal_kombat.background_color,
        padding: '10px 30px',
        boxSizing: 'border-box',
        marginTop: isMobile ? '5vh' : '8vh',
    }
    return (
        <div style={ThanksMsgStyle}>
            <p style={{fontSize: '25px'}}>¡Gracias por Participar!</p>
            <p style={{fontSize: '22px', padding: '0 30px'}}>Nos contactaremos en breve...</p>
            <img src="/warner_play_logo.jpg" alt="Warner Play" width='150px' />
        </div>
    )
}
export default ThanksMsg;