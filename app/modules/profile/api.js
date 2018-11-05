import {auth, provider} from "../../config/firebase";
import {data} from '../../../App'

export function createUser(name, email, password) {
    return new Promise(resolve => {
        auth.createUserWithEmailAndPassword(email, password).catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('Já existe uma conta com esse email');
                    break;
                case 'auth/invalid-email':
                    alert('Formato de email inválido');
                    break;
                case 'auth/weak-password':
                    alert('Senha é muito fraca');
                    break;
                default:
                    alert('Verifique sua conexão com a internet');
            }
            resolve(false);
        }).then(function (user) {
            user.user.updateProfile({
                displayName: name,
                photoURL: null
            }).then(function () {
                // Update successful.
            }, function (error) {
                // An error happened.
            });
            console.log(user);
            resolve(true);
        })
    });
}

export function userLogin(email, password) {
    return new Promise(resolve => {
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Formato de email inválido');
                        break;
                    case 'auth/user-not-found':
                        alert('Usuário não encontrado');
                        break;
                    case 'auth/wrong-password':
                        alert('Email ou senha inválidos');
                        break;
                    default:
                        alert('Verifique sua conexão com a internet');
                }
                resolve(false);
            }).then(user => {
            if (user) {
                resolve(user);
            }
        });
    })
}

export function signOut() {
    return new Promise((resolve) => {
        auth.signOut()
            .then(() => resolve(true))
            .catch((error) => {
                console.log(error);
                resolve(false)
            });
    });
}

export async function loginWithFacebook() {

    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('159163475019545', {
        permissions: ['public_profile', 'email'],
    });

    return new Promise(resolve => {

        if (type === 'success') {

            const credential = provider.credential(token);

            auth.signInWithCredential(credential).catch((error) => {
                console.log(error);
                resolve(false)
            });

            resolve(true)
        }
        else {
            resolve(false)
        }
    })
}

export function sendEmailWithPassword(email) {
    return new Promise(resolve => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('Email com nova senha enviado');
                resolve(true);
            }).catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert('Formato de email inválido');
                    break;
                case 'auth/user-not-found':
                    alert('Não existe usuário cadastrado com esse email');
                    break;
                default:
                    alert('Verifique sua conexão com a internet');
            }
            resolve(false);
        });
    })
}

export function checkLoginStatus() {
    const state = data.getState();
    const status = state.profileReducer.profile.isLoggedIn;

    switch (status) {
        case true :
            return true;
        case false :
            return false;
        default :
            return false;
    }
}




