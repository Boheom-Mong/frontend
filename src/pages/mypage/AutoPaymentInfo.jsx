import React, { useEffect, useState } from "react";
import axios from "axios";

function AutoPaymentInfo() {
  const [autoPayments, setAutoPayments] = useState([]);
  const [editingId, setEditingId] = useState(null); 
  const [editDayOfMonth, setEditDayOfMonth] = useState("");
  const [editTime, setEditTime] = useState("");

  useEffect(() => {
    fetchAutoPayments();
  }, []);

  // 자동결제 목록 가져오기
  const fetchAutoPayments = () => {
    axios
      .get("http://localhost:8080/api/autoPayment")
      .then((res) => {
        setAutoPayments(res.data);
      })
      .catch((err) => {
        console.error("자동결제 정보 조회 오류:", err);
      });
  };

  // 수정 시작 (인라인 편집 모드로 전환)
  const startEditing = (item) => {
    setEditingId(item.id);
    setEditDayOfMonth(item.dayOfMonth);
    setEditTime(item.time);
  };

  // 수정 취소
  const cancelEditing = () => {
    setEditingId(null);
    setEditDayOfMonth("");
    setEditTime("");
  };

  // 수정된 내용 저장 (PUT 요청)
  const saveEdit = (id) => {
    axios
      .put(`http://localhost:8080/api/autoPayment/${id}`, {
        dayOfMonth: editDayOfMonth,
        time: editTime,
      })
      .then((res) => {
        console.log("자동 결제 일정 수정 완료:", res.data);
        // 수정 모드 해제
        setEditingId(null);
        // 목록 다시 로딩
        fetchAutoPayments();
      })
      .catch((err) => {
        console.error("자동 결제 일정 수정 오류:", err);
      });
  };

  // 삭제 (DELETE 요청)
  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/autoPayment/${id}`)
      .then(() => {
        console.log("자동 결제 일정 삭제 완료");
        // 목록 다시 로딩
        fetchAutoPayments();
      })
      .catch((err) => {
        console.error("자동 결제 일정 삭제 오류:", err);
      });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>자동 결제 일정</h2>
      {autoPayments.length > 0 ? (
        autoPayments.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            {/* 수정 모드인지 확인 */}
            {editingId === item.id ? (
              <div>
                <label>결제일: </label>
                <input
                  type="number"
                  value={editDayOfMonth}
                  onChange={(e) => setEditDayOfMonth(e.target.value)}
                />
                &nbsp;
                <label>결제 시간: </label>
                <input
                  type="text"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                />
                &nbsp;
                <button onClick={() => saveEdit(item.id)}>저장</button>
                <button onClick={cancelEditing}>취소</button>
              </div>
            ) : (
              <div>
                <p>결제일: 매월 {item.dayOfMonth}일</p>
                <p>결제 시간: {item.time}</p>
                <button onClick={() => startEditing(item)}>수정</button>
                <button onClick={() => deleteItem(item.id)}>삭제</button>
              </div>
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
