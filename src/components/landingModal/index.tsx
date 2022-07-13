import styles from './landingModal.module.scss';

export const LandingModal = (closeLandingModal: any) => {
  console.log(closeLandingModal);

  return (
    <div className={styles.landingModal}>
      <div className={styles.content}>
        {' '}
        <h1>
          Welcome to Clik<span className={styles.x}>xx</span> !
        </h1>
        <h2>A free porn aggregator</h2>
        <h3>By continuing, you confirm you are above 18 years old</h3>
        <input
          type="button"
          value=" Yes, I am 18+ !"
          onClick={() => closeLandingModal}
        />
      </div>
    </div>
  );
};
