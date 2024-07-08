import { initializeApp } from "firebase/app";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "----YOUR-KEY----",
    authDomain: "----YOUR-DOMAIN----",
    projectId: "-----YOUR-POJECT-ID----",
    appId: "----YOUR-APP-ID----"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  return {
    firebaseApp
  }
}