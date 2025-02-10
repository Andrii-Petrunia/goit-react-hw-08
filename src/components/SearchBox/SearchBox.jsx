import { useDispatch, useSelector } from "react-redux";
import { setFilterName, setFilterPhone } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const { name, phone } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(setFilterName(e.target.value))}
        />
      </label>

      <label>
        Find contacts by phone number
        <input
          type="text"
          value={phone}
          onChange={(e) => dispatch(setFilterPhone(e.target.value))}
        />
      </label>
    </div>
  );
}
