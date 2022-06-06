class Settings {
    prNumber!: number
}

export function GetSettings(): Settings {
    // const inputStr = core.getInput('who-to-greet', { required: true });

    const event_name = process.env.GITHUB_EVENT_NAME
    console.log(`event_name: ${event_name}`)

    const prNumber = process.env.GITHUB_REF

    return {
        prNumber: Number.parseInt(prNumber!)
    }

}