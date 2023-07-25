import { ThemeType } from '../utils/types';
import { ComponentChildren } from 'preact';
const InfoMsg = ({theme, isMobile, children}: {theme:ThemeType, isMobile: boolean, children: ComponentChildren}) => {
    const InfoMsgStyle = {
        borderColor: theme.mortal_kombat.border_color,
        borderStyle: 'solid',
        textAlign: 'center',
        width: theme.formWidth,
        maxWidth: '90vw',
        backgroundColor: theme.mortal_kombat.background_color,
        padding: '20px 30px',
        boxSizing: 'border-box',
        marginTop: isMobile ? '5vh' : '8vh',
    }
    return (
        <div style={InfoMsgStyle}>
            {children}
        </div>
    )
}
export default InfoMsg;