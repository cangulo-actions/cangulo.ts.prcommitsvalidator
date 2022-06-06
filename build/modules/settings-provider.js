"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSettings = void 0;
class Settings {
}
function GetSettings() {
    // const inputStr = core.getInput('who-to-greet', { required: true });

    c

    const prNumber = process.env.GITHUB_REF;
    return {
        prNumber: Number.parseInt(prNumber)
    };
}
exports.GetSettings = GetSettings;
