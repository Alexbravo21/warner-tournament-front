import { useState } from 'preact/hooks';
import { JSX } from 'preact';
import emailjs from '@emailjs/browser';

// @ts-ignore
import { USER_ID, FIELD_LABEL, COUNTRIES, GAMING_CONSOLE } from '../utils/constants'
import TournamentInput from './tournament-input';
import TournamentSelector from './tournament-selector';
import TournamentCheckbox from './tournament-checkbox';
import TournamentButton from './tournament-button';
import { useGetUserId, useMediaQuery } from '../utils/hooks';
import { ThemeType, TemplateParamsType } from '../utils/types';
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
            name: name,
            country: country,
            phone: phone,
            mail: mail,
            gamingConsole: gamingConsole,
            gamingId: gamingId,
            age: age,
            newsletter: checkedNewsletter ? 'Si' : 'No',
        }
        const isFormFilled = !Object.values(templateParams).some((val) => val === '' || val === undefined || val === null );
        if(isFormFilled && checkedLegalAge && checkedPrivacy && checkedTerms && checkedNewsletter && age && parseInt(age) >= 18) {
            setButtonLoading(true);
            sendMail(templateParams);
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
                        <TournamentInput label={FIELD_LABEL.NOMBRE_DEL_JUGADOR} theme={theme} inputValue={name} setInputValue={setName} hasMissingFields={isMissingName} />
                        <TournamentSelector label={FIELD_LABEL.PAIS} options={Object.values(COUNTRIES)} theme={theme} setSelectorState={setCountry} hasMissingFields={isMissingCountry} />
                        <TournamentInput label={FIELD_LABEL.NUMERO_DE_TELEFONO} theme={theme} country={country} inputValue={phone} setInputValue={setPhone} hasMissingFields={isMissingPhone} />
                        <TournamentInput label={FIELD_LABEL.CORREO_ELECTRONICO} theme={theme} inputValue={mail} setInputValue={setMail} hasMissingFields={isMissingMail} />
                        <TournamentSelector label={FIELD_LABEL.CONSOLA_EN_LA_QUE_JUEGA} options={Object.values(GAMING_CONSOLE)} theme={theme} setSelectorState={setGamingConsole} hasMissingFields={isMissingGamingConsole} />
                        <TournamentInput label={useGetUserId(gamingConsole)} theme={theme} inputValue={gamingId} setInputValue={setGamingId} hasMissingFields={isMissingGamingId} />
                        <TournamentInput label={FIELD_LABEL.EDAD} width={40} theme={theme} inputValue={age} setInputValue={setAge} hasMissingFields={isMissingAge} />
                        <div style={{marginTop: '5px'}}>
                            <TournamentCheckbox labelText='Acepto que he leido el' labelLink='aviso de privacidad.' url='https://policies.warnerbros.com/terms/es-latam/html/terms_es-latam_1.0.0.html' theme={theme} isChecked={checkedPrivacy} setIsChecked={setCheckedPrivacy} hasMissingFields={isMissinghCheckedPrivacy} />
                            <TournamentCheckbox labelText='Acepto' labelLink='términos y condiciones.' url='/T&C_MK11v1307.pdf' theme={theme} isChecked={checkedTerms} setIsChecked={setCheckedTerms} hasMissingFields={isMissingCheckedTerms} />
                            <TournamentCheckbox labelText='Suscribirme a la Newsletter de Warner Play' theme={theme} isChecked={checkedNewsletter} setIsChecked={setCheckedNewsletter} hasMissingFields={isMissingCheckedNewsletter} />
                            <TournamentCheckbox labelText='Confirmo que soy mayor de edad' theme={theme} isChecked={checkedLegalAge} setIsChecked={setCheckedLegalAge} hasMissingFields={isMissingCheckedLegalAge} />
                            <p style={{fontSize: '11px', padding: '0 14px', margin: '5px  0'}}>*Todos los campos son obligatorios</p>
                        </div>
                    </div>
                    <TournamentButton cta='Enviar' theme={theme} onClick={handleSubmit} buttonLoading={buttonLoading} />
                </>
            ) : (
                <ThanksMsg theme={theme} isMobile={isMobile} />
            )}
            
        </div>
    )
} 

export default TournamentForm;