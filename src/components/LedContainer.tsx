import React from "react";

import styles from "./LedContainer.module.css"

interface LedContainerProps {
  number: number
  isGameWon: boolean
}

export default function LedContainer({ number, isGameWon }: LedContainerProps) {
  switch (number) {
    case 1:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 2:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.leftCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.leftCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 3:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.rightCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.rightCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 4:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.leftCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.rightCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.leftCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.rightCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 5:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.leftCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.rightCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.leftCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.rightCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 6:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.leftCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.leftCommonSuccess} ${styles.rightCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.leftCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.leftCommon} ${styles.rightCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 7:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 8:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.leftCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.leftCommonSuccess} ${styles.rightCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.leftCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.leftCommon} ${styles.rightCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
      break;
    case 9:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.leftCommonSuccess} ${styles.rightCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.topCommonSuccess} ${styles.rightCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.leftCommon} ${styles.rightCommon}`} />
              <div className={`${styles.ledBottom} ${styles.topCommon} ${styles.rightCommon}`} />
            </>
          }
        </div>
      );
      break;
    default:
      return (
        <div className={styles.ledContainer}>
          {isGameWon ?
            <>
              <div className={`${styles.ledTop} ${styles.topCommonSuccess} ${styles.rightCommonSuccess} ${styles.leftCommonSuccess}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommonSuccess} ${styles.leftCommonSuccess} ${styles.bottomCommonSuccess}`} />
            </> :
            <>
              <div className={`${styles.ledTop} ${styles.topCommon} ${styles.rightCommon} ${styles.leftCommon}`} />
              <div className={`${styles.ledBottom} ${styles.rightCommon} ${styles.leftCommon} ${styles.bottomCommon}`} />
            </>
          }
        </div>
      );
  }

}