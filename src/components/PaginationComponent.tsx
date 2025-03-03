import React from "react";

import { Pagination } from "antd";

import styles from './PaginationComponent.module.scss'


interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Pagination 
        className={styles.pagination}
        current={currentPage}
        total={totalPages}
        pageSize={1}
        onChange={onPageChange}
        />
    )
}


export default PaginationComponent;