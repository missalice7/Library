import { Author, Contributors } from './types';

function getRawAuthor(arrayAuthors: [Author] | [Contributors]): string {

    if (arrayAuthors === undefined){
    return 'This book has no author definied at OpenLibrary.';

    }

    else{

        const arrAuthors = [];

        arrayAuthors.forEach((author) => {
        const authorName = author.name;
        arrAuthors.push(authorName); });
        return arrAuthors.join(' and ');
    }

}

export {
    getRawAuthor
};

