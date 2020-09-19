import { Author, Contributors } from './types';

/* function isAuthor(author: Author | Contributors): author is Author {
    return (author as Author).role !== undefined;
}

function isContributor(author: Author | Contributors): author is Contributors {
    return (author as Contributors).key !== undefined;
} */

function getRawAuthor(arrayAuthors: (Author | Contributors)[]): string {

    if (arrayAuthors === undefined){
        return 'This book has no author definied at OpenLibrary.';
    } else {

        const arrAuthors = arrayAuthors.map((author) => author.name);
        return arrAuthors.join(' and ');
    }

}

export {
    getRawAuthor
};

