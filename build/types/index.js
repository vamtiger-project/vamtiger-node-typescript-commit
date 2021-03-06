"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateVersion;
(function (UpdateVersion) {
    UpdateVersion["patch"] = "patch";
    UpdateVersion["minor"] = "minor";
    UpdateVersion["major"] = "major";
    UpdateVersion["prepatch"] = "prepatch";
})(UpdateVersion = exports.UpdateVersion || (exports.UpdateVersion = {}));
var RunScript;
(function (RunScript) {
    RunScript["npm"] = "npm run";
    RunScript["yarn"] = "yarn";
})(RunScript = exports.RunScript || (exports.RunScript = {}));
var BuildScript;
(function (BuildScript) {
    BuildScript["build"] = "build";
})(BuildScript = exports.BuildScript || (exports.BuildScript = {}));
var Folder;
(function (Folder) {
    Folder["source"] = "source";
    Folder["build"] = "build";
})(Folder = exports.Folder || (exports.Folder = {}));
var CommandlineArgument;
(function (CommandlineArgument) {
    CommandlineArgument["buildFolder"] = "buildFolder";
    CommandlineArgument["j"] = "j";
    CommandlineArgument["buildScript"] = "buildScript";
    CommandlineArgument["b"] = "b";
    CommandlineArgument["commitMessage"] = "commitMessage";
    CommandlineArgument["c"] = "c";
    CommandlineArgument["help"] = "help";
    CommandlineArgument["h"] = "h";
    CommandlineArgument["otp"] = "otp";
    CommandlineArgument["o"] = "o";
    CommandlineArgument["runscript"] = "runscript";
    CommandlineArgument["r"] = "r";
    CommandlineArgument["sourceFolder"] = "sourceFolder";
    CommandlineArgument["s"] = "s";
    CommandlineArgument["publishSource"] = "publishSource";
    CommandlineArgument["P"] = "P";
})(CommandlineArgument = exports.CommandlineArgument || (exports.CommandlineArgument = {}));
var CommandlineArgumentShort;
(function (CommandlineArgumentShort) {
    CommandlineArgumentShort["buildFolder"] = "j";
    CommandlineArgumentShort["commitMessage"] = "c";
    CommandlineArgumentShort["help"] = "h";
    CommandlineArgumentShort["otp"] = "o";
    CommandlineArgumentShort["runscript"] = "r";
    CommandlineArgumentShort["sourceFolder"] = "s";
})(CommandlineArgumentShort = exports.CommandlineArgumentShort || (exports.CommandlineArgumentShort = {}));
var CommandlineArgumentDescription;
(function (CommandlineArgumentDescription) {
    CommandlineArgumentDescription["buildFolder"] = "Name of the source folder (default = \"build\")";
    CommandlineArgumentDescription["commitMessage"] = "Git commit message";
    CommandlineArgumentDescription["help"] = "List all commandline arguments";
    CommandlineArgumentDescription["otp"] = "One time password";
    CommandlineArgumentDescription["runscript"] = "Run script (npm, yarn)";
    CommandlineArgumentDescription["sourceFolder"] = "Name of the source folder (default = \"source\")";
})(CommandlineArgumentDescription = exports.CommandlineArgumentDescription || (exports.CommandlineArgumentDescription = {}));
//# sourceMappingURL=index.js.map