import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';

const Nav = () => {
    const location = useLocation();
    const [isChecked, setIsChecked] = useState(false);

    const isCurrent = (path) => location.pathname === path

    return (
        <nav className='nav'>
            <ul>
                <li className={isCurrent('/emo') ? 'is-current' : ''}>
                    <Link to={'/emo'}><span>정서</span></Link>
                </li>
                <li className={isCurrent('/stu') ? 'is-current' : ''}>
                    <Link to={'/stu'}><span>학생</span></Link>
                </li>
                <li className={isCurrent('/int') ? 'is-current' : ''}>
                    <Link to={'/int'}><span>관심학생</span></Link>
                </li>
                <li className={isCurrent('/hmt') ? 'is-current' : ''}>
                    <Link to={'/hmt'}><span>담임교사</span></Link>
                </li>
                <li className={isCurrent('/tea') ? 'is-current' : ''}>
                    <Link to={'/tea'}><span>비담임교사</span></Link>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id='setting'
                    />
                    <label htmlFor="setting"><span>설정</span></label>
                    <ul>
                        <li className={isCurrent('/grd') ? 'is-current' : ''}>
                            <Link to={'/grd'}><span>학년/유치원</span></Link>
                        </li>
                        <li className={isCurrent('/cls') ? 'is-current' : ''}>
                            <Link to={'/cls'}><span>반</span></Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;