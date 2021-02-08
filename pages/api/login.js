import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import withSession from "../../lib/withSession";

export default withSession(
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
  }
);
