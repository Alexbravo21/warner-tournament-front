import { JSX } from 'preact';
import { ThemeType } from '../utils/types';

const TournamentButton = ({cta, theme, onClick, buttonLoading}:{cta: string, theme: ThemeType, onClick: (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => void, buttonLoading: boolean}) => {
    const TournamentButtonStyle = {
        backgroundColor: theme.mortal_kombat.button_color,
        borderColor: theme.mortal_kombat.button_border,
        borderStyle: 'solid',
        borderWidth: '3px',
        textTransform: 'uppercase',
        width: '90%',
        display: 'block',
        margin: '20px auto',
        height: '50px',
        position: 'relative',
        color: theme.mortal_kombat.white,
    }
    return <button disabled={buttonLoading} style={TournamentButtonStyle} onClick={onClick}>{buttonLoading ? (<div className='paytm-loader'></div>) : cta}</button>
}

export default TournamentButton;