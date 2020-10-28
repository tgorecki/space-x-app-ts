export interface IPaginationAttributes {
    hasNextPage?: boolean
    hasPrevPage?: boolean
    limit?: number
    nextPage?: number
    offset?: number
    page?: number
    pagingCounter?: number
    prevPage?: null | number
    totalDocs?: number
    totalPages?: number
}

export enum PaginationOperations {
    nextPage = 'NEXT_PAGE',
    previousPage = 'PREVIOUS_PAGE'
}
