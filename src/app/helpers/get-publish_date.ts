function getPublishDate(date: string): string {

    if (date === undefined){
        return 'Not included.';
    } else {
        return date;
    }

}

export {
    getPublishDate
};
