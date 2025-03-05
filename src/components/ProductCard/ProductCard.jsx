import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./style";

// 1) 백엔드 Enum 이름 -> 한글 문자열
const categoryMap = {
  CANCER: "암",
  SURGERY: "수술/입원",
  LIFE: "종신",
  DRIVER: "운전자/상해",
  FIRE: "주택화재",
  DENTAL: "치아",
  DEMENTIA: "치매",
  NEWBORN: "신생아",
  HEALTHCARE: "실손의료비",
  CHILD: "어린이보험",
  PET: "반려동물보험",
  NURSING: "간병보험",
  TRAVEL: "여행자보험",
  ETC: "기타",
};

const ProductCard = ({ insurance }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  // 2) 실제 카테고리 표시를 위해: 백엔드 Enum값 -> 한글
  const koreanCategory =
    categoryMap[insurance.productCategory] || insurance.productCategory;

  return (
    <S.InsuranceCard>
      <S.CardHeader>
        <S.CompanyName>{insurance.companyName}</S.CompanyName>
        <S.CategoryTagWrapper onClick={handleToggleBookmark}>
          <S.CategoryTag>{koreanCategory}</S.CategoryTag>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </S.CategoryTagWrapper>
      </S.CardHeader>

      <S.CardBody>
        <h3>{insurance.productName}</h3>
        <p>{insurance.coverageDetails}</p>
        <S.MonthlyFee>월 {insurance.monthlyPremium.toLocaleString()}원</S.MonthlyFee>
      </S.CardBody>

      <S.CardFooter>
        <S.DetailButton
          onClick={() => navigate(`/product/${insurance.productId}`)}
        >
          자세히 보기
        </S.DetailButton>
        <S.ApplyButton>신청하기</S.ApplyButton>
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
