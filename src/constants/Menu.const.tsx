import { Dashboard, Home, Login, Logout } from '@/components/icons';

export const MENU_CONST_NOT_USER = [
    {
        title: 'Home',
        src: '/',
        icon: <Home />,
    },
    {
        title: 'Login',
        src: `/login`,
        icon: <Login />,
    },
];

export const MENU_CONST_USER = [
    {
        title: 'Home',
        src: '/',
        icon: <Home />,
    },
    {
        title: 'Dashboard',
        src: `/dashboard`,
        icon: <Dashboard />,
    },
    {
        title: 'Logout',
        src: '/',
        icon: <Logout />,
    },
];
