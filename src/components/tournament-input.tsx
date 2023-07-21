import { ThemeType } from '../utils/types';
import { COUNTRY_CODES } from '../utils/constants';


const TournamentInput = ({ label, width = 100, theme, country, inputValue, setInputValue, hasMissingFields }:{ label : string, width?: number, theme: ThemeType, country?: string | null, inputValue: string | null, setInputValue: (arg0: string) => void, hasMissingFields: boolean }) => {
    const tournamentInputStyle = {
        borderRadius:'30px',
        borderColor: theme.mortal_kombat.border_color,
        backgroundColor: hasMissingFields ? theme.mortal_kombat.input_mandatory : theme.mortal_kombat.input_color,
        borderWidth: '3px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'block',
        padding: '10px',
        outline: 'none',
        height: '40px',
    };
    return(
        <div style={{position: 'relative', margin: '3px auto', padding: '0 10px'}}>
            <label htmlFor="" style={{paddingLeft:'15px'}}>{label}</label>
            <input 
                // @ts-ignore TODO
                value={country && !inputValue ? COUNTRY_CODES[country] : inputValue} 
                type="text" style={{...tournamentInputStyle, width: `${width}%`}}
                onInput={(e) => setInputValue(e.currentTarget.value)}
            />
        </div>
    )
}

export default TournamentInput;