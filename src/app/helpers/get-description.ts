import { Description } from './types';


function isString(param: string | Description): param is string {
    return typeof (param as string) === 'string';
}

function isDescription(param: string | Description): param is Description{
    return (param as Description) !== undefined;
}

function getDescription(description: string | Description): string {

    if (description === undefined){
        return 'This book has no description defined at OpenLibrary.';

    }

    if (isString(description)){
            const regex = /<\/?i>/gi;
            const newdescription = description.replace(regex, ' ');
            return newdescription;
        }

    if (isDescription(description)) {
        const desc = description.value;
        return desc;
    }

}

export {
    getDescription
};
