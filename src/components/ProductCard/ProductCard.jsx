import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./style";
import { useBookmarkStore } from "../../store/useBookmarkStore";

const baseUrl = import.meta.env.VITE_APP_S3_URL;

const companyLogos = {
  DB손해보험: `${baseUrl}/db.png`,
  한화손해보험: `${baseUrl}/hanwha.png`,
  흥국화재: `${baseUrl}/heongkuk.png`,
  현대해상: `${baseUrl}/hyundai.jpeg`,
  KB손해보험: `${baseUrl}/kb.png`,
  롯데손해보험: `${baseUrl}/lotte.png`,
  메리츠화재: `${baseUrl}/merits.png`,
  삼성화재: `${baseUrl}/samsung.png`,
};

const categoryMap = {
  CANCER: "암",
  SURGERY: "수술/입원",
  LIFE: "종신",
  DRIVER: "운전자/상해",
  FIRE: "주택화재",
  DENTAL: "치아",
  DEMENTIA: "치매",
  NEWBORN: "신생아",
  HEALTHCARE: "실손의료",
  CHILD: "어린이보험",
  PET: "반려동물보험",
  NURSING: "간병보험",
  TRAVEL: "여행자보험",
  ETC: "기타",
};

const ProductCard = ({ insurance }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { toggleBookmark, fetchBookmarkState } = useBookmarkStore();

  useEffect(() => {
    (async () => {
      try {
        const state = await fetchBookmarkState(insurance.productId);
        setIsBookmarked(state);
      } catch (error) {
        console.error("fetchBookmarkState error:", error);
      }
   })();
  }, [insurance.productId, fetchBookmarkState]);

  const handleToggleBookmark = async () => {
    setIsBookmarked((prev) => !prev);

    try {
      await toggleBookmark(insurance.productId);
      // 정상적으로 완료 -> 상태 유지
    } catch (err) {
      console.error("toggleBookmark error:", err);
      // 실패 시 UI 롤백할지 여부는 상황에 따라 결정
      // setIsBookmarked(prev => !prev);
    }
  };

  // 카테고리 Enum -> 한글 변환
  const koreanCategory =
    categoryMap[insurance.productCategory] || insurance.productCategory;

  // 회사 이름으로 로고 URL 매핑
  const logoUrl = companyLogos[insurance.companyName];

  return (
    <S.InsuranceCard>
      <S.CardHeader>
        <S.CompanyInfo>
          {logoUrl && (
            <S.CompanyLogo src={logoUrl} alt={insurance.companyName} />
          )}
          <S.CompanyName>{insurance.companyName}</S.CompanyName>
        </S.CompanyInfo>

        <S.CategoryTagWrapper onClick={handleToggleBookmark}>
          <S.CategoryTag>{koreanCategory}</S.CategoryTag>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </S.CategoryTagWrapper>
      </S.CardHeader>

      <S.CardBody>
        <h3>{insurance.productName}</h3>
        <p>{insurance.coverageDetails}</p>
        <S.MonthlyFee>
          월 {insurance.monthlyPremium.toLocaleString()}원
        </S.MonthlyFee>
      </S.CardBody>

      <S.CardFooter>
        <S.DetailButton
          onClick={() => navigate(`/product/${insurance.productId}`)}
        >
          자세히 보기
        </S.DetailButton>
        <S.ApplyButton
          onClick={() => navigate(`/product/${insurance.productId}`)}
        >
          신청하기
        </S.ApplyButton>
      </S.CardFooter>
    </S.InsuranceCard>
  );
};

ProductCard.propTypes = {
  insurance: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    coverageDetails: PropTypes.string.isRequired,
    monthlyPremium: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
