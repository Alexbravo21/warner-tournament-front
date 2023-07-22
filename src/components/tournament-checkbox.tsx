import { ThemeType, fielDataType } from '../utils/types';


const TournamentCheckbox = ({ 
    labelText, 
    labelLink, 
    url, 
    theme, 
    isChecked, 
    setIsChecked, 
    hasMissingFields,
    labelName,
}:{ 
    labelText : string, 
    labelLink?: string, 
    url?: string, 
    theme: ThemeType, 
    isChecked: boolean, 
    setIsChecked: (arg0: (currData: fielDataType) => fielDataType) => void,
    hasMissingFields: boolean,
    labelName: string,
}) => {
    const TournamentCheckboxStyle = {
        borderColor: hasMissingFields ? theme.mortal_kombat.input_mandatory : theme.mortal_kombat.border_color,
        borderWidth: '3px',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        padding: '10px',
        outline: 'none'
    };
    return(
        <div style={{margin: '0 auto', padding: '3px 10px', display: 'flex', alignItems: 'flex-end'}}>
            <input type="checkbox" style={TournamentCheckboxStyle} name="legal" checked={isChecked} onClick={() => { setIsChecked((currData) => ({
                ...currData,
                ...{
                    [labelName]:{
                        value: !isChecked,
                        label: labelName,
                    }
                }
            })) } } />
            <label htmlFor="legal" style={{fontSize: '11px', color: hasMissingFields ? theme.mortal_kombat.input_mandatory : theme.mortal_kombat.white}}>
                {labelText} {labelLink && (<a href={url} target='_blank' style={{color: theme.mortal_kombat.text_color_bold, fontStyle:'none'}}>{labelLink}</a>)}
            </label>
        </div>
    )
}

export default TournamentCheckbox;