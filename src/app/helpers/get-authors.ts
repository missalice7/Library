import { Author, Contributors } from './types';

function getRawAuthor(arrayAuthors: (Author | Contributors)[]): string {

    if (arrayAuthors === undefined){
        return 'This book has no author defined at OpenLibrary.';
    } else {

        const arrAuthors = arrayAuthors.map((author) => author.name);
        return arrAuthors.join(' and ');
    }

}

export {
    getRawAuthor
};

