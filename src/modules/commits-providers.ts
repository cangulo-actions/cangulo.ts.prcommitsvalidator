import * as ghClientProvider from '@actions/github'
import { Settings } from '../models/Settings'

export async function GetCommits(settings: Settings): Promise<string[]> {

    const restClient = ghClientProvider.getOctokit(settings.ghToken)
    const commits = await restClient.rest.pulls.listCommits({
        owner: settings.repoOwner,
        repo: settings.repoName,
        pull_number: settings.prNumber
    })

    return commits.data.map(x => x.commit.message)
}
