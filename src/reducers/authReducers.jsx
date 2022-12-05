const initialState = {
    isLoggedin: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "postLogin":
            return {
                ...state,
                loginData: action.payload,
                isLoggedin: true,
            }
        case "authLogin":
            console.log("from reducer", action.payload);
            return {
                ...state,
                loginData: action.payload,
                isLoggedin: true,
            }
        case "loggedStatus":
            return{
                ...state
            }
        case "authLogout":
            return {
                ...state,
                loginData: action.payload,
                isLoggedin: false,
            }
        default:
            return state
    }
}

export default authReducer;