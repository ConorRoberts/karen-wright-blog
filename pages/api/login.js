import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    await dbConnect();

    const {
      body: { username, password },
      method,
    } = req;

    switch (method) {
      case "POST":
        const foundUser = await User.findOne({ username, password });
        if (foundUser) {
          req.session.set("user", { username });
          await req.session.save();
          return res.status(200).send({ data: "Good login" });
        }
        return res.status(400).send({ data: "Bad login" });

      case "GET":
        const user = await req.session.get("user");
        return res.status(200).send({user});
    }
  },
  {
    cookieName: "KW_BLOG_COOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.COOKIE_SECRET,
  }
);
