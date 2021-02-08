import { withIronSession } from "next-iron-session";

const withSession = (handler) =>
  withIronSession(handler, {
    password: process.env.COOKIE_SECRET,
    cookieName: "KW_BLOG_COOKIE",
    cookieOptions: {
      // the next line allows to use the session in non-https environements like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });

export default withSession;
