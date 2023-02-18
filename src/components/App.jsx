import HomePage from 'pages/HomePage/HomePage';
import UserDetailsPage from 'pages/UserDetailsPage/UserDetailsPage';
import UsersPage from 'pages/UsersPage/UsersPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
