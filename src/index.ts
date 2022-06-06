import * as core from '@actions/core';
import * as settingsProvider from './modules/settings-provider'

const settings = settingsProvider.GetSettings()

console.log(`settings:${settings.prNumber}`)