import {
  HomeRepairService,
  LocationOnOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Autocomplete, TextField, Stack } from "@mui/material";
import styles from "../styles/Search.module.scss";

export default function Search() {
  const cities = ["casablanca", "settat"];

  return (
    <main className={styles.main}>
      <h1>GO ahead and find someone to do wath you want!</h1>
      <div className={styles.container}>
        <Autocomplete
          autoSelect
          id="auto-select"
          options={cities}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={<LocationOnOutlined color="#5bc4dd" />}
              placeholder="city"
              className={styles.search_input}
            />
          )}
        />
        <Autocomplete
          autoSelect
          id="autoSelect"
          options={cities}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={<HomeRepairService color="#5bc4dd" />}
              placeholder="service"
              className={styles.search_input}
            />
          )}
        />
        <SearchOutlined className={styles.search_btn} />
      </div>
    </main>
  );
}
