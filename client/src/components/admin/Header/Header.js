import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

// Admin homepage constants

export const menu = [
    {
        name: 'Trang chủ',
        path: '/admin',
    },
    {
        name: 'Quản lý sách',
        path: '/manage-book',
    },
    {
        name: 'Thành viên',
        path: '/member',
    },
    {
        name: 'Đơn hàng',
        path: '/manage-order',
    },
];



const cx = classNames.bind(styles);

function Header() {
    if (!localStorage.user) {
        window.location.href = '/LogInAdmin';
    }

    const [userStatus, setUserStatus] = useState(false);

    function handleLogout() {
        // Xử lý đăng xuất ở đây
        setUserStatus(false);
        // Xóa thông tin trong localStorage
        localStorage.removeItem('user');
        // Chuyển hướng về trang đăng nhập
        window.location.href = '/LogInAdmin';
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUserStatus(true);
        } else {
            setUserStatus(false);
        }
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <Link to="/admin" className={cx('logo-wrapper')}>
                    <img className={cx('logo')} src={require('~/assets/images/logo2.png')} alt="...." width={200} />
                </Link>
                <ul className={cx('menu')}>
                    {menu.map((item, index) => (
                        <li key={index} className={window.location.pathname === item.path ? cx('active') : ''}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <Link onClick={handleLogout} className={cx('user')}> Đăng xuất </Link>

            </div>
        </header>
    );
}

export default Header;
