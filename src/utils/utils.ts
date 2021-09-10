export const showErrors = (error: any) => {
    if (!error || error.length > 0) {
        return true;
    }
    return true;
};

export const formatDate = (dateIn: Date) => {
    return dateIn.toISOString().split('T')[0]
}