import { useState } from 'preact/hooks';
import { JSX } from 'preact';
import emailjs from '@emailjs/browser';
import {
    FIELD_LABEL, 
    COUNTRIES, 
    GAMING_CONSOLE, 
    FIELD_DATA, 
    MISSING_DATA 
} from '../utils/constants'
import TournamentInput from './tournament-input';
import TournamentSelector from './tournament-selector';
import TournamentCheckbox from './tournament-checkbox';
import TournamentButton from './tournament-button';
import { useGetUserId, useMediaQuery } from '../utils/hooks';
import { ThemeType, TemplateParamsType, fielDataType, MissingDataType } from '../utils/types';
import InfoMsg from './info-msg';

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
const showEndRegisty: boolean = true;

'esports@juegoslevelup.com'



const TournamentForm = ({ theme } : {theme: ThemeType}) => {
    const [fieldData, setFieldData] = useState<fielDataType>(FIELD_DATA);
    const [isMissingData, setIsMissingData] = useState<MissingDataType>(MISSING_DATA);
    const [showThanks, setShowThanks] = useState<boolean>(false);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const {
        name,
        country,
        phone,
        mail,
        gamingConsole,
        gamingId,
        age,
        checkedPrivacy,
        checkedTerms,
        checkedNewsletter,
        checkedLegalAge,
    } = fieldData;

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
            name: name.value,
            country: country.value,
            phone: phone.value,
            mail: mail.value,
            gamingConsole: gamingConsole.value,
            gamingId: gamingId.value,
            age: age.value,
            newsletter: checkedNewsletter.value ? 'Si' : 'No',
        }
        const isFormFilled = !Object.values(templateParams).some((val) => !val && val !== '0' );
        if(
            isFormFilled 
            && checkedLegalAge.value 
            && checkedPrivacy.value 
            && checkedTerms.value 
            && checkedNewsletter.value 
            && age.value 
            && parseInt(age.value) >= 18
        ) {
            setButtonLoading(true);
            sendMail(templateParams);
        }else{
            Object.keys(fieldData).forEach((key: string) => {
                if(
                    !fieldData[key as keyof fielDataType].value  && 
                    fieldData[key as keyof fielDataType].value !== '0'
                ){
                    //TODO: Refactor this as it works because it runs on every key iteration and it changes the age.value in any of these iterations
                    if((parseInt(fieldData.age.value) < 18)) {
                        setIsMissingData((currValue) => ({
                            ...currValue,
                            ...{age: {value: true, label: 'age'}}
                        }))
                    }
                    setIsMissingData((currValue) => ({
                        ...currValue,
                        ...{[key as keyof MissingDataType]: {value: true, label: isMissingData[key as keyof MissingDataType].label}}
                    }))
                }else{
                    setIsMissingData((currValue) => ({
                        ...currValue,
                        ...{[key as keyof MissingDataType]: {value: false, label: isMissingData[key as keyof MissingDataType].label}}
                    }))
                }
            })
        }
    }
    

    const isMobile = useMediaQuery('(max-width: 390px)');
    return(
        <div style={{margin: '0 auto', width: `${theme.formWidth}px`, maxWidth: '90vw'}}>
            {showEndRegisty ? (
                <InfoMsg theme={theme} isMobile={isMobile}>
                    <img src="/warner_play_logo.jpg" alt="Warner Play" width='150px' />
                    <p style={{fontSize: '25px'}}>El periodo de registro ha finalizado</p>
                    <p style={{fontSize: '25px', color: theme.mortal_kombat.text_color_bold}}>¡Gracias por participar!</p>
                    <p style={{fontSize: '22px', padding: '0 30px', marginBottom: 0}}>Espera noticias nuestras muy pronto...</p>
                </InfoMsg>
            ) : (showThanks ? (
                <InfoMsg theme={theme} isMobile={isMobile}>
                    <p style={{fontSize: '25px', marginTop: 0}}>¡Gracias por Participar!</p>
                    <p style={{fontSize: '22px', padding: '0 30px'}}>Nos contactaremos en breve...</p>
                    <img src="/warner_play_logo.jpg" alt="Warner Play" width='150px' />
                </InfoMsg>
            ) : (<>
                <div style={tournamentFormStyle(theme, isMobile)}>
                    <TournamentInput 
                        labelName={FIELD_DATA.name.label} 
                        label={FIELD_LABEL.NOMBRE_DEL_JUGADOR} theme={theme} 
                        inputValue={fieldData} 
                        setInputValue={setFieldData} 
                        hasMissingFields={isMissingData.name.value} 
                    />
                    <TournamentSelector 
                        labelName={FIELD_DATA.country.label} 
                        label={FIELD_LABEL.PAIS} 
                        options={Object.values(COUNTRIES)} theme={theme} 
                        setSelectorState={setFieldData} 
                        hasMissingFields={isMissingData.country.value} 
                    />
                    <TournamentInput 
                        labelName={FIELD_DATA.phone.label} 
                        label={FIELD_LABEL.NUMERO_DE_TELEFONO} theme={theme} 
                        country={fieldData.country.value} inputValue={fieldData} 
                        setInputValue={setFieldData} 
                        hasMissingFields={isMissingData.phone.value} 
                    />
                    <TournamentInput 
                        labelName={FIELD_DATA.mail.label} 
                        label={FIELD_LABEL.CORREO_ELECTRONICO} theme={theme} 
                        inputValue={fieldData} 
                        setInputValue={setFieldData} 
                        hasMissingFields={isMissingData.mail.value} 
                    />
                    <TournamentSelector 
                        labelName={FIELD_DATA.gamingConsole.label} 
                        label={FIELD_LABEL.CONSOLA_EN_LA_QUE_JUEGA} 
                        options={Object.values(GAMING_CONSOLE)} theme={theme} 
                        setSelectorState={setFieldData} 
                        hasMissingFields={isMissingData.gamingConsole.value} 
                    />
                    <TournamentInput 
                        labelName={FIELD_DATA.gamingId.label} 
                        label={useGetUserId(fieldData.gamingConsole.value)} theme={theme} 
                        inputValue={fieldData} 
                        setInputValue={setFieldData} 
                        hasMissingFields={isMissingData.gamingId.value} 
                    />
                    <TournamentInput 
                        labelName={FIELD_DATA.age.label} 
                        label={FIELD_LABEL.EDAD} width={40} theme={theme} 
                        inputValue={fieldData} 
                        setInputValue={setFieldData} 
                        hasMissingFields={isMissingData.age.value} 
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
                            hasMissingFields={isMissingData.checkedPrivacy.value} 
                        />
                        <TournamentCheckbox 
                            labelName={FIELD_DATA.checkedTerms.label} 
                            labelText='Acepto' 
                            labelLink='términos y condiciones.' 
                            url='/T&C_MK11v1307.pdf' 
                            theme={theme} 
                            isChecked={fieldData.checkedTerms.value} 
                            setIsChecked={setFieldData} 
                            hasMissingFields={isMissingData.checkedTerms.value} 
                        />
                        <TournamentCheckbox 
                            labelName={FIELD_DATA.checkedNewsletter.label} 
                            labelText='Suscribirme a la Newsletter de Warner Play' 
                            theme={theme} 
                            isChecked={fieldData.checkedNewsletter.value} 
                            setIsChecked={setFieldData} 
                            hasMissingFields={isMissingData.checkedNewsletter.value} 
                        />
                        <TournamentCheckbox 
                            labelName={FIELD_DATA.checkedLegalAge.label} 
                            labelText='Confirmo que soy mayor de edad' 
                            theme={theme} 
                            isChecked={fieldData.checkedLegalAge.value} 
                            setIsChecked={setFieldData} 
                            hasMissingFields={isMissingData.checkedLegalAge.value} 
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
            ))}
            
        </div>
    )
} 

export default TournamentForm;