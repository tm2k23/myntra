export const SORT = "SORT";

export const sort = (sortBy) => {
    return {
        type: SORT,
        sortBy : sortBy
    }
}