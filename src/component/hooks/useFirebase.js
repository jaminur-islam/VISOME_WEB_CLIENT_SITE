import firebaseAuthenticationInit from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
firebaseAuthenticationInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // handle register user user
  const handleRegister = (name, email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/home");
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Register successful",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: error?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // handle login user
  const handleLogin = (email, password, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/home");
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Login successful",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //handle google sing In
  const handleGoogleSignIn = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        navigate("/home");
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Login successful",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Sign out handle
  const handleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "log out successful",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    handleGoogleSignIn,
    user,
    handleLogin,
    handleRegister,
    handleSignOut,
    loading,
  };
};

export default useFirebase;
