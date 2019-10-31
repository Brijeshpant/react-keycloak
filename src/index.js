import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Keycloak from "keycloak-js";

ReactDOM.render(<App />, document.getElementById('root'));

let keycloakConfig = {
    "realm": "demo",
    "url": "http://localhost:8081/auth",
    "ssl-required": "external",
    "resource": "login-app",
    "public-client": true,
    "confidential-port": 0,
    clientId: 'login-app', 
    onLoad: 'login-required'
  }

let keycloak = Keycloak(keycloakConfig);

keycloak.init({ onLoad: keycloakConfig.onLoad }).success((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    ReactDOM.render(<App />, document.getElementById('root'));

    localStorage.setItem("react-token", keycloak.token);
    localStorage.setItem("react-refresh-token", keycloak.refreshToken);

    setTimeout(() => {
        keycloak.updateToken(30).success((updated) => {
            console.log('token updated' + updated);
        }).error(() => {
            console.error('failed');
        });


    }, 60000)

}).error(() => {
    console.error("unsuccesful");
});