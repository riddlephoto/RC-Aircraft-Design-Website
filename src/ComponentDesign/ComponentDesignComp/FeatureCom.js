import styles from '../../styles/ComponentDesign/ComponentDesignComp/featureCom.module.css';
import { QuestionHover } from "../../index";

const FeatureCom = ({
  title,
  onChange,
  maxInput,
  step,
  disable,
  unit,
  storedValue,
  content,
}) => {
  // console.log(title , InputValue)
  return (
    <div className={styles.Component__Feature_Container}>
      <div className={styles.Feature__Container_title}>
        <h3>{title}</h3>
        <QuestionHover title={content} />
      </div>
      <div className={styles.Feature__Container_Input}>
        <input
          type="number"
          placeholder="Input Value"
          value={storedValue}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (value > maxInput) {
              onChange(maxInput)
            }
            else if (value < 0) {
              onChange(0)
            }
            else{
              onChange(value)
            }
          }}
          min="0"
          max={maxInput}
          step={step}
          disabled={disable}
        />
        <p>{unit}</p>
      </div>
    </div>
  );
};

export default FeatureCom;
