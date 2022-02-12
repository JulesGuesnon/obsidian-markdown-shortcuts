import MarkdownCommands from "../main"
import { App, PluginSettingTab, Setting } from "obsidian"
import t from "./i18n"

export default class SettingTab extends PluginSettingTab {
    plugin: MarkdownCommands

    constructor(app: App, plugin: MarkdownCommands) {
        super(app, plugin)
        this.plugin = plugin
    }

    display(): void {
        const { containerEl } = this

        containerEl.empty()

        containerEl.createEl("h2", { text: t.settings.title })
        containerEl.createEl("p", {
            text: t.settings.description,
        })

        new Setting(containerEl)
            .setName(t.settings.toggle.title)
            .setDesc(t.settings.toggle.description)
            .addToggle(toggle => {
                toggle
                    .setValue(this.plugin.settings.activated)
                    .onChange(async value => {
                        this.plugin.settings.activated = value
                        await this.plugin.saveSettings()
                    })
            })

        new Setting(containerEl)
            .setName(t.settings.character.title)
            .setDesc(t.settings.character.description)
            .addText(text => {
                text.setValue(this.plugin.settings.triggerChar).onChange(
                    async value => {
                        if (value.length < 1) {
                            text.setValue(this.plugin.settings.triggerChar)
                            return
                        }

                        if (value.length === 2) {
                            text.setValue(value[1])
                        }

                        this.plugin.settings.triggerChar = value[1]

                        await this.plugin.saveSettings()
                    }
                )
            })
    }
}
