import { useEffect, useRef, useState } from 'react';
import './LoginInput.css'
import { useRecoilState } from 'recoil';
import { emailState, passwordState } from '../recoilState';

const LoginInput = ({ focusField, errorMsg }) => {
    const [isPasswordVisible, setIsPasswrodVisible] = useState(false);
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useRecoilState(passwordState);

    const emailRef = useRef(null)
    const passwordRef = useRef(null);

    const onChangeSwitch = (e) => {
        setIsPasswrodVisible(e.target.checked);
    }
    

    useEffect(() => {
        if (focusField === 'email') {
            emailRef.current.focus();
        } else if (focusField === 'password') {
            passwordRef.current.focus();
        }
    }, [focusField]);
    
    return (
        <div className="login-input-wrap">
            <input
                type="text"
                placeholder="이메일 (Email)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                className={focusField === 'email' ? 'error' : ''}
                required
            />
            <div className="input-block">
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="비밀번호 (Password)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    className={focusField === 'password' ? 'error' : ''}               required
                />
                <label className="switch-hide">
                    <input
                        type="checkbox"
                        onChange={onChangeSwitch}
                        checked={isPasswordVisible}
                    />
                    <span>password icon</span>
                </label>
            </div>
        </div>
    )
}

export default LoginInput;