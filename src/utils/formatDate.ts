export const formatDate = (date: Date) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    
    return date.toLocaleDateString('en-GB', dateOptions);
};
