import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import LoginInput from "../components/LoginInput";
import "./Login.css"
import { useEffect, useState } from "react";
import { emailState, passwordState } from "../recoilState";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const nav = useNavigate();
    const [loginText, setLoginText] = useState('계정으로 이동하겠습니다.')
    const [focusField, setFocusField] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false)
    const email = useRecoilValue(emailState);
    const password = useRecoilValue(passwordState);


    const onClickLoginBtn = () => {
        if(!email || !password ) {
            setLoginText('이메일/비밀번호는 필수 항목입니다.')
            setFocusField(!email ? 'email' : 'password');
            setErrorMsg(true);
        } else {
            setLoginText('계정으로 이동하겠습니다.')
            setErrorMsg(false);
            nav('/emo')
        }
    }

    return (
        <div className="container">
            <div>
                <div>
                    <img src="/login_bg.svg" alt="로그인 배경" />
                </div>
                <section>
                    <header>
                        <h1>
                            관리자페이지(CMS)에 오신 것을<br/>
                            환영합니다.
                        </h1>
                        <p className={errorMsg ? 'error-msg' : ''}>{loginText}</p>
                    </header>
                    <LoginInput
                        focusField={focusField}
                        errorMsg={errorMsg}
                    />
                    <Button
                        text={'로그인'}
                        onClick={onClickLoginBtn}
                    />
                </section>
            </div>
        </div>
    )
}

export default LoginPage;