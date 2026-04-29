export const formatGenName = (name) => {
    const formattedGenName = name.replace("generation-", "Gen ").toUpperCase();
    return formattedGenName;
};
