"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const Agreement = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState({
    all: false,
    collection1: false,
    collection2: false,
    collection3: false,
    provision1: false,
    provision2: false,
    provision3: false,
    overseas: false,
    inquiry1: false,
    inquiry2: false,
    inquiry3: false,
  });

  const [sections, setSections] = useState({
    section1: true,
    section2: true,
    section2_1: true,
    section3: true,
  });

  // 전체 동의 처리
  useEffect(() => {
    const { all, ...rest } = agreements;
    const allChecked = Object.values(rest).every((value) => value === true);
    if (allChecked !== all) {
      setAgreements((prev) => ({ ...prev, all: allChecked }));
    }
  }, [agreements]);

  // 전체 동의 클릭 시 모든 체크박스 상태 변경
  const handleAllCheck = () => {
    const newValue = !agreements.all;
    const newAgreements = { all: newValue };

    // 모든 체크박스에 동일한 값 적용
    Object.keys(agreements).forEach((key) => {
      if (key !== "all") {
        newAgreements[key] = newValue;
      }
    });

    setAgreements(newAgreements);
  };

  // 개별 체크박스 상태 변경
  const handleCheck = (name) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // 섹션 토글
  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 다음 단계로 진행
  const handleSubmit = () => {
    // 필수 동의 항목 확인
    const requiredAgreements = [
      "collection1",
      "collection2",
      "collection3",
      "provision1",
      "provision2",
      "provision3",
      "inquiry1",
      "inquiry2",
      "inquiry3",
    ];

    const allRequired = requiredAgreements.every((item) => agreements[item]);

    if (allRequired) {
      // 다음 단계로 이동
      navigate("/payment"); // 결제 페이지로 이동 예시
    } else {
      alert("필수 동의 항목에 모두 동의해주세요.");
    }
  };

  return (
    <S.AgreementContainer>
      <S.AgreementHeader>
        <S.AgreementTitle>보험 가입 동의</S.AgreementTitle>
        <S.AgreementSubtitle>
          보험 가입을 위해 아래 내용을 확인하시고 동의해주세요.
        </S.AgreementSubtitle>
      </S.AgreementHeader>

      <S.AgreementContent>
        <S.AllCheckWrapper>
          <S.CheckboxLabel>
            <S.Checkbox
              type="checkbox"
              checked={agreements.all}
              onChange={handleAllCheck}
            />
            <S.CheckboxCustom checked={agreements.all}>
              {agreements.all && <Check size={16} />}
            </S.CheckboxCustom>
            <S.AllCheckText>모든 항목에 동의합니다</S.AllCheckText>
          </S.CheckboxLabel>
        </S.AllCheckWrapper>

        {/* 섹션 1: 수집·이용에 관한 사항 */}
        <S.Section>
          <S.SectionHeader onClick={() => toggleSection("section1")}>
            <S.SectionTitle>1. 수집·이용에 관한 사항</S.SectionTitle>
            {sections.section1 ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </S.SectionHeader>

          {sections.section1 && (
            <S.SectionContent>
              <S.SectionSubtitle>수집·이용 목적</S.SectionSubtitle>
              <S.SectionText>
                보험보험계약 상담, 재무설계서비스, 보험계약 인수여부
                판단(건강진단 및 계약 적부조사 포함),
                실손의료보험계약·기타손해보험계약 등 실제 발생하는 손해만을
                보상하는 실손형보험의 중복가입 확인을 위한 보험 가입내역 조회
              </S.SectionText>

              <S.SectionSubtitle>보유 및 이용기간</S.SectionSubtitle>
              <S.SectionText>동의일로부터 1년까지</S.SectionText>

              <S.SectionSubtitle>수집·이용 항목</S.SectionSubtitle>

              <S.AgreementItem>
                <S.AgreementItemTitle>고유식별정보</S.AgreementItemTitle>
                <S.SectionText>
                  주민등록번호, 운전면허번호, 외국인등록번호, 여권번호
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.collection1}
                    onChange={() => handleCheck("collection1")}
                  />
                  <S.CheckboxCustom checked={agreements.collection1}>
                    {agreements.collection1 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 고유식별정보 수집·이용에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>민감정보</S.AgreementItemTitle>
                <S.SectionText>
                  피보험자의 질병·상해에 관한 정보(진료기록, 상병명, 기왕증,
                  흡연 여부 등), 교통법규 위반정보
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.collection2}
                    onChange={() => handleCheck("collection2")}
                  />
                  <S.CheckboxCustom checked={agreements.collection2}>
                    {agreements.collection2 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 민감정보 수집·이용에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>개인(신용)정보</S.AgreementItemTitle>
                <S.SectionText>
                  <strong>일반개인정보</strong>
                  <br />
                  성명, 주소, 생년월일, 이메일, 네이버ID, 유·무선 전화번호,
                  국적, 직업, 운전여부, 국내거소신고번호, 주행거리정보,
                  외국인체류자격·코드,
                  전문보험계약자(보험설계사·보험대리점·보험중개사 등)의 정보,
                  사업자등록증상의 정보, 법률 및 국제협약 등의 의무이행을 위한
                  정보, CI, 통신사, 커넥티드카/안전운전 정보, 걸음 수 정보
                  <br />
                  <br />
                  <strong>신용거래정보</strong>
                  <br />
                  보험계약정보(상품종류, 기간, 보험가입금액 등),
                  보험금정보(보험금 지급사유, 지급금액, 사고정보 등), 계약 전
                  알릴 의무사항(취미 등)
                  <br />
                  <br />
                  <strong>신용능력정보</strong>
                  <br />
                  소득 및 재산 정보, 보험가입물건 정보(피보험차량정보 등)
                  <br />
                  <br />
                  <strong>공공정보</strong>
                  <br />
                  군운전경력정보, 실명확인증표 정보
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.collection3}
                    onChange={() => handleCheck("collection3")}
                  />
                  <S.CheckboxCustom checked={agreements.collection3}>
                    {agreements.collection3 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 개인신용정보 수집·이용에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>
            </S.SectionContent>
          )}
        </S.Section>

        {/* 섹션 2: 제공에 관한 사항 */}
        <S.Section>
          <S.SectionHeader onClick={() => toggleSection("section2")}>
            <S.SectionTitle>2. 제공에 관한 사항</S.SectionTitle>
            {sections.section2 ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </S.SectionHeader>

          {sections.section2 && (
            <S.SectionContent>
              <S.SectionSubtitle>제공받는 자</S.SectionSubtitle>
              <S.SectionText>
                국내재보험사, 종합신용정보집중기관, 보험요율산출기관,
                생명·손해보험사, 공제사업자, 체신관서(우체국보험), 보험협회,
                자동차 제조회사, 건강진단·계약적부조사, 보험모집 등 위탁을
                받은자(업무수탁자 등), 국토교통부, 안전운전(UBI)특약
                제휴업체(티맵모빌리티(주), (주)카카오모빌리티, (주)네이버,
                (주)비바리퍼블리카)
              </S.SectionText>

              <S.SectionSubtitle>제공받는 자의 이용목적</S.SectionSubtitle>
              <S.SectionText>
                종합신용정보집중기관 : 개인(신용)정보 조회
                <br />
                보험요율산출기관 ·공공기관 : 보험요율 산출
                <br />
                보험회사 등 : 보험계약 인수여부 판단, 보험계약 공동인수
                <br />
                보험협회 : 전문보험계약자 확인
                <br />
                자동차 제조회사 : 차량모델, 부속장치, 주행거리정보, 커넥티드카
                가입정보 조회
                <br />
                업무수탁자 등 : 건강진단 및 계약적부조사, 보험모집 업무, 안전
                운전(UBI), 걸음 수 할인 특약 관련정보 확인 및 전송
              </S.SectionText>

              <S.SectionSubtitle>보유 및 이용기간</S.SectionSubtitle>
              <S.SectionText>
                동의일로부터 1년까지
                <br />
                외국 재보험사의 국내 지점이 보험계약 인수여부 판단 지원 등
                업무를 위탁하기 위한 경우 별도의 동의 없이 외국 소재 본점에
                귀하의 정보를 이전할 수 있습니다.
              </S.SectionText>

              <S.SectionSubtitle>제공 항목</S.SectionSubtitle>

              <S.AgreementItem>
                <S.AgreementItemTitle>고유식별정보</S.AgreementItemTitle>
                <S.SectionText>
                  주민등록번호, 운전면허번호, 외국인등록번호, 여권번호
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.provision1}
                    onChange={() => handleCheck("provision1")}
                  />
                  <S.CheckboxCustom checked={agreements.provision1}>
                    {agreements.provision1 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 고유식별정보 수집·이용에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>민감정보</S.AgreementItemTitle>
                <S.SectionText>
                  피보험자의 질병·상해에 관한 정보(진료기록, 상병명, 기왕증,
                  흡연 여부 등), 교통법규 위반정보
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.provision2}
                    onChange={() => handleCheck("provision2")}
                  />
                  <S.CheckboxCustom checked={agreements.provision2}>
                    {agreements.provision2 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 민감정보 수집·이용에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>개인(신용)정보</S.AgreementItemTitle>
                <S.SectionText>
                  <strong>일반개인정보</strong>
                  <br />
                  성명, 주소, 생년월일, 이메일, 네이버ID, 유·무선 전화번호,
                  성별, 직업, 국내거소신고번호, 외국인체류 자격·코드,
                  전문보험계약자(보험설계사·보험대리점·보험중개사 등)의 정보,
                  사업자 등록증상의 정보, 법률 및 국제협약 등의 의무이행을 위한
                  정보, CI, 걸음 수 정보
                  <br />
                  <br />
                  <strong>신용거래정보</strong>
                  <br />
                  보험계약정보(상품종류, 기간, 보험가입금액 등),
                  보험금정보(보험금 지급사유, 지급금액, 사고정보 등), 계약 전
                  알릴 의무사항(취미 등)
                  <br />
                  <br />
                  <strong>신용능력정보</strong>
                  <br />
                  소득 및 재산 정보, 보험가입물건 정보(피보험차량정보 등)
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.provision3}
                    onChange={() => handleCheck("provision3")}
                  />
                  <S.CheckboxCustom checked={agreements.provision3}>
                    {agreements.provision3 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 개인신용정보 제공에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.SectionText>
                업무위탁을 목적으로 개인(신용)정보 처리하는 경우 별도의 동의
                없이 업무 수탁자에게 귀하의 정보를 제공할 수 있습니다. (홈페이지
                [www.idbins.com]에서 확인 가능)
              </S.SectionText>
            </S.SectionContent>
          )}
        </S.Section>

        {/* 섹션 2-1: 국외 제3자 제공에 관한 사항 */}
        <S.Section>
          <S.SectionHeader onClick={() => toggleSection("section2_1")}>
            <S.SectionTitle>2-1. 국외 제3자 제공에 관한 사항</S.SectionTitle>
            {sections.section2_1 ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </S.SectionHeader>

          {sections.section2_1 && (
            <S.SectionContent>
              <S.SectionSubtitle>제공받는 자</S.SectionSubtitle>
              <S.SectionText>국외 재보험사</S.SectionText>

              <S.SectionSubtitle>제공받는 자의 이용목적</S.SectionSubtitle>
              <S.SectionText>
                보험계약 요율산출·(공동)인수여부 판단, 법률 및 국제협약 등의
                의무이행
              </S.SectionText>

              <S.SectionSubtitle>보유 및 이용기간</S.SectionSubtitle>
              <S.SectionText>동의일로부터 1년까지</S.SectionText>

              <S.SectionSubtitle>제공 항목</S.SectionSubtitle>

              <S.AgreementItem>
                <S.AgreementItemTitle>개인(신용)정보</S.AgreementItemTitle>
                <S.SectionText>
                  <strong>일반개인정보</strong>
                  <br />
                  성명, 연령, 성별, 사업자등록증상의 정보
                  <br />
                  <br />
                  <strong>신용거래정보</strong>
                  <br />
                  보험계약정보(상품종류, 기간 등), 보험금정보(사고정보, 지급금액
                  등)
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.overseas}
                    onChange={() => handleCheck("overseas")}
                  />
                  <S.CheckboxCustom checked={agreements.overseas}>
                    {agreements.overseas && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 개인신용정보 제공에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>
            </S.SectionContent>
          )}
        </S.Section>

        {/* 섹션 3: 조회에 관한 사항 */}
        <S.Section>
          <S.SectionHeader onClick={() => toggleSection("section3")}>
            <S.SectionTitle>3. 조회에 관한 사항</S.SectionTitle>
            {sections.section3 ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </S.SectionHeader>

          {sections.section3 && (
            <S.SectionContent>
              <S.SectionSubtitle>조회 대상 기관</S.SectionSubtitle>
              <S.SectionText>
                종합신용정보집중기관, 보험요율산출기관, 국토교통부,
                생명·손해보험협회, 자동차 제조회사
              </S.SectionText>

              <S.SectionSubtitle>조회 목적</S.SectionSubtitle>
              <S.SectionText>
                종합신용정보집중기관·보험요율산출기관 ·국토교통부 :
                보험계약상담, 보험계약 인수여부 결정을 위한 판단, 보험 가입한도
                조회, 실손의료보험계약·기타손해보험계약 등 실제 발생하는 손해를
                보상하는 실손형 보험의 중복가입 확인, 새로운 보험계약 체결 시
                기존 보험계약과의 중요사항 비교설명
                <br />
                생명·손해보험협회 : 전문보험계약자 확인
                <br />
                자동차 제조회사 : 차량모델, 부속장치, 주행거리정보, 커넥티드카
                가입정보 확인
              </S.SectionText>

              <S.SectionSubtitle>조회 동의의 효력기간</S.SectionSubtitle>
              <S.SectionText>
                동의일로부터 보험계약의 청약 시까지(최대 1년)
              </S.SectionText>

              <S.SectionSubtitle>조회 항목</S.SectionSubtitle>

              <S.AgreementItem>
                <S.AgreementItemTitle>고유식별정보</S.AgreementItemTitle>
                <S.SectionText>
                  주민등록번호, 운전면허번호, 외국인등록번호, 여권번호
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.inquiry1}
                    onChange={() => handleCheck("inquiry1")}
                  />
                  <S.CheckboxCustom checked={agreements.inquiry1}>
                    {agreements.inquiry1 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 고유식별정보 조회에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>민감정보</S.AgreementItemTitle>
                <S.SectionText>
                  피보험자의 질병·상해에 관한 정보(진료기록, 상병명, 기왕증,
                  흡연 여부 등), 교통법규 위반정보
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.inquiry2}
                    onChange={() => handleCheck("inquiry2")}
                  />
                  <S.CheckboxCustom checked={agreements.inquiry2}>
                    {agreements.inquiry2 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 민감정보 조회에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>

              <S.AgreementItem>
                <S.AgreementItemTitle>개인(신용)정보</S.AgreementItemTitle>
                <S.SectionText>
                  <strong>일반개인정보</strong>
                  <br />
                  성명, 국내거소신고번호,
                  전문보험계약자(보험설계사·보험대리점·보험중개사 등)의 정보,
                  사업자등록증상의 정보, 법률 및 국제협약 등의 의무이행을 위한
                  정보, 주행거리정보, 커넥티드카 가입정보
                  <br />
                  <br />
                  <strong>신용거래정보</strong>
                  <br />
                  보험계약정보(상품종류, 기간, 보험가입금액 등),
                  보험금정보(보험금 지급사유, 지급금액, 사고정보 등), 계약 전
                  알릴 의무사항(취미 등), 보험료
                  <br />
                  <br />
                  <strong>신용능력정보</strong>
                  <br />
                  소득 및 재산 정보
                  <br />
                  <br />
                  <strong>공공정보</strong>
                  <br />
                  군운전경력정보, 실명확인증표 정보, 보험가입물건
                  정보(피보험자차량 정보 등)
                </S.SectionText>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={agreements.inquiry3}
                    onChange={() => handleCheck("inquiry3")}
                  />
                  <S.CheckboxCustom checked={agreements.inquiry3}>
                    {agreements.inquiry3 && <Check size={16} />}
                  </S.CheckboxCustom>
                  <span>위 개인신용정보 조회에 동의하십니까?</span>
                </S.CheckboxLabel>
              </S.AgreementItem>
            </S.SectionContent>
          )}
        </S.Section>
      </S.AgreementContent>

      <S.ButtonContainer>
        <S.CancelButton onClick={() => navigate(-1)}>취소</S.CancelButton>
        <S.SubmitButton onClick={handleSubmit}>
          동의하고 계속하기
        </S.SubmitButton>
      </S.ButtonContainer>
    </S.AgreementContainer>
  );
};

export default Agreement;
