import React from "react";
import { IPaginationAttributes, PaginationOperations } from "./pagination.types";

type IProps = {
    handlePageChange: (pageOperation: PaginationOperations) => void;
};

export const Pagination: React.FunctionComponent<IPaginationAttributes & IProps> = (props) => {
        const { hasNextPage, hasPrevPage } = props;

        let nextPage =
            <button onClick={() => props.handlePageChange(PaginationOperations.nextPage)} disabled={!hasNextPage}>
                Next page
            </button>;

        let previousPage =
            <button onClick={() => props.handlePageChange(PaginationOperations.previousPage)} disabled={!hasPrevPage}>
                Previous page
            </button>;

        return (
            <React.Fragment>
                {previousPage} {nextPage}
            </React.Fragment>
        )
    }
;
