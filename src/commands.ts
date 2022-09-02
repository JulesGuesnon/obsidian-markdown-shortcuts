import MarkdownShortcuts from "../main"
import exampleCommands from "./exampleCommands"
import simpleCommands from "./simpleCommands"

export type Command = {
    label: string
    value: string
}

export function resolveCommands(plugin: MarkdownShortcuts) {
    if (this.plugin.settings.simpleCommands) return simpleCommands
    return exampleCommands
}
