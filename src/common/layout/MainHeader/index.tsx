import styles from "./MainHeader.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import Modal from "../../../components/Modal";
import { getKakaoLoginUrl } from "../../apis/login";

const cx = classnames.bind(styles);

const MainHeader = () => {
  const [showLoginModal, setLoginModal] = useState<boolean>(false);

  const goToLoginPage = async () => {
    const data = await getKakaoLoginUrl();

    window.location.replace(data);
  };

  return (
    <>
      <header className={cx("header")}>
        <div className={cx("logo")}>방방콕콕</div>
        <div>
          <button className={cx("login")} onClick={() => setLoginModal(true)}>
            로그인
          </button>
        </div>
      </header>

      <Modal
        isShow={showLoginModal}
        useDim
        onClose={() => setLoginModal(false)}
        size="small"
      >
        <div className={cx("loginModal")}>
          {`로그인하고 모든 기능을 이용해보세요.\n필요한 시간은 단, 3초!`}
          <button className={cx("kakaoButton")} onClick={goToLoginPage}>
            카카오톡으로 로그인하기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default MainHeader;
