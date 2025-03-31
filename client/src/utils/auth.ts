// import { JwtPayload, jwtDecode } from "jwt-decode"; // SG: just to get initial code working

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    return true; // SG: just to get initial code working
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    return token === ""; // SG: just to get initial code working
  }

  getToken(): string {
    // TODO: return the token
    return ""; // SG: just to get initial code working
  }

  login(_idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
