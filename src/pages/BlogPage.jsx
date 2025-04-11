import PostCard from '../components/PostCard';
import styles from './BlogPage.module.scss';
import { posts } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';
import BlogFilter from '../components/BlogFilter';

const BlogPage = () => {
  // ?뒤에 값(쿼리스트링) 읽는법
  // useSearchParams은 배열을 리턴하는데
  // 0번인덱스에는 쿼리스트링을 모아놓은 객체를 리턴
  // 1번인덱스는 쿼리스트링을 생성할 수 있는 함수를 리턴
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'latest';

  // 옵셔널 체이닝 (?.): 값이 존재하면 적용, 존재하지 않으면 실행하지 않음.
  const search = searchParams.get('search')?.toLowerCase() || '';

  return (
    <div className={styles.blog}>
      <BlogFilter />
      <div className={styles.grid}>
        {posts
          .filter((post) => category === 'all' || post.category === category)
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search) ||
              post.excerpt.toLowerCase().includes(search),
          )
          .sort((a, b) =>
            sort === 'latest'
              ? new Date(b.date) - new Date(a.date)
              : new Date(a.date) - new Date(b.date),
          )
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default BlogPage;
