const HOST = 'http://localhost:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const REVIEWS = 'reviews/'
const COMMENTS = 'comments/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    follow: username => HOST + ACCOUNTS + 'follow/' + `${username}/`,
    // 유저 프로필
    profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/`,
    // 유저 로그인 확인
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
  },
  movies: {
    movies: () => HOST + MOVIES + 'movies/',
    movie: moviePk => HOST + MOVIES + `${moviePk}/`,
    likeMovie: moviePk => HOST + MOVIES + `${moviePk}/` + 'like/',
    reviews: moviePk => HOST + MOVIES + `${moviePk}/` + REVIEWS,
    review: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/`,
    reviewlike: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/` + 'like/',
    comments: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/` + COMMENTS,
    commentlike: (moviePk, reviewPk, commentPk) => HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/` + COMMENTS + `${commentPk}` +'like/'
  },
}