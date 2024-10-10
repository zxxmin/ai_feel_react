import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1><Link to={'/'}>로고</Link></h1>
            <div>
                <input
                    id="user"
                    type="checkbox"
                />
                <label htmlFor="user">
                    <span>사용자 프로필</span>
                    <p>kim981132@korea.kr</p>
                </label>
                <ul>
                    <li></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;