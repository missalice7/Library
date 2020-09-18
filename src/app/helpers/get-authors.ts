import { Author } from '../types';

export function getAuthor(arrayAuthors: [Author]): string {

    if (arrayAuthors === undefined){
        const arrAuthors = 'NO!';
    }


    else{
        const arrAuthors = []
        arrayAuthors.forEach((author) => {

            const authorName = author.name;
            arrAuthors.push(authorName);
        });

        return arrAuthors.join(' and ');
    }
}
