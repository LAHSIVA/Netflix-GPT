# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Deploying our App to production
- Create signup user Account in Firebase
- SignUp Authentication get AcessToken
- SignIn Authentication get AcessToken
- We need to use User object and store it in Redux Store
- - npm i -D @reduxjs/toolkit
- - npm i react-redux
- Created Redux Store with userSlice
- Successfully redirecting to Browse page with help of Navigate
- Implemented SignOut
- Updated Photo
- Created Update Profile Api Calls
- Bug fix: Sign Up user displayName and profile picture Update
- Bug fix: If the user is not logged in Redirect /browse to Login Page and vice-versa(onAuthStateChange)
- Feature : If user logged in and trying access to go to log in page directed again to Browsepage(onAuthStateChange)
- Goodway : unsubscribed to the onAuthStateChanged callback when component unmounts to increase performance
- Add Hardcoded values to Constant file
- After Register to TMDB recieved 
- - API KEY
- - API Read Access Token
- - Using TMDB Movies
- - - getNowPlayingMovies API



- MainContainer
    - - VideoBackground
    - - VideoTitle
- SecondaryContainer
    - - MovieList*N
    - - cards*n

- use PopularMovies hook 
- use TopRatedMovies hook
- use TrailerVideo hook
- use UpcomingMovies hook

- GPT Search Feature
     
# Features

- Login/SignUp
    - SignUp/Signin
    - redirect to Browse Page

- Browse(After Authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description 
        - MovieSuggestions
            - Movielists*N

- NetflixGPT
    - SearchBar
    - MovieSuggestions

