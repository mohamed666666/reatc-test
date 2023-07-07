import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Suspense } from 'react';
import { useTranslation} from 'react-i18next';

 function Navbar() {

    const { t, i18n } = useTranslation(); 
    const locales = {
      en: { title: 'English' },
      ar:{title:"Arabic"}
      };
      const [messages, setMessages] = useState(0);
  
  
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{t('main.header')}</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
          {Object.keys(locales).map((locale) => (
          <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
            {locales[locale].title}
          </button></li>
        ))}
        
        </div>
      </div>
    </nav>
    );

}

export default Navbar;
