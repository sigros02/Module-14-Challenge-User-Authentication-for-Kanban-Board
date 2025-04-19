import { jwtDecode } from "jwt-decode";

class AuthService {
  // getProfile() {
  //   // TODO: return the decoded token
  // }

  // TODO: return a value that indicates if the user is logged in
  loggedIn() {
    // SG: check if there is a token in local storage using getToken()
    const token = this.getToken();
    // SG: if there is no token, return false
    if (!token) {
      console.log("Token not found");
      return false; // No token found, user is not logged in
    }
    // SG: check if the token is expired using isTokenExpired()
    const isExpired = this.isTokenExpired(token);
    // SG: if the token is expired, return false
    if (isExpired) {
      return false; // Token is expired, user is not logged in
    }
    // SG: if the token is valid, return true
    console.log("Token is valid");
    return true;
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    // SG: check if the token is expired
    // SG: decode the token using jwt-decode
    const decodedToken = jwtDecode(token);
    if (!decodedToken) {
      console.log("Token is invalid");
      return true; // Token is invalid, consider it expired
    } else {
      // SG: check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      // console.log("Token expiration (exp):", decodedToken.exp);
      // console.log("Current time:", currentTime);
      if (decodedToken.exp && decodedToken.exp > currentTime) {
        console.log("Token is not expired");
        return false;
      } else {
        console.log("Token is expired");
        return true;
      }
    }
  }

  getToken(): string {
    // TODO: return the token
    const token = localStorage.getItem("token") || "";
    return token;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem("token", idToken);
    // TODO: redirect to the home page
    window.location.assign("/"); // Redirect to the home page after login
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem("token");
    window.location.assign("/login"); // Redirect to the login page after logout
  }
}

export default new AuthService();
