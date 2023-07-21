import TournamentForm from './tournament-form';
import { THEME } from '../utils/constants'
import { ThemeType } from '../utils/types';
const TournamentContainer = ({theme}: {theme: ThemeType}) => {
    return(
        <>
            <TournamentForm theme={theme} />
            <div style={{width: THEME.formWidth, margin: '50px auto', display: 'flex', justifyContent: 'space-between'}}>
                <img src="/mk_logo.png" alt="Mortal Kombat 11 Ultimate" />
                <img src="/eleague_logo.png" alt="E League Latino" />
            </div>
        </>
    )
}
export default TournamentContainer;