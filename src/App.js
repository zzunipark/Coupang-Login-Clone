import React, { useState } from "react";
import styled from "styled-components";
import logoPath from "./components/assets/logo.png";
import newsvgPath from "./components/assets/new.svg";
import emailpngPath from "./components/assets/email.png";
import passwordpngPath from "./components/assets/password.png";
import showpasswordpngPath from "./components/assets/showpassword.png";
import checkboxpngPath from "./components/assets/checkbox.png";
import callsvgPath from "./components/assets/call.svg";

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
    flex-direction: row;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 445px;
  height: 48px;
  margin-top: 17px;
  border: 1px solid #ccc;
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

const AutoLogin = styled.input`
  width: 18px;
  height: 18px;
  background-image: url(${checkboxpngPath});
  cursor: pointer;
`;

const AutoLoginText = styled.p`
  font-size: 12px;
  cursor: pointer;
  color: #666;
  margin-left: 2px;
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
  width: 403px;
  height: 42px;
  border: none;
  color: #212b36;
  &::placeholder {
    color: #ccc;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: normal;
  }
  &:focus {
    border: 1px solid #346aff;
    border-radius: 5px;
    outline: 3px solid #eaf0ff;
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
`;

const QRCodeLoginQRWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [activeMethod, setActiveMethod] = useState("email");

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
              <EmailInputBox type="email" placeholder="아이디(이메일)"></EmailInputBox>
            </InputDiv>
            <InputDiv>
              <PasswordBox />
              <PasswordInputBox type="password" placeholder="비밀번호"></PasswordInputBox>
              <ShowPasswordBox />
            </InputDiv>
            <CheckBoxAndFindWrap>
              <AutoLoginBox>
                <AutoLogin type="checkbox" />
                <AutoLoginText>자동 로그인</AutoLoginText>
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
              <HorizonLine></HorizonLine>
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
        {activeMethod === "qrcode" && <div className="qrcode"></div>}
      </LoginMethodContentWrap>
    </>
  );
}

export default App;
