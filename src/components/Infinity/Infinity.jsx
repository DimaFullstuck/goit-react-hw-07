import { InfinitySpin } from "react-loader-spinner";
import styles from "./Infinity.module.css";

const InfinityLoader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <InfinitySpin
          className={styles.loader}
          visible={isLoading}
          ariaLabel="Loading"
        />
      )}
    </>
  );
};

export default InfinityLoader;
