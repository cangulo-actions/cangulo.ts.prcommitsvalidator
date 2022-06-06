import * as core from '@actions/core';
class Settings {
}
export function GetSettings() {
    if (process.env.GITHUB_EVENT_NAME !== 'pull_request') {
        throw new Error("GH Action not triggered by a PR. Please update your workflows to trigger this check for PR only.");
    }
    const ghToken = core.getInput('gh-token', { required: true });
    const repoOwner = process.env.GITHUB_REPOSITORY_OWNER;
    const repoName = process.env.GITHUB_REPOSITORY.replace(`${repoOwner}/`, '');
    // full event webhook payload
    // const fileContent = fs.readFileSync(process.env.GITHUB_EVENT_PATH!, 'utf8')
    let prNumber = process.env.GITHUB_REF; //format: refs/pull/<pr_number>/merge
    prNumber = prNumber.replace('refs/pull/', '');
    prNumber = prNumber.replace('/merge', '');
    return {
        prNumber: Number.parseInt(prNumber),
        ghToken,
        repoOwner,
        repoName
    };
}
