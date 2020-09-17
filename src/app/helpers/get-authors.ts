import { Author } from '../types';



export function getAuthor(arrayAuthors: [Author]): Array<string> {

    const arrAuthors = [];

    arrayAuthors.forEach((author) => {

            const authorName = author.name;
            arrAuthors.push(authorName);
        });

    return arrAuthors;
    }
