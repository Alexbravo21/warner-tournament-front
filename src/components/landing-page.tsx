import { useState } from 'preact/hooks';
import { THEME, BACKGROUND } from '../utils/constants';
import TermsConditions from './tc';
import TournamentContainer from './tournament-container';
import NoticePrivacy from './notice-privacy';
import { Router } from 'preact-router';

const LandingPage = () => {
    // @ts-ignore TODO: remove this comment when theme changing funcionalitie is applied
    const [background, setBackground] = useState(`/${BACKGROUND.mortal_kombat}.jpg`);
    // @ts-ignore TODO: remove this comment when theme changing funcionalitie is applied
    const [theme, setTheme] = useState(THEME);

    const landingPageStyle = {
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
    }

    return(  
        <div style={landingPageStyle}>
            <Router>
                {/* @ts-ignore TODO */}
                <TournamentContainer theme={theme} path="/" />
                {/* @ts-ignore TODO */}
                <TermsConditions theme={theme} path="/terminos-condiciones" />
                {/* @ts-ignore TODO */}
                <NoticePrivacy theme={theme} path="/aviso-de-privacidad" />
            </Router>
        </div>
    )
}

export default LandingPage;