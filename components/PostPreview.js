import styles from "../styles/PostPreview.module.scss";
import Link from "next/link";
import axios from "axios";

const PostPreview = ({
  postID,
  title,
  text,
  imageURL,
  author,
  category,
  date,
  noLink
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
      {noLink ? <img src={imageURL} alt="Blog post image" /> : <Link href={`/post/${postID}`} passHref>
        <div className={styles.imageContainer}>
          <a>
            <img src={imageURL} alt="Blog post image" />
          </a>
        </div>
      </Link>}

      <p className={styles.category}>{category}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>
        {/* {text.split("").slice(0, charLimit).join("") + ". . ."} */}
        {/* {text.substring(0, 200) + "..."} */}
        {text}
      </p>
      <p className={styles.date}>
        {`${author} on ${monthNames[new Date(date).getMonth()]} ${new Date(date).getDay()}, 
        ${new Date(date).getFullYear()}`}
      </p>
    </div>
  );
};

export default PostPreview;
