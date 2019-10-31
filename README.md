This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Demo app to add key clock configuration to the react app

Get key cloak client configuration from your keycloak server



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


## Available Scripts

In the project directory, you can run:

### `yarn start`

