// https://firebase.google.com/docs/reference/admin
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import serviceAccount from './service-account.json';

export default function firebaseServer() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
}