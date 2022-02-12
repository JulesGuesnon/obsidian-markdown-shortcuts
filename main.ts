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
            editorCallback: async (_editor: Editor, _view: MarkdownView) => {
                this.settings.activated = true

                await this.saveSettings()
            },
        })

        this.addCommand({
            id: "markdown-commands-disabled",
            name: t.commandPalette.disabled,
            editorCallback: async (_editor: Editor, _view: MarkdownView) => {
                this.settings.activated = false

                await this.saveSettings()
            },
        })

        // This adds a settings tab so the user can configure various aspects of the plugin
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
