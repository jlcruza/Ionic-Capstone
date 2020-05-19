export const environment = {
  production: false,
  // apiServerUrl: 'http://127.0.0.1:8080', // the running FLASK api server url
  apiServerUrl: 'https://jorge-casting-agency.herokuapp.com',
  auth0: {
    url: 'casting-agency-capstone', // the auth0 domain prefix
    audience: 'executive', // the audience set for the auth0 app
    clientId: 'o8j0f3DEN9v3URxAXn1o65vJorxZNLJ1', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
