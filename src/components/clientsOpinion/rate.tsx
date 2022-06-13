import styles from 'styles/Rate.module.scss';

function percentageRate(rate: number, totalRates: number) {
  const percentage = Math.floor((rate / totalRates) * 100);
  return percentage;
}

export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className={styles.progressBar}>
      <span
        className={styles.progressBarFill}
        style={{ width: `${percentage}%` }}
      ></span>
    </div>
  );
}

export default function Rate({ rate }: { rate: number[] }) {
  const totalRates = rate.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles.rateWrapper}>
      <div>
        <h1>Clients Opinion</h1>
        <h2>{totalRates} Califications</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td>5 stars</td>
            <td>
              <ProgressBar percentage={percentageRate(rate[4], totalRates)} />
            </td>
            <td>{percentageRate(rate[4], totalRates)}%</td>
          </tr>
          <tr>
            <td>4 stars</td>
            <td>
              <ProgressBar percentage={percentageRate(rate[3], totalRates)} />
            </td>
            <td>{percentageRate(rate[3], totalRates)}%</td>
          </tr>
          <tr>
            <td>3 stars</td>
            <td>
              <ProgressBar percentage={percentageRate(rate[2], totalRates)} />
            </td>
            <td>{percentageRate(rate[2], totalRates)}%</td>
          </tr>
          <tr>
            <td>2 stars</td>
            <td>
              <ProgressBar percentage={percentageRate(rate[1], totalRates)} />
            </td>
            <td>{percentageRate(rate[1], totalRates)}%</td>
          </tr>
          <tr>
            <td>1 star</td>
            <td>
              <ProgressBar percentage={percentageRate(rate[0], totalRates)} />
            </td>
            <td>{percentageRate(rate[0], totalRates)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
