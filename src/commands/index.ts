import MarkdownShortcuts from "../../main"
import exampleCommands from "./example"
import simpleCommands from "./simple"

export type Command = {
    label: string
    value: string
}

export function resolveCommands(plugin: MarkdownShortcuts) {
    if (plugin.settings.simpleCommands) return simpleCommands
    return exampleCommands
}
