import React, { useEffect } from "react";
import { useBookmarkStore } from "../../store/useBookmarkStore";


function Bookmark() {
  const {
    bookmarkList,   // 내 북마크 배열
    loading,
    error,
    fetchMyBookmarks,
  } = useBookmarkStore();

  useEffect(() => {
    fetchMyBookmarks(); // 컴포넌트 마운트 시점에 내 북마크 목록 가져오기
  }, [fetchMyBookmarks]);

  // 로딩 중
  if (loading) return <div>북마크 목록 불러오는 중...</div>;

  // 에러 발생
  if (error) return <div>에러 발생: {error}</div>;

  // 결과 렌더링
  return (
    <div>
      <h2>내 북마크 목록</h2>
      {bookmarkList.length === 0 ? (
        <p>아직 북마크가 없습니다.</p>
      ) : (
        <ul>
          {bookmarkList.map((bm) => (
            <li key={bm.bookmarkId}>
              {/* 예시로 productId, createdAt 등 표시 */}
              <p>상품 ID: {bm.productId}</p>
              <p>북마크 생성일: {bm.createdAt}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookmark;
