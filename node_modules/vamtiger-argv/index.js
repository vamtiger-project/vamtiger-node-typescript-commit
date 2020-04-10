'use strict';

// Define Variable constants.
const valueNotSpecified = 'valueNotSpecified';

/**
 * This defines a class for conveniently accessing command-line arguments.
 **/
class Argv {
    constructor() {
        this._referenceArguments = this._referenceArguments.bind(this);
        
        this._regex = this.__regex;
        this._rawArgument = this.__rawArgument;
        this._argument = this.__argument;
    }

    get(argument) {
        let argumentValue = this._argument.get(argument);

        return argumentValue;
    }

    next(argument) {
        let argumentValue;

        process.argv.find((currentArgument, argumentIndex) => {
            if (currentArgument === argument) {
                argumentValue = process.argv[argumentIndex + 1];

                return true;
            }
        });

        return argumentValue;
    }

    first() {
        let firstArgument = process.argv.find(argument => this._regex.argumentDash.test(argument));

        return firstArgument;
    }

    has(argument) {
        let hasArgument = this._argument.has(argument);

        if (!hasArgument)
            hasArgument = this._has(argument);

        return hasArgument;
    }

    _has(argument) {
        let hasArgument = false;

        process.argv.find((currentArgument, argumentIndex) => {
            if (currentArgument === argument) {
                hasArgument = true;

                return true;
            }
        });

        return hasArgument;
    }

    get __regex() {
        const argument = {
            argumentDash: /^[-]/,
            argument: /\w+/
        };

        return argument;
    }

    get __argument() {
        let argument = process.argv.reduce(this._referenceArguments, new Map());

        return argument;
    }

    _referenceArguments(argumentMap, rawArgument, argumentIndex, argv) {
        let thisIsAnArgument = this._regex.argumentDash.test(rawArgument),
            argumentValueNotSpecified,
            argument,
            argumentValue;

        if (thisIsAnArgument) {
            argument = this._regex.argument.exec(rawArgument)[0];

            argumentValue = argv[argumentIndex + 1];

            argumentValueNotSpecified = !argumentValue || this._regex.argumentDash.test(argumentValue);

            if (argumentValueNotSpecified)
                argumentValue = valueNotSpecified;

            argumentMap.set(argument, argumentValue);
        }

        return argumentMap;
    }
}

module.exports = Argv;
