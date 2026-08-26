export const LOGO =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg";

export const USER_AVATAR =
  "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWQLL7bT3pYDF0xKXID9tpW4PldTqv3UQKdTRZkA2-RWg7H8sxekkU5LOjLBZLmHSe5GoOaOjjokJgKpeEQQ-rS5VZsHg9Q.png?r=e6e";

export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6ef286cc-b89b-4da3-bab7-62971d87dbd0/web/IN-en-20260817-TRIFECTA-perspective_dce6e6bc-2bd3-45f2-9086-211bf8b6e8c8_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];
