import { useState } from 'preact/hooks';
import { JSX } from 'preact';
import emailjs from '@emailjs/browser';

// @ts-ignore
import { USER_ID, FIELD_LABEL, COUNTRIES, GAMING_CONSOLE, FIELD_DATA } from '../utils/constants'
import TournamentInput from './tournament-input';
import TournamentSelector from './tournament-selector';
import TournamentCheckbox from './tournament-checkbox';
import TournamentButton from './tournament-button';
import { useGetUserId, useMediaQuery } from '../utils/hooks';
import { ThemeType, TemplateParamsType, fielDataType } from '../utils/types';
import ThanksMsg from './thanks-msg';

const tournamentFormStyle = (theme: ThemeType, isMobile: boolean) => ({
    width: '100%',
    maxWidth: '90vw',
    maxHeight: '95vh',
    margin: '0 auto',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: theme.mortal_kombat.border_color,
    backgroundColor: theme.mortal_kombat.background_color,
    padding: '10px',
    boxSizing: 'border-box',
    marginTop: isMobile ? '5vh' : '8vh',
    overflow: 'auto',
})

'esports@juegoslevelup.com'



const TournamentForm = ({ theme } : {theme: ThemeType}) => {

    //TODO: REFACTOR THIS MESS WITH A STATE OBJECT FOR INPUT VALUES AND INPUT MANDATORY VALIDATORS
    const [fieldData, setFieldData] = useState<fielDataType>(FIELD_DATA)

    const [gamingConsole, setGamingConsole] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [mail, setMail] = useState<string | null>(null);
    const [gamingId, setGamingId] = useState<string | null>(null);
    const [age, setAge] = useState<string | null>(null);
    const [checkedPrivacy, setCheckedPrivacy] = useState<boolean>(false);
    const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
    const [checkedLegalAge, setCheckedLegalAge] = useState<boolean>(false);
    const [checkedNewsletter, setCheckedNewsletter] = useState<boolean>(false);

    const [showThanks, setShowThanks] = useState<boolean>(false);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    const [isMissingGamingConsole, setIsMissingGamingConsole] = useState<boolean>(false);
    const [isMissingCountry, setIsMissingCountry] = useState<boolean>(false);
    const [isMissingName, setIsMissingName] = useState<boolean>(false);
    const [isMissingPhone, setIsMissingPhone] = useState<boolean>(false);
    const [isMissingMail, setIsMissingMail] = useState<boolean>(false);
    const [isMissingGamingId, setIsMissingGamingId] = useState<boolean>(false);
    const [isMissingAge, setIsMissingAge] = useState<boolean>(false);
    const [isMissinghCheckedPrivacy, setIsMissingCheckedPrivacy] = useState<boolean>(false);
    const [isMissingCheckedTerms, setIsMissingCheckedTerms] = useState<boolean>(false);
    const [isMissingCheckedLegalAge, setIsMissingCheckedLegalAge] = useState<boolean>(false);
    const [isMissingCheckedNewsletter, setIsMissingCheckedNewsletter] = useState<boolean>(false);

    


    const sendMail = (templateParams: TemplateParamsType) => {
        emailjs.send('service_dbwf38t', 'template_fgzy6po', templateParams, '4di1TLKuQ-VAf7TjU')
        .then((result) => {
            setShowThanks(true);
            setButtonLoading(false);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    const handleSubmit = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const templateParams: TemplateParamsType = {
            name: fieldData.name.value,
            country: fieldData.country.value,
            phone: fieldData.phone.value,
            mail: fieldData.mail.value,
            gamingConsole: fieldData.gamingConsole.value,
            gamingId: fieldData.gamingId.value,
            age: fieldData.age.value,
            newsletter: fieldData.checkedNewsletter.value ? 'Si' : 'No',
        }
        console.log(templateParams);
        const isFormFilled = !Object.values(templateParams).some((val) => !val && val !== '0' );
        console.log(isFormFilled);
        if(
            isFormFilled 
            && fieldData.checkedLegalAge.value 
            && fieldData.checkedPrivacy.value 
            && fieldData.checkedTerms.value 
            && fieldData.checkedNewsletter.value 
            && fieldData.age.value 
            && parseInt(fieldData.age.value) >= 18
        ) {
            setButtonLoading(true);
            //sendMail(templateParams);
        }else{
            if(name === '' || name === undefined || name === null) {setIsMissingName(true);}else{setIsMissingName(false);}
            if(country === '' || country === undefined || country === null) {setIsMissingCountry(true);}else{setIsMissingCountry(false);}
            if(phone === '' || phone === undefined || phone === null) {setIsMissingPhone(true);}else{setIsMissingPhone(false);}
            if(mail === '' || mail === undefined || mail === null) {setIsMissingMail(true);}else{setIsMissingMail(false);}
            if(gamingConsole === '' || gamingConsole === undefined || gamingConsole === null) {setIsMissingGamingConsole(true);}else{setIsMissingGamingConsole(false);}
            if(gamingId === '' || gamingId === undefined || gamingId === null) {setIsMissingGamingId(true);}else{setIsMissingGamingId(false);}
            if(age === '' || age === undefined || age === null || parseInt(age) < 18) {setIsMissingAge(true);}else{setIsMissingAge(false);}
            if(!checkedPrivacy) {setIsMissingCheckedPrivacy(true);}else{setIsMissingCheckedPrivacy(false);}
            if(!checkedTerms) {setIsMissingCheckedTerms(true);}else{setIsMissingCheckedTerms(false);}
            if(!checkedNewsletter) {setIsMissingCheckedNewsletter(true);}else{setIsMissingCheckedNewsletter(false);}
            if(!checkedLegalAge) {setIsMissingCheckedLegalAge(true);}else{setIsMissingCheckedLegalAge(false);}
        }
    }
    

    const isMobile = useMediaQuery('(max-width: 390px)');
    return(
        <div style={{margin: '0 auto', width: `${theme.formWidth}px`, maxWidth: '90vw'}}>
            {!showThanks ? (
                <>
                    <div style={tournamentFormStyle(theme, isMobile)}>
                        <TournamentInput 
                            labelName={FIELD_DATA.name.label} 
                            label={FIELD_LABEL.NOMBRE_DEL_JUGADOR} theme={theme} 
                            inputValue={fieldData} 
                            setInputValue={setFieldData} 
                            hasMissingFields={isMissingName} 
                        />
                        <TournamentSelector 
                            labelName={FIELD_DATA.country.label} 
                            label={FIELD_LABEL.PAIS} 
                            options={Object.values(COUNTRIES)} theme={theme} 
                            setSelectorState={setFieldData} 
                            hasMissingFields={isMissingCountry} 
                        />
                        <TournamentInput 
                            labelName={FIELD_DATA.phone.label} 
                            label={FIELD_LABEL.NUMERO_DE_TELEFONO} theme={theme} 
                            country={fieldData.country.value} inputValue={fieldData} 
                            setInputValue={setFieldData} 
                            hasMissingFields={isMissingPhone} 
                        />
                        <TournamentInput 
                            labelName={FIELD_DATA.mail.label} 
                            label={FIELD_LABEL.CORREO_ELECTRONICO} theme={theme} 
                            inputValue={fieldData} 
                            setInputValue={setFieldData} 
                            hasMissingFields={isMissingMail} 
                        />
                        <TournamentSelector 
                            labelName={FIELD_DATA.gamingConsole.label} 
                            label={FIELD_LABEL.CONSOLA_EN_LA_QUE_JUEGA} 
                            options={Object.values(GAMING_CONSOLE)} theme={theme} 
                            setSelectorState={setFieldData} 
                            hasMissingFields={isMissingGamingConsole} 
                        />
                        <TournamentInput 
                            labelName={FIELD_DATA.gamingId.label} 
                            label={useGetUserId(fieldData.gamingConsole.value)} theme={theme} 
                            inputValue={fieldData} 
                            setInputValue={setFieldData} 
                            hasMissingFields={isMissingGamingId} 
                        />
                        <TournamentInput 
                            labelName={FIELD_DATA.age.label} 
                            label={FIELD_LABEL.EDAD} width={40} theme={theme} 
                            inputValue={fieldData} 
                            setInputValue={setFieldData} 
                            hasMissingFields={isMissingAge} 
                        />
                        <div style={{marginTop: '5px'}}>
                            <TournamentCheckbox 
                                labelName={FIELD_DATA.checkedPrivacy.label} 
                                labelText='Acepto que he leido el' 
                                labelLink='aviso de privacidad.' 
                                url='https://policies.warnerbros.com/terms/es-latam/html/terms_es-latam_1.0.0.html' 
                                theme={theme} 
                                isChecked={fieldData.checkedPrivacy.value} 
                                setIsChecked={setFieldData} 
                                hasMissingFields={isMissinghCheckedPrivacy} 
                            />
                            <TournamentCheckbox 
                                labelName={FIELD_DATA.checkedTerms.label} 
                                labelText='Acepto' 
                                labelLink='términos y condiciones.' 
                                url='/T&C_MK11v1307.pdf' 
                                theme={theme} 
                                isChecked={fieldData.checkedTerms.value} 
                                setIsChecked={setFieldData} 
                                hasMissingFields={isMissingCheckedTerms} 
                            />
                            <TournamentCheckbox 
                                labelName={FIELD_DATA.checkedNewsletter.label} 
                                labelText='Suscribirme a la Newsletter de Warner Play' 
                                theme={theme} 
                                isChecked={fieldData.checkedNewsletter.value} 
                                setIsChecked={setFieldData} 
                                hasMissingFields={isMissingCheckedNewsletter} 
                            />
                            <TournamentCheckbox 
                                labelName={FIELD_DATA.checkedLegalAge.label} 
                                labelText='Confirmo que soy mayor de edad' 
                                theme={theme} 
                                isChecked={fieldData.checkedLegalAge.value} 
                                setIsChecked={setFieldData} 
                                hasMissingFields={isMissingCheckedLegalAge} 
                            />
                            <p style={{fontSize: '11px', padding: '0 14px', margin: '5px  0'}}>*Todos los campos son obligatorios</p>
                        </div>
                    </div>
                    <TournamentButton 
                        cta='Enviar' theme={theme} 
                        onClick={handleSubmit} 
                        buttonLoading={buttonLoading} 
                    />
                </>
            ) : (
                <ThanksMsg theme={theme} isMobile={isMobile} />
            )}
            
        </div>
    )
} 

export default TournamentForm;