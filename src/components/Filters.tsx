import React, { FC } from "react";

import { Collapse, Input, Select } from "antd";

import styles from './Filters.module.scss'

interface FiltersProps {
  setStatus: (status: string) => void;
  setSpecies: (species: string) => void;
  setGender: (gender: string) => void;
}

const Filters: FC<FiltersProps> = ({ setStatus, setSpecies, setGender }) => {
  const filterItems = [
    {
      key: "1",
      label: "Filters",
      children: (
        <>
          <div>
            <label>Status: </label>
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
            <label>Species: </label>
            <Input
              placeholder="Enter species"
              onChange={(e) => setSpecies(e.target.value)}
              className={styles.filterItems}
            />
          </div>

          <div style={{ marginTop: 10 }}>
            <label>Gender: </label>
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
        </>
      ),
    },
  ];

  return <div className={styles.filterContainer}>
    <Collapse 
        items={filterItems} 
        className={styles.tst}
    />
  </div>
};

export default Filters;
