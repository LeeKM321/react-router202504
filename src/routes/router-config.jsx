import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);
