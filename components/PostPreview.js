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
  orientation,
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
    <div
      className={
        orientation
          ? orientation === "portrait"
            ? styles.container
            : styles.containerLandscape
          : styles.container
      }
    >
      <div className={styles.imageContainer}>
        {noLink ? (
          <img
            src={imageURL}
            className={styles.postImage}
            alt="Blog post image"
          />
        ) : (
          <Link href={`/post/${postID}`}>
            <img
              style={{ cursor: "pointer" }}
              className={styles.postImage}
              src={imageURL}
              alt="Blog post image"
            />
          </Link>
        )}
      </div>
      <div className={styles.textContainer}>
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
    </div>
  );
};

export default PostPreview;
