import { useEffect } from "react";

import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId:
        "100865451939-mdrquadpusle5945rn2902r9uv0j30sl.apps.googleusercontent.com",
    // iosClientId:
    //     "941258970715-9m24dmvfnqg6gbdbfarh75eg76kv68he.apps.googleusercontent.com",
});

export const authentication = auth;
export default GoogleSignin; 
