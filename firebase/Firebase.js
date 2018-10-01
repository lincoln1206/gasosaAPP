import firebase from "firebase";

class fb {

    userLogin = (email, password) => {
        return new Promise(resolve => {
            firebase.auth().signInWithEmailAndPassword(email, password)
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
                    resolve(null);
                }).then(user => {
                if (user) {
                    resolve(user);
                }
            });
        })
    };

    createFirebaseAccount = (name, email, password) => {
        return new Promise(resolve => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
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
            }).then(function(user) {
                user.user.updateProfile({
                    displayName: name,
                    photoURL: null
                }).then(function() {
                    // Update successful.
                }, function(error) {
                    // An error happened.
                });
                console.log(user);
                resolve(true);
            })
        });
    };

    sendEmailWithPassword = (email) => {
        return new Promise(resolve => {
            firebase.auth().sendPasswordResetEmail(email)
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
    };

    async loginWithFacebook(){

    }

}



export default new fb();