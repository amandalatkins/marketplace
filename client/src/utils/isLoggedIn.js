var isLoggedIn;

var userAccess = JSON.parse(localStorage.getItem('userlogin'));

if (!userAccess) {

}

if (userAccess && userAccess.expiration && userAccess.user && userAccess.token &&  userAccess.expiration > Date.now()) {
    isLoggedIn = { isLoggedIn: true, user: userAccess.user, token: userAccess.token }
} else {
    isLoggedIn = { isLoggedIn: false, user: {}, token: "" }
}

isLoggedIn.storeLogin = function(user, token) {
    var loggedInInfo = {
        user: user,
        token: token,
        expiration: Date.now() + 5*24*60*60*1000
    }
    localStorage.setItem('userlogin', JSON.stringify(loggedInInfo));
}

isLoggedIn.removeLogin = function() {
    localStorage.removeItem('userlogin');
}

export default isLoggedIn;