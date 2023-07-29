'use client';

import {auth, googleProvider} from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Signup() {

  const signIn = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user)
  };

  return (
    <div>
      <button onClick={signIn}>
        Sign In
      </button>
    </div>
  )
}