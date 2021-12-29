export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const openModal = (container) => {
    // console.log("openModal with " , container );
    return {
        type: OPEN_MODAL,
        container
    }
};
export const closeModal = () => ({
    type: CLOSE_MODAL
});
