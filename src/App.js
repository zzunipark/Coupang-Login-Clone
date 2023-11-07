import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import logoPath from "./components/assets/logo.png";
import newsvgPath from "./components/assets/new.svg";
import emailpngPath from "./components/assets/email.png";
import passwordpngPath from "./components/assets/password.png";
import showpasswordpngPath from "./components/assets/showpassword.png";
import checkboxpngPath from "./components/assets/checkbox.png";
import callsvgPath from "./components/assets/call.svg";
import qrpngPath from "./components/assets/QR.png";
import infosvgPath from "./components/assets/info.svg";
import showpasswordactivepngPath from "./components/assets/showpasswordactive.png";
import checkboxactivepngPath from "./components/assets/checkboxactive.png";

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 115px;
`;

const Logo = styled.div`
  width: 195px;
  height: 46px;
  background-image: url(${logoPath});
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  margin-top: 12px;
`;

const LoginMethodWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
`;

const LoginMethod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  letter-spacing: 0.5;
  color: #454f5b;
  &.active {
    border-bottom: 3px solid #346aff;
    color: #346aff;
    font-weight: 700;
  }
`;

const LoginMethodNew = styled.img`
  margin-left: 2px;
  margin-bottom: 3px;
`;

const LoginMethodContentWrap = styled.div`
  border-top: 1px solid #ebebeb;
  width: 100%;
  height: 60vh;

  .email {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .phone {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 445px;
  height: 48px;
  margin-top: 17px;
  border: 1px solid #ccc;

  &:focus-within {
    border-bottom: 2px solid #346aff;
  }
`;

const EmailInputBox = styled.input`
  width: 445px;
  height: 45px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: #111;
  padding-left: 14px;

  &::placeholder {
    color: #ccc;
    font-size: 14px;
    font-weight: 700;
  }
`;

const PasswordInputBox = styled.input`
  width: 389.8px;
  height: 45px;
  border: none;
  outline: none;
  font-weight: 600;
  color: #111;
  padding-left: 14px;
  letter-spacing: 9px;
  &::placeholder {
    color: #ccc;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: normal;
  }
`;

const EmailBox = styled.div`
  width: 45px;
  height: 48px;
  background-color: #fafafa;
  border-right: 1px solid #ccc;
  background-image: url(${emailpngPath});
  background-size: 21px;
  background-position: center;
  background-repeat: no-repeat;
`;

const PasswordBox = styled.div`
  width: 45px;
  height: 48px;
  background-color: #fafafa;
  border-right: 1px solid #ccc;
  background-image: url(${passwordpngPath});
  background-size: 21px;
  background-position: center;
  background-repeat: no-repeat;
`;

const ShowPasswordBox = styled.div`
  width: 50px;
  height: 48px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${showpasswordpngPath});
  background-size: 21px;
  background-position: center;
  background-repeat: no-repeat;
  &.true {
    background-image: url(${showpasswordactivepngPath});
    background-size: 21px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const CheckBoxAndFindWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 455px;
  height: 24px;
  margin-top: 7px;
`;

const AutoLoginBox = styled.div`
  display: flex;
  align-items: center;
`;

const AutoLoginText = styled.label`
  font-size: 12px;
  cursor: pointer;
  color: #666;
  margin-left: 2px;
  display: flex;
  align-items: center;

  &:before {
    background-image: url(${checkboxpngPath});
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 2px;
    cursor: pointer;
    margin-right: 5px;
  }

  &.true:before {
    background-image: url(${checkboxactivepngPath});
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 2px;
    cursor: pointer;
    margin-right: 5px;
  }
`;

const FindBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3px;
`;

const FindText = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: #0073e9;
  margin-left: 2px;
`;

const DisplayWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 7px;
`;

const LoginButton = styled.button`
  width: 448px;
  height: 44px;
  background-color: #346aff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 700;
`;

const HorizonLine = styled.div`
  width: 448px;
  height: 1px;
  background-color: #c4cdd5;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const SignUpButton = styled.button`
  width: 448px;
  height: 44px;
  border: 1px solid #919eab;
  color: #454f5b;
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const CoupangBizSignUpWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 17px;
`;

const CoupangBizAskingText = styled.p`
  font-size: 13px;
  color: #637381;
  text-align: center;
  line-height: 17px;
  margin-bottom: 0px;
`;

const CoupangBizSignUpText = styled.p`
  font-size: 14px;
  color: #454f5b;
  font-weight: bold;
  text-align: center;
  margin-top: 7px;
  cursor: pointer;
`;

const CopyrightWrap = styled.div`
  width: 455px;
  height: auto;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  color: #637381;
  text-align: center;
  line-height: 17px;
  margin-bottom: 0px;
`;

const EnterPhoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const EnterPhoneText = styled.p`
  color: #454f5b;
  font-size: 14px;
  width: 447px;
  margin-bottom: 15px;
`;

const PhoneNumberInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneNumberInputBox = styled.div`
  width: 447px;
  height: 44px;
  border: 1px solid #c4cdd5;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:focus-within {
    border: 1px solid #346aff;
    border-radius: 5px;
    outline: 3px solid #eaf0ff;
  }
`;

const PhoneNumberIconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 5px;
  background-image: url(${callsvgPath});
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
`;

const PhoneNumberInput = styled.input`
  width: 402px;
  height: 42px;
  border: none;
  color: #212b36;
  border-radius: 5px;
  font-size: 16px;
  &::placeholder {
    color: #ccc;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: normal;
  }
  &:focus {
    outline: none;
  }
`;

const PhoneNumberLoginButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;

const SendCodeButton = styled.button`
  width: 448px;
  height: 44px;
  background-color: #346aff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 700;
`;

const QRCodeLoginTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 290px;
  margin-top: 15px;
  margin-left: 30px;
`;

const QRCodeLoginQRWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;
`;

const QRCodeLoginTextTitle = styled.p`
  color: #212b36;
  font-size: 16px;
  font-weight: 700;
  padding-right: 30px;
  margin-bottom: 0px;
`;

const QRCodeLoginStepsWrap = styled.ul`
  padding-left: 0px;
  margin-bottom: 8px;
`;

const QRCodeLoginTextSteps = styled.li`
  list-style-type: decimal;
  font-size: 13px;
  color: #454f5b;
  line-height: 25px;
`;

const QRCodeImage = styled.div`
  width: 160px;
  height: 160px;
  background-image: url(${qrpngPath});
  background-size: 160px;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
`;

const QRCodeLoginOTP = styled.div`
  width: 48px;
  height: 48px;
  background-color: #f1f4f6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212b36;
  font-size: 20px;
  font-weight: 700;
  margin-right: 200px;
  margin-top: 0px;
`;

const QRCodeLoginInfo = styled.p`
  color: #768695;
  font-size: 12px;
  background: url(${infosvgPath}) 3px 0.4px/12px no-repeat;
  padding-left: 18px;
  margin-right: 20px;
  margin-top: 15px;
`;

const QRCodeLoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const QRCodeSignUp = styled.button`
  width: 448px;
  height: 54px;
  border: 1px solid #919eab;
  color: #454f5b;
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const EmailErrorMessage = styled.p`
  color: #e52528;
  font-size: 12px;
  padding-top: 2px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-right: 180px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PWErrorMessage = styled.p`
  color: #e52528;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-right: 285px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const QRCodeLoginTimeout = styled.p`
  color: #637381;
  font-size: 12px;
  margin-top: 0px;
  margin-right: 20px;
`;

function App() {
  const [activeMethod, setActiveMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const checkEmailValid = (e) => {
    const inputValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (inputValue === "" || emailRegex.test(inputValue)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(inputValue);
  };

  const checkPasswordValid = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || inputValue.length >= 1) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    setPassword(inputValue);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleAutoLoginToggle = () => {
    setAutoLogin((prev) => !prev);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <LoginMethodWrap>
        <LoginMethod className={activeMethod === "email" ? "active" : ""} onClick={() => setActiveMethod("email")}>
          이메일 로그인
        </LoginMethod>
        <LoginMethod className={activeMethod === "phone" ? "active" : ""} onClick={() => setActiveMethod("phone")}>
          휴대폰번호 로그인
          <LoginMethodNew src={newsvgPath} alt="NEW" />
        </LoginMethod>
        <LoginMethod className={activeMethod === "qrcode" ? "active" : ""} onClick={() => setActiveMethod("qrcode")}>
          QR코드 로그인
        </LoginMethod>
      </LoginMethodWrap>
      <LoginMethodContentWrap>
        {activeMethod === "email" && (
          <div className="email">
            <InputDiv>
              <EmailBox />
              <EmailInputBox type="text" placeholder="아이디(이메일)" onChange={checkEmailValid} value={email} />
            </InputDiv>
            <EmailErrorMessage show={!emailValid}>아이디(이메일)는 이메일 형식으로 입력해주세요.</EmailErrorMessage>
            <InputDiv>
              <PasswordBox />
              <PasswordInputBox type={showPassword ? "text" : "password"} placeholder="비밀번호" onChange={checkPasswordValid} value={password} />
              <ShowPasswordBox className={showPassword ? "true" : ""} onClick={handleShowPasswordToggle} />
            </InputDiv>
            <PWErrorMessage show={!passwordValid}>비밀번호를 입력해주세요.</PWErrorMessage>
            <CheckBoxAndFindWrap>
              <AutoLoginBox>
                <AutoLoginText className={autoLogin ? "true" : ""} onClick={handleAutoLoginToggle}>
                  자동 로그인
                </AutoLoginText>
              </AutoLoginBox>
              <FindBox>
                <FindText>아이디∙비밀번호 찾기 ></FindText>
              </FindBox>
            </CheckBoxAndFindWrap>
            <DisplayWrap>
              <LoginButton>로그인</LoginButton>
              <HorizonLine></HorizonLine>
              <SignUpButton>회원가입</SignUpButton>
            </DisplayWrap>
            <CoupangBizSignUpWrap>
              <CoupangBizAskingText>
                법인 고객이신가요? <br />
                사업자 회원으로 전용 특가 혜택을 누려보세요.
              </CoupangBizAskingText>
              <CoupangBizSignUpText>쿠팡비즈 간편가입 ></CoupangBizSignUpText>
            </CoupangBizSignUpWrap>
            <CopyrightWrap>
              <CopyrightText>©Coupang Corp. All rights reserved.</CopyrightText>
            </CopyrightWrap>
          </div>
        )}
        {activeMethod === "phone" && (
          <div className="phone">
            <EnterPhoneWrap>
              <EnterPhoneText>쿠팡 계정에 등록된 휴대폰번호를 입력해주세요.</EnterPhoneText>
            </EnterPhoneWrap>
            <PhoneNumberInputWrap>
              <PhoneNumberInputBox>
                <PhoneNumberIconBox />
                <PhoneNumberInput placeholder="휴대폰번호" />
              </PhoneNumberInputBox>
            </PhoneNumberInputWrap>
            <PhoneNumberLoginButtonWrap>
              <SendCodeButton>인증번호 발송</SendCodeButton>
              <HorizonLine />
              <SignUpButton>회원가입</SignUpButton>
            </PhoneNumberLoginButtonWrap>
            <CoupangBizSignUpWrap>
              <CoupangBizAskingText>
                법인 고객이신가요? <br />
                사업자 회원으로 전용 특가 혜택을 누려보세요.
              </CoupangBizAskingText>
              <CoupangBizSignUpText>쿠팡비즈 간편가입 ></CoupangBizSignUpText>
            </CoupangBizSignUpWrap>
            <CopyrightWrap>
              <CopyrightText>©Coupang Corp. All rights reserved.</CopyrightText>
            </CopyrightWrap>
          </div>
        )}
        {activeMethod === "qrcode" && (
          <div className="qrcode">
            <QRCodeLoginWrap>
              <QRCodeLoginTextWrap>
                <QRCodeLoginTextTitle>쿠팡 앱을 통해 바로 로그인하려면 다음 단계에 따라 진행해주세요</QRCodeLoginTextTitle>
                <QRCodeLoginStepsWrap>
                  <QRCodeLoginTextSteps>휴대폰 카메라로 QR코드를 스캔하세요.</QRCodeLoginTextSteps>
                  <QRCodeLoginTextSteps>화면에서 아래의 숫자를 선택하면 로그인됩니다.</QRCodeLoginTextSteps>
                </QRCodeLoginStepsWrap>
                <QRCodeLoginOTP>42</QRCodeLoginOTP>
                <QRCodeLoginInfo>최신 버전의 앱에서만 QR로그인이 가능합니다.</QRCodeLoginInfo>
              </QRCodeLoginTextWrap>
              <QRCodeLoginQRWrap>
                <QRCodeImage />
                <QRCodeLoginTimeout>
                  남은시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </QRCodeLoginTimeout>
              </QRCodeLoginQRWrap>
            </QRCodeLoginWrap>
            <HorizonLine />
            <QRCodeSignUp>회원가입</QRCodeSignUp>
            <CoupangBizSignUpWrap>
              <CoupangBizAskingText>
                법인 고객이신가요? <br />
                사업자 회원으로 전용 특가 혜택을 누려보세요.
              </CoupangBizAskingText>
              <CoupangBizSignUpText>쿠팡비즈 간편가입 ></CoupangBizSignUpText>
            </CoupangBizSignUpWrap>
            <CopyrightWrap>
              <CopyrightText>©Coupang Corp. All rights reserved.</CopyrightText>
            </CopyrightWrap>
          </div>
        )}
      </LoginMethodContentWrap>
    </>
  );
}

export default App;
