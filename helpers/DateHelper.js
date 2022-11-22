export const getFormattedDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    });
};