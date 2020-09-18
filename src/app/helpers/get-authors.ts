import { Author } from '../types';

export function getRawAuthor(arrayAuthors: [Author]): string {

    if (arrayAuthors === undefined){
        return 'NO!';
    }


    else{
        const arrAuthors = [];
        arrayAuthors.forEach((author) => {

            const authorName = author.name;
            arrAuthors.push(authorName);
        });

        return arrAuthors.join(' and ');
    }
}


export function getServerAuthor(arr: [string]): string{
    return arr.join(' and ');
}
