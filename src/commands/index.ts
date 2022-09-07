import MarkdownShortcuts from "../../main"
import defaultCommands from "./default"
import examplelessCommands from "./exampleless"

export type Command = {
    label: string
    value: string
}

export function resolveCommands(plugin: MarkdownShortcuts) {
    if (plugin.settings.examplelessCommands) return examplelessCommands
    return defaultCommands
}
