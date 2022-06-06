import * as core from '@actions/core';

console.log('Try npm run lint/fix!');

const inputStr = core.getInput('who-to-greet', { required: true });

core.notice(`hi ${inputStr}`)


core.setOutput("time", "now")


core.error('This is a bad error. This will also fail the build.')
core.warning('Something went wrong, but it\'s not bad enough to fail the build.')
core.notice('Something happened that you might want to know about.')

async function CreateJobSummary() {
    await core.summary
        .addHeading('Test Results')
        .addCodeBlock(`const thisWorks = true`, "js")
        .addTable([
            [{ data: 'File', header: true }, { data: 'Result', header: true }],
            ['foo.js', 'Pass '],
            ['bar.js', 'Fail '],
            ['test.js', 'Pass ']
        ])
        .addLink('View staging deployment!', 'https://github.com')
        .write()
}

CreateJobSummary();
