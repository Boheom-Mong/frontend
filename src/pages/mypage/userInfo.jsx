import PropTypes from "prop-types";
import * as S from "./style";

const UserInfo = ({ user }) => {
  return (
    <S.Section>
      <S.SectionTitle>사용자 정보</S.SectionTitle>
      <S.Grid>
        <S.InputGroup>
          <label>이름</label>
          <S.Input value={user?.name || ""} readOnly />
        </S.InputGroup>
        <S.InputGroup>
          <label>이메일</label>
          <S.Input value={user?.loginEmail || ""} readOnly />
        </S.InputGroup>
      </S.Grid>
    </S.Section>
  );
};

// 여기가 핵심
UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    loginEmail: PropTypes.string,
  }),
};

export default UserInfo;
