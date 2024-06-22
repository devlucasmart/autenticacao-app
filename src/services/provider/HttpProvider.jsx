import axios from "axios";
import ReactGA from "react-ga";

/* Constants */
const API = `http://localhost:8081/api/v1`;

/* Action Types */
const ACTIONS = {
    RECAPTCHA: "recaptcha",
    LOGIN: "login",
    PERSON: "person",
    PERSON_ID: "personIdPerson",
    PERSON_AUTHENTICATION_ID: "personAuthenticationIdPerson",
    PERSON_UPDATE_PASSWORD: "personUpdatePassword",
    PERSON_MANAGER_GUEST: "personManagerGuest",
    SELF_REGISTER: "selfRegister",
    TOKEN_EMAIL_PASSWORD_SEND: "tokenEmailPasswordEnviar",
    TOKEN_EMAIL_PASSWORD_FORGOT: "tokenEmailPasswordForgot",
    CONFIRM_PERSON: "confirmPerson",
    ROLE: "role",
    ROLE_ID: "roleIdRole",
    LOOKUP_ROLE: "lookUpRole"
};

/* Axios Instance */
const getAuthToken = () => {
    try {
        return localStorage.getItem("authorization");
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        return null;
    }
};

export const requestHttpProvider = axios.create({
    baseURL: API,
    timeout: 60000,
    headers: { authorization: getAuthToken() },
});

/* Request Path Function */
export const getRequestPath = (action, param = {}) => {
    let returnRoute;

    switch (action) {
        case ACTIONS.RECAPTCHA:
            returnRoute = `/recaptcha`;
            break;
        case ACTIONS.LOGIN:
            returnRoute = `/login`;
            break;
        case ACTIONS.PERSON:
            returnRoute = `/person`;
            break;
        case ACTIONS.PERSON_ID:
            returnRoute = `/person/${param.idPerson}`;
            break;
        case ACTIONS.PERSON_AUTHENTICATION_ID:
            returnRoute = `/person/login/${param.idPerson}`;
            break;
        case ACTIONS.PERSON_UPDATE_PASSWORD:
            returnRoute = `/person/updatePassword/${param.idPerson}`;
            break;
        case ACTIONS.PERSON_MANAGER_GUEST:
            returnRoute = `/person/${param.idPerson}/guest`;
            break;
        case ACTIONS.SELF_REGISTER:
            returnRoute = `/selfRegister`;
            break;
        case ACTIONS.TOKEN_EMAIL_PASSWORD_SEND:
            returnRoute = `/tokenEmail/senha/send/${param.username}`;
            break;
        case ACTIONS.TOKEN_EMAIL_PASSWORD_FORGOT:
            returnRoute = `/tokenEmail/senha/redefinir?token=${param.token}`;
            break;
        case ACTIONS.CONFIRM_PERSON:
            returnRoute = `/tokenEmail/selfRegister/confirm?token=${param.token}`;
            break;
        case ACTIONS.ROLE:
            returnRoute = `/role`;
            break;
        case ACTIONS.ROLE_ID:
            returnRoute = `/role/${param.idRole}`;
            break;
        case ACTIONS.LOOKUP_ROLE:
            returnRoute = `/lookUp/role`;
            break;
        default:
            returnRoute = "null";
            break;
    }

    // Google Analytics
    ReactGA.pageview(returnRoute);

    return returnRoute;
};
