var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as core from '@actions/core';
console.log('Try npm run lint/fix!');
const inputStr = core.getInput('who-to-greet', { required: true });
core.notice(`hi ${inputStr}`);
core.setOutput("time", "now");
core.error('This is a bad error. This will also fail the build.');
core.warning('Something went wrong, but it\'s not bad enough to fail the build.');
core.notice('Something happened that you might want to know about.');
function CreateJobSummary() {
    return __awaiter(this, void 0, void 0, function* () {
        yield core.summary
            .addHeading('Test Results')
            .addCodeBlock(`const thisWorks = true`, "js")
            .addTable([
            [{ data: 'File', header: true }, { data: 'Result', header: true }],
            ['foo.js', 'Pass '],
            ['bar.js', 'Fail '],
            ['test.js', 'Pass ']
        ])
            .addLink('View staging deployment!', 'https://github.com')
            .write();
    });
}
CreateJobSummary();
