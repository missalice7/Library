import { Description } from './types';


function isString(param: string | Description): param is string {
    return typeof (param as string) === 'string';
}

function isDescription(param: string | Description): param is Description{
    return (param as Description) !== undefined;
}

function getDescription(description: string | Description): string {

    const regex = /<\/?i>/gi;

    if (description === undefined){
        return 'Not included.';

    }

    if (isString(description)){

            const newdescription = description.replace(regex, ' ');
            return newdescription;
        }

    if (isDescription(description)) {
        const descriptionValue = description.value;
        const newdescription = descriptionValue.replace(regex, ' ');
        return newdescription;
    }

}

export {
    getDescription
};
