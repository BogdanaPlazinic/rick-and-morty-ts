import React, { FC } from "react";

import { Select } from "antd";

import styles from "./Filters.module.scss";

interface FiltersProps {
  setStatus: (status: string) => void;
  setSpecies: (species: string) => void;
  setGender: (gender: string) => void;
}

const Filters: FC<FiltersProps> = ({ setStatus, setSpecies, setGender }) => {
  return (
    <div className={styles.filterContainer}>
      <div>
        <Select
          defaultValue=""
          onChange={(value) => setStatus(value)}
          placeholder="Select status"
          className={styles.filterItems}
        >
          <Select.Option value="">Select status</Select.Option>
          <Select.Option value="alive">Alive</Select.Option>
          <Select.Option value="dead">Dead</Select.Option>
          <Select.Option value="unknown">Unknown</Select.Option>
        </Select>
      </div>

      <div style={{ marginTop: 10 }}>
        <Select
          defaultValue=""
          onChange={(value) => setSpecies(value)}
          placeholder="Select species"
          className={styles.filterItems}
        >
          <Select.Option value="">Select species</Select.Option>
          <Select.Option value="human">Human</Select.Option>
          <Select.Option value="alien">Alien</Select.Option>
          <Select.Option value="mythological creature">Mythological Creature</Select.Option>
          <Select.Option value="disease">Disease</Select.Option>
          <Select.Option value="humanoid">Humanoid</Select.Option>
          <Select.Option value="robot">Robot</Select.Option>
        </Select>
      </div>

      <div style={{ marginTop: 10 }}>
        <Select
          defaultValue=""
          onChange={(value) => setGender(value)}
          placeholder="Select gender"
          className={styles.filterItems}
        >
          <Select.Option value="">Select gender</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="genderless">Genderless</Select.Option>
          <Select.Option value="unknown">Unknown</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
