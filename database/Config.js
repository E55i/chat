import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Tähän Config-tiedot

initializeApp(firebaseConfig)

const firestore = getFirestore()

export {
    firestore
}

console.log("Firebase toimii!")