import { ThemeType, fielDataType } from '../utils/types';
import { COUNTRY_CODES } from '../utils/constants';


const TournamentInput = ({ 
    label, 
    width = 100, 
    theme, 
    country, 
    inputValue, 
    setInputValue, 
    hasMissingFields,
    labelName,
}:{ 
    label : string, 
    width?: number, 
    theme: ThemeType, 
    country?: string | null, 
    inputValue: fielDataType, 
    setInputValue: (arg0: (currData: fielDataType) => fielDataType) => void, 
    hasMissingFields: boolean,
    labelName: string,
}) => {
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
                // @ts-ignore TODO values in fieldDataType can be boolean because of the checkboxes, refactor this to only get string | number (Maybe moving checkbox values to other type)
                value={country && inputValue[labelName as keyof fielDataType].value === '' ? COUNTRY_CODES[country] : inputValue[labelName as keyof fielDataType].value} 
                type="text" style={{...tournamentInputStyle, width: `${width}%`}}
                onInput={(e) => setInputValue( (currData: fielDataType) => ({
                    ...currData, 
                    ...{
                        [labelName]:{
                            value: e.currentTarget.value,
                            label: labelName,
                        }
                    }
                }))}
            />
        </div>
    )
}

export default TournamentInput;