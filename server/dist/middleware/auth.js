// import jwt from "jsonwebtoken";
// interface JwtPayload {
//   username: string;
// }
export const authenticateToken = (req, _res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    // SG: need to add authorization key to the response header with token as value
    console.log("********************************************************************");
    console.log("Auth req: ", req.body);
    next(); // pass the execution off to the next middleware
};
