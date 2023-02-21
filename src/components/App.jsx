import HomePage from 'pages/HomePage/HomePage';
import UserDetailsPage from 'pages/UserDetailsPage/UserDetailsPage';
import UsersAddPage from 'pages/UsersAddPage/UsersAddPage';
import UsersPage from 'pages/UsersPage/UsersPage';
import UsersUpdatePage from 'pages/UsersUpdatePage/UsersUpdatePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="users/add" element={<UsersAddPage />} />
        <Route path="users/update/:id" element={<UsersUpdatePage />} />
      </Route>
    </Routes>
  );
};
