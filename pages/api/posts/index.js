import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";

export default async function (req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      const posts = await Post.find({});
      res.status(200).send({ posts });
      return;
    case "POST":
      const { title, author, text, category, imageURL } = req.body;

      const newPost = new Post({
        title,
        text,
        author,
        category,
        imageURL,
        date: new Date(),
      });

      newPost.save();
      res.status(200).send({ data: "Success" });
      return;
    default:
      res.status(401).send({ data: "Request failed" });
      return;
  }
}
