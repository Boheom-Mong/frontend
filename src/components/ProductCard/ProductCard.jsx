import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import * as S from "./style";

const ProductCard = ({ insurance }) => {
  const navigate = useNavigate();
  // 북마크 상태 (true: 북마크됨, false: 북마크 안됨)
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    // 필요하다면 여기서 API/LocalStorage 연동 가능
  };

  return (
    <S.InsuranceCard>
      <S.CardHeader>
        <S.CompanyName>{insurance.company}</S.CompanyName>
        {/* 카테고리 태그 + 북마크 아이콘을 함께 묶어줍니다. */}
        <S.CategoryTagWrapper onClick={handleToggleBookmark}>
          <S.CategoryTag>{insurance.category}</S.CategoryTag>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </S.CategoryTagWrapper>
      </S.CardHeader>

      <S.CardBody>
        <h3>{insurance.name}</h3>
        <p>{insurance.description}</p>
        <S.MonthlyFee>월 {insurance.monthlyFee}</S.MonthlyFee>
      </S.CardBody>

      <S.CardFooter>
        <S.DetailButton onClick={() => navigate(`/product/${insurance.id}`)}>
          자세히 보기
        </S.DetailButton>
        <S.ApplyButton>신청하기</S.ApplyButton>
      </S.CardFooter>
    </S.InsuranceCard>
  );
};

ProductCard.propTypes = {
  insurance: PropTypes.shape({
    id: PropTypes.number,
    company: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    monthlyFee: PropTypes.string,
    coverage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
