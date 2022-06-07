import * as settingsProvider from './modules/settings-provider'
import * as commitsProviders from './modules/commits-providers'

const settings = settingsProvider.GetSettings()
console.log(`settings:${JSON.stringify(settings)}`)


commitsProviders
    .GetCommits(settings)
    .then(commitList => {
        commitList.forEach(x => console.log(x))
    })