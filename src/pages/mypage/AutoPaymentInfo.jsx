// AutoPaymentInfo.jsx
import { useEffect, useState } from "react";
import useAutoPaymentStore from "../../store/useAutoPaymentStore";
import { useAuthStore } from "../../store/useAuthStore";

function AutoPaymentInfo() {
  const [editingId, setEditingId] = useState(null);
  const [dayOfMonth, setDayOfMonth] = useState("");
  const [time, setTime] = useState("");

  const { user } = useAuthStore();

  const id = user?.userId;

  // zustand에서 필요한 상태/함수만 가져오기
  const {
    autoPayments, // 자동결제 목록 state
    fetchAutoPayments, // 목록 조회 함수
    deleteAutoPayment, // 삭제 함수
    updateAutoPayment, // 수정 함수
  } = useAutoPaymentStore();

  useEffect(() => {
    if (id) {
      fetchAutoPayments(id);
    }
  }, [id]);

  // 삭제 버튼 클릭 시 실행
  const handleDelete = async (id) => {
    try {
      await deleteAutoPayment(id);
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  // 수정 버튼 클릭 시 실행
  const handleEditClick = (item) => {
    setEditingId(item.id);
    setDayOfMonth(item.dayOfMonth);
    setTime(item.time);
  };

  // 수정 내용 서버에 업데이트
  const handleUpdate = async (id) => {
    try {
      await updateAutoPayment(id, { dayOfMonth, time });
      // 수정모드 해제
      setEditingId(null);
      setDayOfMonth("");
      setTime("");
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditingId(null);
    setDayOfMonth("");
    setTime("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>자동 결제 일정</h2>
      {autoPayments.length > 0 ? (
        autoPayments.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            {editingId === item.id ? (
              // 수정 모드
              <div>
                <p>
                  결제일:{" "}
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={dayOfMonth}
                    onChange={(e) => setDayOfMonth(e.target.value)}
                    style={{ marginLeft: "8px" }}
                  />
                  일
                </p>
                <p>
                  결제 시간:{" "}
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{ marginLeft: "8px" }}
                  />
                </p>
                <button onClick={() => handleUpdate(item.id)}>저장</button>
                <button
                  onClick={handleCancelEdit}
                  style={{ marginLeft: "8px" }}
                >
                  취소
                </button>
              </div>
            ) : (
              // 일반 모드
              <>
                <p>결제 상품: {item.productName}</p>
                <p>결제일: 매월 {item.dayOfMonth}일</p>
                <p>결제 시간: {item.time}</p>
                <button onClick={() => handleEditClick(item)}>수정</button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{ marginLeft: "8px" }}
                >
                  삭제
                </button>
              </>
            )}
            <hr />
          </div>
        ))
      ) : (
        <p>등록된 자동 결제 일정이 없습니다.</p>
      )}
    </div>
  );
}

export default AutoPaymentInfo;
