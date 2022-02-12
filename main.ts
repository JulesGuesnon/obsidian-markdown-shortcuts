import { Editor, MarkdownView, Plugin } from "obsidian"
import { Settings, CommandsSuggest, t } from "./src"

interface MarkdownCommandsSettings {
    activated: boolean
    triggerChar: string
}

const DEFAULT_SETTINGS: MarkdownCommandsSettings = {
    activated: true,
    triggerChar: ">",
}

export default class MarkdownCommands extends Plugin {
    settings: MarkdownCommandsSettings

    async onload() {
        await this.loadSettings()

        this.addCommand({
            id: "markdown-commands-enable",
            name: t.commandPalette.enable,
            callback: async () => {
                this.settings.activated = true

                await this.saveSettings()
            },
        })

        this.addCommand({
            id: "markdown-commands-disabled",
            name: t.commandPalette.disabled,
            callback: async () => {
                this.settings.activated = false

                await this.saveSettings()
            },
        })

        this.addSettingTab(new Settings(this.app, this))

        this.registerEditorSuggest(new CommandsSuggest(this.app, this))
    }

    onunload() {}

    async loadSettings() {
        this.settings = { ...DEFAULT_SETTINGS, ...(await this.loadData()) }
    }

    async saveSettings() {
        await this.saveData(this.settings)
    }
}
