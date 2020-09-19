import { Description } from './types';


function isString(param: string | [Description]): param is string {
    return (param as string) !== undefined;
}
/* 
function isDescription(param: string | [Description]): param is [Description]{
    return (param as [Description]) !== undefined;
} */

function getDescription(description: string | [Description]): string {

    if (description === undefined){
    return 'This book has no description definied at OpenLibrary.';

    }

    if (isString(description)){
            return description;
        }

    else {
            const arr = description.map((d) => d.value);
            console.log(arr)
            return arr.toString();
    }

}

export {
    getDescription
};
