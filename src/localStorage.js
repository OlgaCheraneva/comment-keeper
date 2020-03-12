export const loadComments = () => {
    // Try/catch block is needed because calls to localStorage.getItem
    // can fail if the user privacy mode does not allow the use of localStorage.
    try {
        const serializedComments = localStorage.getItem('comments');
        if (serializedComments === null) {
            return undefined;
        }
        return JSON.parse(serializedComments);
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export const saveComments = (comments) => {
    try {
        const serializedComments = JSON.stringify(comments);
        localStorage.setItem('comments', serializedComments);
    } catch (err) {
        console.error(err);
    }
};
