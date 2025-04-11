import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import BlogPostDetail from '../pages/BlogPostDetail';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // 부모 경로가 활성화 되었을 때 기본으로 사용할 컴포넌트
        element: <IndexPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        // :postId -> 경로에 붙는 파라미터 (/blog/1, /blog/7)
        path: 'blog/:postId',
        element: <BlogPostDetail />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
