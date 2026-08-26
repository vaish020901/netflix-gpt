import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.js";
import { toggleGptSearchView, removeGptMovieResult } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  // const user = auth.currentUser;
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    if (showGptSearch) {
    dispatch(removeGptMovieResult());
    dispatch(changeLanguage("en"));
  }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <button
            onClick={handleGptSearchClick}
            className="mr-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95"
          >
            { showGptSearch ? "Home Page" : "✨ GPT Search"}
          </button>

          {showGptSearch && <select
            className="mr-4 appearance-none rounded-md border border-gray-500/50 bg-black/80 px-4 py-2 pr-9 text-sm font-medium text-white shadow-lg outline-none transition hover:border-gray-300 focus:border-white focus:ring-2 focus:ring-white/30 cursor-pointer"
           onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}

          <img
            className=" relative w-12 h-12 p-1 mx-2 rounded-lg"
            src={USER_AVATAR}
            alt="usericon"
          />

          <button
            className="font-bold text-white p-2 rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
