import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../assets/dummy-data';
import styles from './BlogPostDetail.module.scss';

const BlogPostDetail = () => {
  // 지금 상세보기 페이지의 postId값을 URL로부터 읽어와야 한다.
  // 라우터 설정에 지정한 이름으로 글 번호를 얻어올 수 있다.
  const { postId } = useParams();

  // 원래라면 postId를 백엔드로 보내서 단일 조회 요청 (우리는 지금 백엔드가 없음 ㅜㅜ)
  // dummy-data에서 꺼내오도록 하겠습니다.
  const foundPost = posts.find((p) => p.id === +postId);

  const post = {
    ...foundPost,
    comments: [
      { id: 1, author: '김춘식', content: '좋은 글이네요!' },
      { id: 2, author: '홍길동', content: '잘 배웠습니다~~' },
    ],
  };

  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>
      <div className={styles.content}>{post.excerpt}</div>
      <div className={styles.comments}>
        <h2>댓글</h2>
        {post.comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default BlogPostDetail;
