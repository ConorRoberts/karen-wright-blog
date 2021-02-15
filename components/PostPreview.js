import styles from "../styles/PostPreview.module.scss";
import Link from "next/link";

const PostPreview = ({
  postID,
  title,
  text,
  imageURL,
  author,
  category,
  date,
  noLink,
}) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.container}>
      {noLink ? (
        <img src={imageURL} alt="Blog post image" />
      ) : (
        <Link href={`/post/${postID}`} className={styles.imageContainer}>
          <img
            style={{ cursor: "pointer" }}
            className={styles.postImage}
            src={imageURL}
            alt="Blog post image"
          />
        </Link>
      )}

      <p className={styles.category}>{category}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <p className={styles.date}>
        {`${author} on ${monthNames[new Date(date).getMonth()]} ${new Date(
          date
        ).getDate()}, 
        ${new Date(date).getFullYear()}`}
      </p>
    </div>
  );
};

export default PostPreview;
