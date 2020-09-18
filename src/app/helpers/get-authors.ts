import { Author, Contributors } from './types';

function getRawAuthor(arrayAuthors: [Author] | [Contributors]): string {

    if (arrayAuthors === undefined){
    return 'NO!';

    }

    else{

        const arrAuthors = [];

        arrayAuthors.forEach((author) => {
        const authorName = author.name;
        arrAuthors.push(authorName); });
        return arrAuthors.join(' and ');
    }

}

function getServerAuthor(arr: [string]): string{
    return arr.join(' and ');
}

export {
    getRawAuthor,
    getServerAuthor
};

