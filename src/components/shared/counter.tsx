import styles from 'styles/Counter.module.scss';

export default function Counter({
  setAmount,
  amount,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAmount: any;
  amount: number;
}) {
  const increaseAmount = () => {
    if (amount === 10) return;
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };
  return (
    <span className={styles.span}>
      <button type='button' onClick={decreaseAmount}>
        -
      </button>
      <p>{amount}</p>
      <button type='button' onClick={increaseAmount}>
        +
      </button>
    </span>
  );
}
