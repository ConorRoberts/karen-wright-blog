import withSession from "../../lib/withSession";

export default withSession((req, res) => {
  const user = req.session.get("user");
  if (user) {
    res.statusCode = 200;
    res.json({ username:user.username });
  } else {
    res.statusCode = 200;
    res.json({ username: null });
  }
});
