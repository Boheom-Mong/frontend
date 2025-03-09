import { useEffect, useState } from "react";
import useAutoPaymentStore from "../../store/useAutoPaymentStore";
import { useAuthStore } from "../../store/useAuthStore";
import * as S from "./AutoPaymentInfoStyle";
import {
  Calendar,
  Clock,
  Edit2,
  Trash2,
  Save,
  X,
  AlertCircle,
  CreditCard,
} from "lucide-react";

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

function AutoPaymentInfo() {
  const [editingId, setEditingId] = useState(null);
  const [dayOfMonth, setDayOfMonth] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuthStore();
  const id = user?.userId;

  // zustand에서 필요한 상태/함수만 가져오기
  const {
    autoPayments,
    fetchAutoPayments,
    deleteAutoPayment,
    updateAutoPayment,
  } = useAutoPaymentStore();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      if (id) {
        try {
          await fetchAutoPayments(id);
        } catch (error) {
          console.error("자동 결제 정보 로딩 실패:", error);
          S.showToast({
            type: "error",
            message: "자동 결제 정보를 불러오는데 실패했습니다.",
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadData();
  }, [id, fetchAutoPayments]);

  // 삭제 버튼 클릭 시 실행
  const handleDelete = async (id) => {
    if (window.confirm("정말 이 자동 결제 설정을 삭제하시겠습니까?")) {
      try {
        await deleteAutoPayment(id);
        S.showToast({
          type: "success",
          message: "자동 결제 설정이 삭제되었습니다.",
        });
      } catch (error) {
        console.error("삭제 실패:", error);
        S.showToast({
          type: "error",
          message: "삭제 중 오류가 발생했습니다.",
        });
      }
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
      S.showToast({
        type: "success",
        message: "자동 결제 설정이 업데이트되었습니다.",
      });
    } catch (error) {
      console.error("수정 실패:", error);
      S.showToast({
        type: "error",
        message: "업데이트 중 오류가 발생했습니다.",
      });
    }
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setEditingId(null);
    setDayOfMonth("");
    setTime("");
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      암보험: "#FF6B6B",
      실손의료보험: "#4D96FF",
      종신보험: "#6BCB77",
      운전자보험: "#FFD93D",
      치아보험: "#4CACBC",
      화재보험: "#FF9F45",
      연금보험: "#9C6644",
      여행자보험: "#C689C6",
      건강보험: "#71DFE7",
    };
    return colorMap[category] || "#4169e1";
  };

  return (
    <S.AutoPaymentInfoContainer>
      <S.AutoPaymentInfoHeader>
        <S.AutoPaymentInfoTitle>
          <CreditCard size={24} />
          자동 결제 일정
        </S.AutoPaymentInfoTitle>
        <S.AutoPaymentInfoSubtitle>
          등록된 자동 결제 일정을 확인하고 관리하세요.
        </S.AutoPaymentInfoSubtitle>
      </S.AutoPaymentInfoHeader>

      {isLoading ? (
        <S.LoadingContainer>
          <S.LoadingSpinner />
          <S.LoadingText>자동 결제 정보를 불러오는 중입니다...</S.LoadingText>
        </S.LoadingContainer>
      ) : autoPayments.length > 0 ? (
        <S.PaymentListContainer>
          {autoPayments.map((item) => (
            <S.PaymentCard key={item.id} isEditing={editingId === item.id}>
              {editingId === item.id ? (
                // 수정 모드
                <S.EditModeContainer>
                  <S.EditModeHeader>
                    <S.EditModeTitle>자동 결제 설정 수정</S.EditModeTitle>
                  </S.EditModeHeader>

                  <S.EditModeContent>
                    <S.EditFormGroup>
                      <S.EditFormLabel>
                        <Calendar size={16} />
                        결제일
                      </S.EditFormLabel>
                      <S.EditInputGroup>
                        <S.EditInput
                          type="number"
                          min="1"
                          max="31"
                          value={dayOfMonth}
                          onChange={(e) => setDayOfMonth(e.target.value)}
                        />
                        <S.EditInputSuffix>일</S.EditInputSuffix>
                      </S.EditInputGroup>
                    </S.EditFormGroup>

                    <S.EditFormGroup>
                      <S.EditFormLabel>
                        <Clock size={16} />
                        결제 시간
                      </S.EditFormLabel>
                      <S.EditInputGroup>
                        <S.EditInput
                          type="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </S.EditInputGroup>
                    </S.EditFormGroup>
                  </S.EditModeContent>

                  <S.EditModeActions>
                    <S.CancelButton onClick={handleCancelEdit}>
                      <X size={16} />
                      취소
                    </S.CancelButton>
                    <S.SaveButton onClick={() => handleUpdate(item.id)}>
                      <Save size={16} />
                      저장
                    </S.SaveButton>
                  </S.EditModeActions>
                </S.EditModeContainer>
              ) : (
                // 일반 모드
                <>
                  <S.PaymentCardHeader>
                    <S.CardHeader>
                      <S.CardHeaderContent>
                        {companyLogos[item.companyName] && (
                          <S.CompanyLogo
                            src={companyLogos[item.companyName]}
                            alt={item.companyName}
                          />
                        )}
                        <div>
                          <S.CompanyName>{item.companyName}</S.CompanyName>
                          <S.ProductCategory
                            color={getCategoryColor(item.productCategory)}
                          >
                            {item.productCategory}
                          </S.ProductCategory>
                        </div>
                      </S.CardHeaderContent>
                    </S.CardHeader>
                  </S.PaymentCardHeader>

                  <S.PaymentCardContent>
                    <S.TopRow>
                      <S.ProductName>
                        {item.productName || "보험 상품"}
                      </S.ProductName>
                      <S.PaymentCardActions>
                        <S.EditButton onClick={() => handleEditClick(item)}>
                          <Edit2 size={16} />
                        </S.EditButton>
                        <S.DeleteButton onClick={() => handleDelete(item.id)}>
                          <Trash2 size={16} />
                        </S.DeleteButton>
                      </S.PaymentCardActions>
                    </S.TopRow>
                    <S.PaymentInfoItem>
                      <S.PaymentInfoLabel>
                        <Calendar size={16} />
                        결제일
                      </S.PaymentInfoLabel>
                      <S.PaymentInfoValue>
                        매월{" "}
                        <S.HighlightText>{item.dayOfMonth}</S.HighlightText>일
                      </S.PaymentInfoValue>
                    </S.PaymentInfoItem>

                    <S.PaymentInfoItem>
                      <S.PaymentInfoLabel>
                        <Clock size={16} />
                        결제 시간
                      </S.PaymentInfoLabel>
                      <S.PaymentInfoValue>
                        <S.HighlightText>{item.time}</S.HighlightText>
                      </S.PaymentInfoValue>
                    </S.PaymentInfoItem>
                  </S.PaymentCardContent>
                </>
              )}
            </S.PaymentCard>
          ))}
        </S.PaymentListContainer>
      ) : (
        <S.EmptyStateContainer>
          <S.EmptyStateIcon>
            <AlertCircle size={48} color="#e0e0e0" />
          </S.EmptyStateIcon>
          <S.EmptyStateTitle>
            등록된 자동 결제 일정이 없습니다
          </S.EmptyStateTitle>
          <S.EmptyStateDescription>
            보험 상품 가입 시 자동 결제를 설정하면 이곳에서 확인할 수 있습니다.
          </S.EmptyStateDescription>
        </S.EmptyStateContainer>
      )}

      <S.ToastContainer id="toast-container" />
    </S.AutoPaymentInfoContainer>
  );
}

export default AutoPaymentInfo;
