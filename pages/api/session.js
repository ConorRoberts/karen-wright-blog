import withSession from "../../lib/withSession";

export default withSession((req, res) => {
  const { username } = req.session.get("user");
  res.statusCode = 200;
  res.json({ username });
});
