import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function (req, res) {
  await dbConnect();

  const {
    query: { username, password },
  } = req;

  //   console.log(username,password);
  //   res.status(200).send({data:"Nice"});
//   res.status(200).send({ data: "nice" });
  const foundUser = await User.findOne({ username,password });
  if (foundUser) {
    res.status(200).send({ data: foundUser });
    // return;
  } else {
    res.status(400).send({ data: "Could not find user" });
    // return;
  }
}
