const insuranceDetailsData = [
  // ==== CANCER (4개) ====
  {
    id: 1,
    category: "CANCER",
    coverage: {
      guaranteeAmount: "암 진단금 3천만원, 고액암 5천만원",
      exclusions: "계약 후 90일 내 암확진은 보장 제외",
      specialClauses: "항암치료비 50% 추가, 재진단암 간병비",
    },
    premiumDetails: {
      planExamples: "20대 25,000원 / 30대 35,000원 / 40대 50,000원",
      paymentCycle: "월납, 연납",
      waiverCondition: "암 진단 시 납입면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1588-0001",
      faceToFaceConsult: "설계사 방문 가능",
      neededDocuments: "간편심사, 과거암이력 시 추가서류",
    },
  },
  {
    id: 2,
    category: "CANCER",
    coverage: {
      guaranteeAmount: "중증암 5천만원, 일반암 3천만원",
      exclusions: "유사암(갑상선 등)은 축소보장",
      specialClauses: "항암주사비 최대 1년, 호스피스 300만원",
    },
    premiumDetails: {
      planExamples: "기본 30,000원 / 고급 50,000원 (35세)",
      paymentCycle: "월납 전용",
      waiverCondition: "암 확정 시 전액 면제",
      refundType: "일부환급형(만기 30%)",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "02-1234-5678",
      faceToFaceConsult: "지점 필수 방문",
      neededDocuments: "건강검진서(대장내시경 등)",
    },
  },
  {
    id: 3,
    category: "CANCER",
    coverage: {
      guaranteeAmount: "유방암·폐암 4천만원, 기타암 2천만원",
      exclusions: "종양 판정 후 가입은 제외",
      specialClauses: "표적치료약 80% 보장, 말기암 간병비 월 50만원",
    },
    premiumDetails: {
      planExamples: "25세 20,000원 / 45세 45,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "암 진단 시 남은 기간 면제",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1577-9999",
      faceToFaceConsult: "원하는 경우 설계사 연결",
      neededDocuments: "표준 심사서류",
    },
  },
  {
    id: 4,
    category: "CANCER",
    coverage: {
      guaranteeAmount: "재진단암 추가 2천만원, 일반암 3천만원",
      exclusions: "90일 이내 진단, 고의 축소고지 시 거절",
      specialClauses: "암수술비 2배, 항암방사선치료 담보",
    },
    premiumDetails: {
      planExamples: "기본플랜 28,000원 / 슈퍼플랜 55,000원",
      paymentCycle: "월납",
      waiverCondition: "암 확정 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-3000",
      faceToFaceConsult: "병원 제휴상담 가능",
      neededDocuments: "무진단형, 단 고액보장 시 건강검진 필요",
    },
  },

  // ==== SURGERY (4개) ====
  {
    id: 5,
    category: "SURGERY",
    coverage: {
      guaranteeAmount: "수술비(일반) 2천만원, 로봇수술 5천만원",
      exclusions: "미용 목적 성형 제외",
      specialClauses: "암·뇌·심장 수술 시 2배 지급, 재수술 50% 추가",
    },
    premiumDetails: {
      planExamples: "기본 33,000원 / 실속 45,000원 / 고급 70,000원",
      paymentCycle: "월납, 연납",
      waiverCondition: "특정중증수술 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1588-9000",
      faceToFaceConsult: "수술전문 상담 가능",
      neededDocuments: "최근 1년 수술이력 서류",
    },
  },
  {
    id: 6,
    category: "SURGERY",
    coverage: {
      guaranteeAmount: "수술비 최대 3천만원, 입원일당 5만원",
      exclusions: "정신과 수술, 미용 성형 제외",
      specialClauses: "복강경·관절수술 특약, 재활치료 지원",
    },
    premiumDetails: {
      planExamples: "20대 25,000원 / 40대 40,000원",
      paymentCycle: "월납 전용",
      waiverCondition: "뇌·심장 수술 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1544-8000",
      faceToFaceConsult: "지점 방문 필요",
      neededDocuments: "수술기록 (과거 3년)",
    },
  },
  {
    id: 7,
    category: "SURGERY",
    coverage: {
      guaranteeAmount: "입원일당 10만원, 수술비 2천만원",
      exclusions: "과거 중증수술 이력은 심사 후 제한",
      specialClauses: "로봇수술 특약 별도 가입, 무사고 시 환급 옵션",
    },
    premiumDetails: {
      planExamples: "기본형 30,000원 / 실속형 45,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "암수술 확정 시 납면제",
      refundType: "일부환급형(10%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-5454",
      faceToFaceConsult: "수술케어센터 상담",
      neededDocuments: "과거수술 확인서, 의사소견서",
    },
  },
  {
    id: 8,
    category: "SURGERY",
    coverage: {
      guaranteeAmount: "수술비 1천만원, 추가재활치료 500만원",
      exclusions: "산재 처리 대상 수술은 제외",
      specialClauses: "입원일당×(수술난이도계수), 1인실 특약",
    },
    premiumDetails: {
      planExamples: "20대 20,000원 / 30대 28,000원 / 50대 45,000원",
      paymentCycle: "월납",
      waiverCondition: "중증수술(뇌·심장) 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1688-0909",
      faceToFaceConsult: "오프라인 병원 제휴",
      neededDocuments: "수술병원 기록지",
    },
  },

  // ==== LIFE (4개) ====
  {
    id: 9,
    category: "LIFE",
    coverage: {
      guaranteeAmount: "사망 시 유족보험금 1억원",
      exclusions: "계약전 증상 고지 누락 시 보장 제한",
      specialClauses: "중증질환 특약 가입 가능, 생활자금 선지급",
    },
    premiumDetails: {
      planExamples: "기본 40,000원 / 고액 60,000원 (30세 남)",
      paymentCycle: "월납, 연납",
      waiverCondition: "장해등급 1급 시 납면제",
      refundType: "일부환급형(만기 50%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1599-1111",
      faceToFaceConsult: "상속설계사 방문 상담",
      neededDocuments: "신분증, 건강고지서",
    },
  },
  {
    id: 10,
    category: "LIFE",
    coverage: {
      guaranteeAmount: "종신 보장 2억원, 해지환급 50%",
      exclusions: "위험직종(스턴트맨 등) 별도심사",
      specialClauses: "암사망 시 2배보상, 배우자 전환 옵션",
    },
    premiumDetails: {
      planExamples: "정년도래형(60세) 월 60,000원, 70세 만기형 월 45,000원",
      paymentCycle: "월납",
      waiverCondition: "중증질환 시 납입면제",
      refundType: "변액형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1688-8888",
      faceToFaceConsult: "종신전문 설계사 필요",
      neededDocuments: "재산상속 관련 문서(선택)",
    },
  },
  {
    id: 11,
    category: "LIFE",
    coverage: {
      guaranteeAmount: "사망시 유가족 생활비 월 200만원(10년)",
      exclusions: "계약일 2년 내 자살 보장 제외",
      specialClauses: "뇌졸중 사망 2배, 납입면제 특약",
    },
    premiumDetails: {
      planExamples: "기본형 55,000원 / 종합형 75,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "뇌·심장 중증진단 시 면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-555-7777",
      faceToFaceConsult: "재무설계사 대면",
      neededDocuments: "가족관계증명서, 신분증",
    },
  },
  {
    id: 12,
    category: "LIFE",
    coverage: {
      guaranteeAmount: "종신 사망보장 5억원, 상속 대비 가능",
      exclusions: "고령자(70세↑) 가입 제한",
      specialClauses: "유언대용신탁 연계, 변액투자 가능",
    },
    premiumDetails: {
      planExamples: "연납 시 연 1백만원 (예시), 고액플랜 가능",
      paymentCycle: "월납, 연납",
      waiverCondition: "장해 80% 이상 시 납면제",
      refundType: "변액 종신",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1670-6666",
      faceToFaceConsult: "VIP센터 전담",
      neededDocuments: "재산 증빙(상속세 대비), 건강진단서",
    },
  },

  // ==== DRIVER (4개) ====
  {
    id: 13,
    category: "DRIVER",
    coverage: {
      guaranteeAmount: "교통사고 합의금 최대 3천만원, 변호사비 300만원",
      exclusions: "음주·뺑소니 사고 벌금 담보 제외",
      specialClauses: "가족 동일 보장, 스쿨존 사고 2배",
    },
    premiumDetails: {
      planExamples: "기본형 10,000원 / 확장형 20,000원",
      paymentCycle: "월납",
      waiverCondition: "상해 80% 이상 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1588-1234",
      faceToFaceConsult: "자동차딜러 제휴",
      neededDocuments: "운전면허증",
    },
  },
  {
    id: 14,
    category: "DRIVER",
    coverage: {
      guaranteeAmount: "운전자 벌금 최대 2천만원, 형사합의금 3천만원",
      exclusions: "무면허·음주운전은 일부 보장 제외",
      specialClauses: "자전거 운전도 커버, 면허정지 위로금",
    },
    premiumDetails: {
      planExamples: "월 12,000원 (30대), 15,000원 (40대)",
      paymentCycle: "월납",
      waiverCondition: "교통사고로 1급장해 시 면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1544-2222",
      faceToFaceConsult: "지점 등록 후 가능",
      neededDocuments: "면허증 사본, 차량등록증",
    },
  },
  {
    id: 15,
    category: "DRIVER",
    coverage: {
      guaranteeAmount: "오토바이 사고 포함, 벌금 2천만원",
      exclusions: "고의사고, 공소시효 지난 사고 제외",
      specialClauses: "배달 라이더도 가입 가능, 합의금 보상",
    },
    premiumDetails: {
      planExamples: "배달전용 30,000원 / 일반 20,000원",
      paymentCycle: "월납",
      waiverCondition: "중증후유장해 70% 이상",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-2222",
      faceToFaceConsult: "라이더센터",
      neededDocuments: "오토바이 면허증",
    },
  },
  {
    id: 16,
    category: "DRIVER",
    coverage: {
      guaranteeAmount: "운전자 변호사비 500만원, 교통사고 처리비 3천만원",
      exclusions: "음주·약물운전 제외",
      specialClauses: "블랙박스 설치 시 보험료 할인, 가족 운전 동일",
    },
    premiumDetails: {
      planExamples: "기본형 15,000원 / 플러스형 25,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "없음 (상해 장해 시 보장 유지)",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1522-9000",
      faceToFaceConsult: "딜러사 연계",
      neededDocuments: "면허증, 차량번호",
    },
  },

  // ==== FIRE (4개) ====
  {
    id: 17,
    category: "FIRE",
    coverage: {
      guaranteeAmount: "주택화재 3억원, 도난 500만원",
      exclusions: "고의 방화, 지진은 특약 가입 필요",
      specialClauses: "임시거주비 월 70만원(최대3개월), 가재도구 망실보상",
    },
    premiumDetails: {
      planExamples: "아파트(20평) 연 30,000원 / 단독(30평) 연 50,000원",
      paymentCycle: "연납",
      waiverCondition: "없음",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1600-2300",
      faceToFaceConsult: "건물평가 후 지점방문",
      neededDocuments: "등기부등본",
    },
  },
  {
    id: 18,
    category: "FIRE",
    coverage: {
      guaranteeAmount: "화재폭발 2억원, 임시거주비 월 50만원",
      exclusions: "30년 이상 노후주택 할증, 지진 제외",
      specialClauses: "수도동파, 누수 보상, 도난 특약 가능",
    },
    premiumDetails: {
      planExamples: "연 35,000원(20평) / 50,000원(30평)",
      paymentCycle: "연납(자동이체)",
      waiverCondition: "없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1688-6001",
      faceToFaceConsult: "설계사 방문",
      neededDocuments: "건물 등기부등본, 임대차계약서",
    },
  },
  {
    id: 19,
    category: "FIRE",
    coverage: {
      guaranteeAmount: "상가 화재 5억원, 폭발 3억원",
      exclusions: "불법건축물, 창고형 무허가 건물 제외",
      specialClauses: "노후전선 합선사고 보장, 풍수해 임시거주비",
    },
    premiumDetails: {
      planExamples: "소상공인상가 연 60,000원 / 대형상가 연 120,000원",
      paymentCycle: "연납, 분기납",
      waiverCondition: "없음",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1555-8080",
      faceToFaceConsult: "상가 전문 설계사",
      neededDocuments: "사업자등록증, 건물내역",
    },
  },
  {
    id: 20,
    category: "FIRE",
    coverage: {
      guaranteeAmount: "화재로 인한 인명 피해 1억원, 가재도구 5천만원",
      exclusions: "방화, 고의 파손 등은 면책",
      specialClauses: "지진특약 별도, 소방점검 할인",
    },
    premiumDetails: {
      planExamples: "연 40,000원(주택), 70,000원(단독주택 대형)",
      paymentCycle: "연납",
      waiverCondition: "없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1800-3300",
      faceToFaceConsult: "건물실사 후 결정",
      neededDocuments: "건물 사진, 등기부등본",
    },
  },

  // ==== DENTAL (4개) ====
  {
    id: 21,
    category: "DENTAL",
    coverage: {
      guaranteeAmount: "치아 임플란트 200만원, 스케일링 연1회",
      exclusions: "미용 교정치료 제외",
      specialClauses: "충치·보철 정액 지급, 치주질환 커버",
    },
    premiumDetails: {
      planExamples: "20대 12,000원 / 30대 15,000원 / 40대 20,000원",
      paymentCycle: "월납",
      waiverCondition: "중증질환 시 납면제 없음",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-111-9999",
      faceToFaceConsult: "치과병원 제휴",
      neededDocuments: "과거치과 이력",
    },
  },
  {
    id: 22,
    category: "DENTAL",
    coverage: {
      guaranteeAmount: "임플란트 최대 300만원, 브릿지 150만원",
      exclusions: "사고 외 미용성형은 제외",
      specialClauses: "잇몸질환 단계별 보장, 교정치료 특약",
    },
    premiumDetails: {
      planExamples: "기본형 18,000원 / 확장형 28,000원",
      paymentCycle: "월납",
      waiverCondition: "암 진단 시 납면제 없음(치아보험 특성)",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1544-8080",
      faceToFaceConsult: "지점 상담 후 가입",
      neededDocuments: "치과진단서, 과거 치료내역",
    },
  },
  {
    id: 23,
    category: "DENTAL",
    coverage: {
      guaranteeAmount: "스케일링 연2회, 충치치료 50% 보장",
      exclusions: "치주질환 말기, 무치악 제외",
      specialClauses: "임플란트 1회당 200만원 한도, 틀니 커버",
    },
    premiumDetails: {
      planExamples: "20대 15,000원 / 40대 25,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "없음",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-7777",
      faceToFaceConsult: "치아전담 설계사",
      neededDocuments: "구강검진표(최근 1년)",
    },
  },
  {
    id: 24,
    category: "DENTAL",
    coverage: {
      guaranteeAmount: "치아교정 일부 30%, 임플란트 1회 250만원",
      exclusions: "심미 목적 교정, 잇몸성형 제외",
      specialClauses: "발치, 신경치료 정액보장, 크라운 70% 지원",
    },
    premiumDetails: {
      planExamples: "기본교정형 30,000원 / 종합 45,000원",
      paymentCycle: "월납",
      waiverCondition: "중증치과수술 시 납면제 없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1588-0505",
      faceToFaceConsult: "치과 제휴센터 방문",
      neededDocuments: "과거 치료기록",
    },
  },

  // ==== DEMENTIA (4개) ====
  {
    id: 25,
    category: "DEMENTIA",
    coverage: {
      guaranteeAmount: "치매 등급별 월 80만원, 중증치매 150만원",
      exclusions: "과거 뇌질환 이력 제한",
      specialClauses: "방문간호 연2회, 보호자 심리상담",
    },
    premiumDetails: {
      planExamples: "기본간병 40,000원 / 프리미엄간병 70,000원 (60세)",
      paymentCycle: "월납",
      waiverCondition: "치매 진단 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1899-1212",
      faceToFaceConsult: "노인복지센터 상담",
      neededDocuments: "간편심사 문진표, 과거진단서",
    },
  },
  {
    id: 26,
    category: "DEMENTIA",
    coverage: {
      guaranteeAmount: "경도치매 월 50만원, 중증치매 월 100만원",
      exclusions: "유전성 치매 가족력은 별도심사",
      specialClauses: "인지재활치료비 연간 200만원, 간병인 연계",
    },
    premiumDetails: {
      planExamples: "60세 여성 50,000원 / 70세 80,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "치매등급 2 이상 시 납면제",
      refundType: "일부환급형(만기 30%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1544-9595",
      faceToFaceConsult: "치매전문센터 방문",
      neededDocuments: "과거 병력기록, 가족력 설문",
    },
  },
  {
    id: 27,
    category: "DEMENTIA",
    coverage: {
      guaranteeAmount: "치매진단금 3천만원, 중증치매 간병비 월 120만원",
      exclusions: "파킨슨·뇌졸중 병력은 일부 제한",
      specialClauses: "배회감지기 지원, MCI(경도인지) 선지급 50%",
    },
    premiumDetails: {
      planExamples: "기본형 45,000원 / 고급형 70,000원",
      paymentCycle: "월납, 연납",
      waiverCondition: "중증치매 진단 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1688-7878",
      faceToFaceConsult: "전담 설계사 방문",
      neededDocuments: "신경과 진단기록, 문진표",
    },
  },
  {
    id: 28,
    category: "DEMENTIA",
    coverage: {
      guaranteeAmount: "간병비 월 100만원(3년), 중증치매 간병센터 비용",
      exclusions: "치매 가족력 있으면 보험료 할증",
      specialClauses: "인지재활치료, 치매안심센터 연계서비스",
    },
    premiumDetails: {
      planExamples: "60대 55,000원 / 70대 85,000원",
      paymentCycle: "월납",
      waiverCondition: "치매등급 2 이상 시 면제",
      refundType: "일부환급형(15%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-7777-5555",
      faceToFaceConsult: "노인전문센터",
      neededDocuments: "간편심사, 뇌MRI(옵션)",
    },
  },

  // ==== NEWBORN (4개) ====
  {
    id: 29,
    category: "NEWBORN",
    coverage: {
      guaranteeAmount: "임신 중 합병증 2천만원, 신생아 입원 3천만원",
      exclusions: "임신 전 고위험진단(고혈압, 당뇨) 추가심사",
      specialClauses: "제왕절개 200만원, 미숙아 인큐베이터 80% 지원",
    },
    premiumDetails: {
      planExamples: "임신 초기: 월 40,000원 / 20주 이후: 월 55,000원",
      paymentCycle: "월납",
      waiverCondition: "위중산모진단 시 납면제",
      refundType: "일부환급(출산 후 10%)",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1544-7600 (산모전용)",
      faceToFaceConsult: "산부인과 제휴 상담",
      neededDocuments: "임신확인서, 혈압/당뇨 검사",
    },
  },
  {
    id: 30,
    category: "NEWBORN",
    coverage: {
      guaranteeAmount: "신생아 미숙아 치료비 5천만원, 태아중증질환 3천만원",
      exclusions: "선천성 질환 중 고위험분류시 거절",
      specialClauses: "인큐베이터·NICU비용 80% 커버, 산후조리원 특약",
    },
    premiumDetails: {
      planExamples: "만0세 30,000원 / 만1세 35,000원",
      paymentCycle: "월납",
      waiverCondition: "중증질환 진단 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-2222-3333",
      faceToFaceConsult: "어린이전문 설계사",
      neededDocuments: "출생증명서, 가족관계증명서",
    },
  },
  {
    id: 31,
    category: "NEWBORN",
    coverage: {
      guaranteeAmount: "산모 위험담보 2천만원, 아기 입원일당 5만원",
      exclusions: "출산 전 진단된 기형아 위험은 제외",
      specialClauses: "산후조리원 이용비 30%, 배우자 입원일당 특약",
    },
    premiumDetails: {
      planExamples: "임신 12주 이전 38,000원 / 12주 이후 50,000원",
      paymentCycle: "월납",
      waiverCondition: "제왕절개 시 납입면제 없음",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1688-8080",
      faceToFaceConsult: "산과전문지점",
      neededDocuments: "임신확인서, 산모기록지",
    },
  },
  {
    id: 32,
    category: "NEWBORN",
    coverage: {
      guaranteeAmount: "출생 직후 질환 3천만원, 영유아검진 비용 연간 1회",
      exclusions: "조산 32주 미만은 추가심사",
      specialClauses: "쌍둥이 출산 시 1인 추가 할인, 예방접종비 일부 환급",
    },
    premiumDetails: {
      planExamples: "월 45,000원 (임신20주 기준)",
      paymentCycle: "월납",
      waiverCondition: "고위험산모 진단 시 납면제",
      refundType: "일부환급형(5%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1555-5252",
      faceToFaceConsult: "맘케어센터 연계",
      neededDocuments: "임신주수 확인서",
    },
  },

  // ==== HEALTHCARE (4개) ====
  {
    id: 33,
    category: "HEALTHCARE",
    coverage: {
      guaranteeAmount: "표준 실손, 급여·비급여 연간 5천만원",
      exclusions: "비급여 미용성형, 해외치료 제외",
      specialClauses: "도수치료 연 50회, 약국 본인부담금 보장",
    },
    premiumDetails: {
      planExamples: "20대 20,000원 / 30대 28,000원 / 40대 35,000원",
      paymentCycle: "월납",
      waiverCondition: "암·뇌·심장 진단 시 납면제",
      refundType: "무환급형 (실손)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "080-123-1234",
      faceToFaceConsult: "선택 가능",
      neededDocuments: "간편 설문",
    },
  },
  {
    id: 34,
    category: "HEALTHCARE",
    coverage: {
      guaranteeAmount: "입원일당 8만원, 암입원 추가 5만원, 중환자실 5만원",
      exclusions: "기존 2개 이상 실손 가입 중복 제한",
      specialClauses: "한방치료 일부 보장, 중증질환 본인부담 0원 특약",
    },
    premiumDetails: {
      planExamples: "20대 남 25,000원 / 30대 여 30,000원 / 50대 남 45,000원",
      paymentCycle: "월납 전용",
      waiverCondition: "중증질환 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-1122",
      faceToFaceConsult: "지점 연결",
      neededDocuments: "간편심사",
    },
  },
  {
    id: 35,
    category: "HEALTHCARE",
    coverage: {
      guaranteeAmount: "상급병실 차액, MRI·CT 비급여 90% 보장",
      exclusions: "미용 목적 시술 제외",
      specialClauses: "4세대 실손구조, 과다 이용 시 할증",
    },
    premiumDetails: {
      planExamples: "기본 33,000원 / 실속 45,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "암·뇌·심장 시 납면제",
      refundType: "무환급",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "02-5555-9999",
      faceToFaceConsult: "대형병원 연계",
      neededDocuments: "건강고지",
    },
  },
  {
    id: 36,
    category: "HEALTHCARE",
    coverage: {
      guaranteeAmount: "중증질환(암·뇌·심장) 연간 1억원, 일반질환 5천만원",
      exclusions: "산재사고, 고의사고 제외",
      specialClauses: "중환자실 2배, 재진 입원 간병비 50%",
    },
    premiumDetails: {
      planExamples: "30대 40,000원 / 50대 60,000원",
      paymentCycle: "월납",
      waiverCondition: "중증진단 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1577-9998",
      faceToFaceConsult: "선택적 방문",
      neededDocuments: "표준형 간편심사",
    },
  },

  // ==== CHILD (4개) ====
  {
    id: 37,
    category: "CHILD",
    coverage: {
      guaranteeAmount: "어린이 상해·질병 입원일당 5만원, 수술비 500만원",
      exclusions: "태아보험 전환시 특약 별도",
      specialClauses: "소아암 진단금 3천만원, 재진단암 50% 추가",
    },
    premiumDetails: {
      planExamples: "만0세 20,000원 / 만5세 28,000원 / 만10세 35,000원",
      paymentCycle: "월납",
      waiverCondition: "소아암·중증질환 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1577-7000 (어린이전용)",
      faceToFaceConsult: "없음(완전자동)",
      neededDocuments: "가족관계증명서",
    },
  },
  {
    id: 38,
    category: "CHILD",
    coverage: {
      guaranteeAmount: "어린이 교통사고 2천만원, 골절 50만원",
      exclusions: "6개월 내 입원이력 심사",
      specialClauses: "학교·학원 사고 2배, 아토피 특약",
    },
    premiumDetails: {
      planExamples: "만3세 27,000원 / 만7세 32,000원 / 만12세 38,000원",
      paymentCycle: "월납",
      waiverCondition: "소아암, 뇌전증 진단 시 면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1670-2002",
      faceToFaceConsult: "어린이전문 설계사",
      neededDocuments: "등본, 과거 병력",
    },
  },
  {
    id: 39,
    category: "CHILD",
    coverage: {
      guaranteeAmount: "어린이 암 4천만원, 백혈병 5천만원",
      exclusions: "계약 후 90일내 진단은 보장제외",
      specialClauses: "재진단 시 50% 추가, 항암치료비 월 50만원",
    },
    premiumDetails: {
      planExamples: "0세 30,000원 / 10세 40,000원",
      paymentCycle: "월납",
      waiverCondition: "암 진단 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "080-212-1212",
      faceToFaceConsult: "소아암센터 연계",
      neededDocuments: "아이건강검진표",
    },
  },
  {
    id: 40,
    category: "CHILD",
    coverage: {
      guaranteeAmount: "청소년 상해 입원비 5만원, 수술비 300만원",
      exclusions: "15세 초과 가입 제한",
      specialClauses: "학교 사고 2배, 운동부 활동 특약",
    },
    premiumDetails: {
      planExamples: "기본 25,000원 / 확장 35,000원",
      paymentCycle: "월납",
      waiverCondition: "뇌 손상 진단 시 납면제",
      refundType: "무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1599-1112",
      faceToFaceConsult: "청소년전문 상담사",
      neededDocuments: "학생증, 과거병력",
    },
  },

  // ==== PET (4개) ====
  {
    id: 41,
    category: "PET",
    coverage: {
      guaranteeAmount: "반려동물 수술비 70%, 입원비 연300만원",
      exclusions: "10세 이상 노령견, 미등록동물 제외",
      specialClauses: "중성화수술 1회 지원, 타인 배상책임 1천만원",
    },
    premiumDetails: {
      planExamples: "소형견 25,000원 / 중형견 30,000원 / 대형 40,000원",
      paymentCycle: "월납",
      waiverCondition: "없음(간편심사)",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1588-9090",
      faceToFaceConsult: "없음 (전자서명)",
      neededDocuments: "동물등록증, 예방접종증명",
    },
  },
  {
    id: 42,
    category: "PET",
    coverage: {
      guaranteeAmount: "반려묘 치료비 80%, 연간 한도 200만원",
      exclusions: "백신 미접종, 8세 이상 고양이 심사",
      specialClauses: "슬관절 탈구, 피부질환 특약, 펫장례 지원",
    },
    premiumDetails: {
      planExamples: "기본 22,000원 / 확장 32,000원",
      paymentCycle: "월납",
      waiverCondition: "없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1666-9009",
      faceToFaceConsult: "없음",
      neededDocuments: "반려묘 등록, 접종이력",
    },
  },
  {
    id: 43,
    category: "PET",
    coverage: {
      guaranteeAmount: "강아지 상해수술비 60%, 통원비 50% 한도",
      exclusions: "맹견(도사, 핏불 등) 제외",
      specialClauses: "명절 펫호텔 할인, 치매특약",
    },
    premiumDetails: {
      planExamples: "소형견 20,000원 / 중견 25,000원",
      paymentCycle: "월납",
      waiverCondition: "적용 없음",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1670-4444",
      faceToFaceConsult: "동물병원 제휴",
      neededDocuments: "동물등록증",
    },
  },
  {
    id: 44,
    category: "PET",
    coverage: {
      guaranteeAmount: "노령동물(10세이상) 수술비 50%, 연간200만원",
      exclusions: "15세 이상 가입불가, 공격성 이력 제외",
      specialClauses: "펫로스 심리상담, 수술 후 재활비 30% 지원",
    },
    premiumDetails: {
      planExamples: "노령플랜 35,000원 / 일반 25,000원",
      paymentCycle: "월납",
      waiverCondition: "해당 없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "02-9999-8888",
      faceToFaceConsult: "펫케어오피스",
      neededDocuments: "수의사 발행 건강증명서",
    },
  },

  // ==== NURSING (4개) ====
  {
    id: 45,
    category: "NURSING",
    coverage: {
      guaranteeAmount: "장기요양 1~5등급 월80만원, 치매 2천만원",
      exclusions: "뇌졸중 이력, 파킨슨병 일부 제한",
      specialClauses: "방문요양 쿠폰 연2회, 간호인력지원센터 연계",
    },
    premiumDetails: {
      planExamples: "기본간병 40,000원 / 프리미엄간병 70,000원 (60세)",
      paymentCycle: "월납",
      waiverCondition: "치매 진단 시 납면제",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1899-1212",
      faceToFaceConsult: "노인복지센터 상담",
      neededDocuments: "간편심사 문진표, 과거진단서",
    },
  },
  {
    id: 46,
    category: "NURSING",
    coverage: {
      guaranteeAmount: "간병비(장기요양 1~3등급) 월100만원, 4~5등급 70만원",
      exclusions: "기타 요양원 사고는 별도특약",
      specialClauses: "시설입소 보증금 파손 담보, 방문간호주1회",
    },
    premiumDetails: {
      planExamples: "기본 45,000원 / 확장 65,000원 (65세)",
      paymentCycle: "월납",
      waiverCondition: "중증치매 시 납면제",
      refundType: "일부환급형(20%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1544-7770",
      faceToFaceConsult: "요양전문 설계사",
      neededDocuments: "장기요양 인정서",
    },
  },
  {
    id: 47,
    category: "NURSING",
    coverage: {
      guaranteeAmount: "요양병원 입원비 80%, 간병인비 월30만원",
      exclusions: "중증정신질환, 알코올성 치매 제외",
      specialClauses: "방문재활치료, 복지용구 대여비",
    },
    premiumDetails: {
      planExamples: "60세 50,000원 / 70세 75,000원",
      paymentCycle: "월납, 분기납",
      waiverCondition: "간병등급1 이상",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1666-6060",
      faceToFaceConsult: "간병협회 연계",
      neededDocuments: "과거 요양병원 기록",
    },
  },
  {
    id: 48,
    category: "NURSING",
    coverage: {
      guaranteeAmount: "간편심사형: 장기요양 1등급 월100만원, 2등급 80만원",
      exclusions: "선천적 뇌질환, 치매가족력 심사",
      specialClauses: "납입면제(치매진단), 방문간호 2회/년",
    },
    premiumDetails: {
      planExamples: "간편형 55,000원 / 종합간병 85,000원",
      paymentCycle: "월납",
      waiverCondition: "치매 진단 시 전액면제",
      refundType: "일부환급형(10%)",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1577-5757",
      faceToFaceConsult: "간병센터",
      neededDocuments: "간편심사, 신분증",
    },
  },

  // ==== TRAVEL (4개) ====
  {
    id: 49,
    category: "TRAVEL",
    coverage: {
      guaranteeAmount: "해외여행 상해 1억원, 휴대품 파손 100만원",
      exclusions: "고위험레저(스카이다이빙 등) 특약 필요",
      specialClauses: "항공기 지연 20만원, 여권분실 재발급 5만원",
    },
    premiumDetails: {
      planExamples: "1주 1만원 / 2주 1.5만원 / 1달 3만원",
      paymentCycle: "일시납(출국 전)",
      waiverCondition: "여행 중 사고 시 납면제 개념 없음",
      refundType: "단기성 무배당",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1544-4000 (24시간)",
      faceToFaceConsult: "공항지점(인천/김해)",
      neededDocuments: "여권 사본, 항공권",
    },
  },
  {
    id: 50,
    category: "TRAVEL",
    coverage: {
      guaranteeAmount: "국내여행 상해 5천만원, 숙박연장비 20만원",
      exclusions: "위험레포츠 특약 미가입 시 제외",
      specialClauses: "자전거 여행 사고, 캠핑장 파손 보장",
    },
    premiumDetails: {
      planExamples: "단기 5천원 / 장기 1만원 (1주)",
      paymentCycle: "일시납",
      waiverCondition: "적용 없음",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1666-2002",
      faceToFaceConsult: "지역관광센터 연계",
      neededDocuments: "여행일정표",
    },
  },
  {
    id: 51,
    category: "TRAVEL",
    coverage: {
      guaranteeAmount: "장기 유학 1억원, 의료비 80% 보장",
      exclusions: "전쟁·테러 지역은 제외",
      specialClauses: "항공편 결항 숙박비 30만원, 분실도난 50만원",
    },
    premiumDetails: {
      planExamples: "6개월 9만원 / 1년 15만원",
      paymentCycle: "일시납(출국 전)",
      waiverCondition: "해외 치료 시 납면제 개념 없음",
      refundType: "단기형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-7777-0000",
      faceToFaceConsult: "유학원 제휴",
      neededDocuments: "유학비자 사본, 여권",
    },
  },
  {
    id: 52,
    category: "TRAVEL",
    coverage: {
      guaranteeAmount: "워홀(WorkingHoliday) 상해 8천만원, 휴대품 70만원",
      exclusions: "고위험 작업(광산,어선) 제외",
      specialClauses: "코로나 확진 취소비용 일부 보상, 통역지원 24시",
    },
    premiumDetails: {
      planExamples: "3개월 6만원 / 6개월 10만원",
      paymentCycle: "일시납",
      waiverCondition: "없음",
      refundType: "단기무배당형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1544-6060",
      faceToFaceConsult: "오프라인 센터 방문 가능",
      neededDocuments: "워홀비자, 여권",
    },
  },

  // ==== ETC (4개) ====
  {
    id: 53,
    category: "ETC",
    coverage: {
      guaranteeAmount: "골프장 상해 5천만원, 홀인원 비용 100만원",
      exclusions: "프로 선수, 고의 사고 제외",
      specialClauses: "장비 파손, 캐디피 포함, 라운드중 도난 커버",
    },
    premiumDetails: {
      planExamples: "연 30,000원 / 월 5,000원",
      paymentCycle: "연납, 월납",
      waiverCondition: "없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1670-7707",
      faceToFaceConsult: "골프장 제휴데스크",
      neededDocuments: "골프장 회원증(선택)",
    },
  },
  {
    id: 54,
    category: "ETC",
    coverage: {
      guaranteeAmount: "악기 파손 2천만원, 공연 중 분실 1천만원",
      exclusions: "노후 악기(50년↑) 감정평가 필요",
      specialClauses: "공연 중 상해 발생 시 2천만원, 대여 악기커버",
    },
    premiumDetails: {
      planExamples: "바이올린 연 50,000원 / 첼로 연 80,000원",
      paymentCycle: "연납",
      waiverCondition: "없음",
      refundType: "무배당",
    },
    applicationProcess: {
      onlinePossible: false,
      callCenter: "1899-1010",
      faceToFaceConsult: "예술인센터 상담",
      neededDocuments: "악기 감정서",
    },
  },
  {
    id: 55,
    category: "ETC",
    coverage: {
      guaranteeAmount: "이벤트·축제 배상책임 2억원, 장비 파손 1천만원",
      exclusions: "폭동·테러, 군사행위 제외",
      specialClauses: "임시시설 파손, 공연 무대사고 보장",
    },
    premiumDetails: {
      planExamples: "소규모행사(500명↓) 10만원 / 대규모(1천명↑) 20만원",
      paymentCycle: "일시납(행사 전)",
      waiverCondition: "이벤트 취소 시 보상 없음",
      refundType: "단기형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "1800-1234",
      faceToFaceConsult: "축제지원센터",
      neededDocuments: "행사계획서, 허가서",
    },
  },
  {
    id: 56,
    category: "ETC",
    coverage: {
      guaranteeAmount: "드론 파손 500만원, 배상책임 2천만원",
      exclusions: "무허가 비행, 군사구역 내 비행 사고 제외",
      specialClauses: "캠핑장비 도난 특약, 농작물재해 연결가능",
    },
    premiumDetails: {
      planExamples: "레저용 연 20,000원 / 촬영전문 연 40,000원",
      paymentCycle: "연납",
      waiverCondition: "없음",
      refundType: "무환급형",
    },
    applicationProcess: {
      onlinePossible: true,
      callCenter: "02-1111-8888",
      faceToFaceConsult: "드론센터 제휴",
      neededDocuments: "드론등록증, 조종자격증(전문가용)",
    },
  },
];

export default insuranceDetailsData;
