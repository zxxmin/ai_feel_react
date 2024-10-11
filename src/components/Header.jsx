import './Header.css'
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { emailState } from "../recoilState";

const Header = () => {
    const email = useRecoilValue(emailState);

    return (
        <header className='header'>
            <h1><Link to={'/emo'}>로고</Link></h1>
            <div>
                <input
                    id="user"
                    type="checkbox"
                />
                <label htmlFor="user">
                    <span>사용자 프로필</span>
                    <p>{email ? email : 'kim981132@korea.kr'}</p>
                </label>
                <ul>
                    <li>{email ? email : 'kim981132@korea.kr'}</li>
                    <li><button type='button'>사용자 정보 수정</button></li>
                    <li><button type='button'>비밀번호 변경</button></li>
                    <li><button type='button'>로그아웃</button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;