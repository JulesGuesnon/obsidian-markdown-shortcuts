import { Editor, MarkdownView, Plugin } from "obsidian"
import { Settings, CommandsSuggest, t } from "./src"

interface MarkdownShortcutsSettings {
    triggerChar: string
    examplelessCommands: boolean
}

const DEFAULT_SETTINGS: MarkdownShortcutsSettings = {
    triggerChar: ">",
    examplelessCommands: false,
}

export default class MarkdownShortcuts extends Plugin {
    settings: MarkdownShortcutsSettings

    async onload() {
        await this.loadSettings()

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
