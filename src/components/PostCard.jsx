import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
