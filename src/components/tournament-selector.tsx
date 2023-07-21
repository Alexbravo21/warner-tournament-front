import { JSX } from "preact";
import { ThemeType } from '../utils/types';


const SELECCIONAR = 'Seleccionar - - -';

const TournamentSelector = ({ label, options, theme, setSelectorState, hasMissingFields } : { label : string, options: string[], theme: ThemeType, setSelectorState: (arg0: string) => void, hasMissingFields: boolean }) => {
    const tournamentSelectorStyle = {
        borderRadius:'30px', 
        borderColor: theme.mortal_kombat.border_color,
        backgroundColor: hasMissingFields ? theme.mortal_kombat.input_mandatory : theme.mortal_kombat.input_color,
        borderWidth: '3px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'block',
        padding: '10px',
        outline: 'none',
        width: '100%',
        color: theme.mortal_kombat.white,
    };
    return(
        <div style={{margin: '0 auto', padding: '3px 10px'}}>
            <label htmlFor="" style={{paddingLeft:'15px'}}>{label}</label>
            <select style={tournamentSelectorStyle} onChange={ (e: JSX.TargetedEvent<HTMLSelectElement>) => e.target && setSelectorState(e.currentTarget.value)}>
                <option value="">{SELECCIONAR}</option>
                {options.map((option, i) => <option key={i+option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default TournamentSelector;