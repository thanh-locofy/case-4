import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.createAccountWrapper}>
      <form className={styles.createAccount}>
        <h1 className={styles.createAccount1}>Create Account</h1>
        <div className={styles.field}>
          <div className={styles.field1}>
            <div className={styles.loopController}>
              <div className={styles.email}>Email</div>
              <div className={styles.inputField}>
                <div className={styles.thanhlocofyai}>thanh@locofy.ai</div>
              </div>
            </div>
            <div className={styles.loopController1}>
              <div className={styles.password}>Password</div>
              <div className={styles.inputField1}>
                <input
                  className={styles.input}
                  placeholder="*****************"
                  type="text"
                />
                <img
                  className={styles.eyeOpen1Icon}
                  alt=""
                  src="/eyeopen-1.svg"
                />
              </div>
            </div>
            <div className={styles.loopController2}>
              <div className={styles.retypePassword}>Retype password</div>
              <div className={styles.inputField2}>
                <input
                  className={styles.input1}
                  placeholder="*****************"
                  type="text"
                />
                <img
                  className={styles.eyeOpen1Icon1}
                  alt=""
                  src="/eyeopen-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.remember}>
            <input className={styles.checkbox} type="checkbox" />
            <div
              className={styles.acceptAllTerms}
            >{`Accept all terms & Conditions`}</div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.normal}>Create Account</div>
        </button>
        <div className={styles.dontHaveAccount}>
          <div className={styles.alreadyHaveAccount}>Already have account</div>
          <div className={styles.login}> Login</div>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent;
