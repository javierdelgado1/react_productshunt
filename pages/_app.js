import '../styles/globals.css'
import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';
//function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = props =>{
  
  const {Component, pageProps} = props
  const usuario = useAutenticacion();

  return (
    <FirebaseContext.Provider
      value={{
        firebase, usuario
      }}
    >
    <Component {...pageProps}></Component>
    </FirebaseContext.Provider>
  )
}

export default MyApp
