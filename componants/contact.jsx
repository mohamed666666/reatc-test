import React from "react";

import { Component } from "react";

import { useTranslation} from 'react-i18next';


function Conatact (){
        const { t, i18n } = useTranslation(); 
        const locales = {
            en: { title: 'English' },
            ar:{title:"Arabic"}
            };
        return (<h1>{t('contact.content')}</h1>);
    
}
 
export default Conatact;