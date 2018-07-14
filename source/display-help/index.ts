import {
    CommandlineArgument,
    CommandlineArgumentShort,
    CommandlineArgumentKey,
    CommandlineArgumentDescription
} from '../';
const getStringTable = require('vamtiger-get-string-table').default;

export default () => {
    const argumentKeys = Object.keys(CommandlineArgumentDescription) as CommandlineArgumentKey[];
    const argumentDetails = argumentKeys
        .map(argumentKey => [
            '--' + CommandlineArgument[argumentKey],
            '-' + CommandlineArgumentShort[argumentKey],
            CommandlineArgumentDescription[argumentKey]
        ]).sort();
    const help = getStringTable({
        header: [
            'Argument',
            'Shortcut',
            'Description'
        ],
        body: argumentDetails,
    });

    console.log(help);
}