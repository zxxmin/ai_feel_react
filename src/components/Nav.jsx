import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const location = useLocation();

    const isSettingActive = location.pathname.startsWith('/setting');

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/emo' className={({ isActive }) => isActive ? 'is-current emo' : 'emo'}>
                        <span>정서</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/stu' className={({ isActive }) => isActive ? 'is-current stu' : 'stu'}>
                        <span>학생</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/int' className={({ isActive }) => isActive ? 'is-current int' : 'int'}>
                        <span>관심학생</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/hmt' className={({ isActive }) => isActive ? 'is-current hmt' : 'hmt'}>
                        <span>담임교사</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tea' className={({ isActive }) => isActive ? 'is-current tea' : 'tea'}>
                        <span>비담임교사</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/setting/grd' className={() => isSettingActive ? 'is-current set' : 'set'}>
                        <span>설정</span>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to='/setting/grd' className={({ isActive }) => isActive ? 'is-current grd' : 'grd'}>
                                <span>학년/유치원</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/setting/cls' className={({ isActive }) => isActive ? 'is-current cls' : 'cls'}>
                                <span>반</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;