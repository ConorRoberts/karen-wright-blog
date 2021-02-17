import dbConnect from "../../../../utils/dbConnect";
import Post from "../../../../models/Post";

export default async function (req, res) {
  await dbConnect();

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const foundPost = await Post.findById(id);

      if (foundPost) {
        res.status(200).send({ data: foundPost });
        return;
      } else {
        res.status(400).send({ data: "Could not find a post with this ID" });
        return;
      }
    case "POST":
      const updatedPost = await Post.findByIdAndUpdate(id, req.body);

      if (updatedPost) {
        updatedPost.save();
        res.status(200).send({ data: "Updated post" });
        return;
      }
      res.status(400).send({ data: "Could not find a post with this ID" });
      return;

    case "DELETE":
      // console.log(id);
      const deletedPost = await Post.findByIdAndDelete(id);
      res.status(200).send({ data: "Success" });
  }
}
