import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import RootLayout from '../layouts/RootLayout';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
