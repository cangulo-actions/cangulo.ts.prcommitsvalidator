import * as settingsProvider from './modules/settings-provider.js'
import * as ghClientProvider from '@actions/github'

const settings = settingsProvider.GetSettings()

console.log(`settings:${JSON.stringify(settings)}`)

const restClient = ghClientProvider.getOctokit(settings.ghToken)
// const commits = await restClient.rest.pulls.listCommits({
//     owner: settings.repoOwner,
//     repo: settings.repoName,
//     pull_number: settings.prNumber
// })

// commits.data.forEach(x => {
//     console.log(`commit msg: ${x.commit}`)
// })