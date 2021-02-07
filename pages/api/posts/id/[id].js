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
      } else {
        res.status(400).send({ data: "Could not find a post with this ID" });
      }

    case "DELETE":
      // console.log(id);
      const deletedPost = await Post.findByIdAndDelete(id);
      res.status(200).send({data:"Success"});
  }
}
