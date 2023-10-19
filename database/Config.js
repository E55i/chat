import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

//tähän config-tiedot

initializeApp(firebaseConfig)

const firestore = getFirestore()

export {
    firestore
}

console.log("Firebase toimii!")