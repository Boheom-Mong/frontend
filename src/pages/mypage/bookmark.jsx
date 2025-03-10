// pages/mypage/Bookmark.jsx
import React, { useEffect } from "react";
import { useBookmarkStore } from "../../store/useBookmarkStore";
import ProductCard from "../../components/ProductCard/ProductCard";
import * as S from "./style";


function Bookmark() {
  const {
    bookmarkDetailList,
    loading,
    error,
    fetchMyBookmarksWithDetail,
  } = useBookmarkStore();

  useEffect(() => {
    // 한 번에 '상세 정보 포함'한 목록을 불러온다
    fetchMyBookmarksWithDetail();
  }, [fetchMyBookmarksWithDetail]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러: {error}</div>;

  // 만약 bookmarkDetailList가 없다면
  if (!bookmarkDetailList.length) {
    return <p>아직 북마크가 없습니다.</p>;
  }

  // bookmarkDetailList는 [{ bookmarkId, productId, companyName, ...}, ...]
  return (

    <S.Section>
      <S.SectionTitle>내 북마크 목록</S.SectionTitle>
      {bookmarkDetailList.map((item) => (
        <ProductCard 
          key={item.bookmarkId}
          insurance={item} // ProductCard는 { productId, companyName, ...}를 받음
        />
      ))}
    </S.Section>
  );
}

export default Bookmark;
