import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';
class Firebase {
    constructor (){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //registra un usuario el
   async registrar(nombre, email, password){
         const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);

         return await nuevoUsuario.user.updateProfile({
             displayName:nombre
         });
    }

    //inicia sesion del nuevoUsuario
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    //cierra la sesion del usuarioAutenticado

    async cerrarSesion (){
        await this.auth.signOut();
    }
}

const firebase = new Firebase();

export default firebase;