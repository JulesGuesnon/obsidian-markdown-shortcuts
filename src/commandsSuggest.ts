import MarkdownShortcuts from "../main"
import {
    App,
    Editor,
    EditorPosition,
    EditorSuggest,
    EditorSuggestContext,
    EditorSuggestTriggerInfo,
    TFile,
} from "obsidian"
import { resolveCommands, Command } from "./commands"
import t from "./i18n"

export default class CommandsSuggest extends EditorSuggest<Command> {
    inCmd = false
    cmdStartCh = 0
    plugin: MarkdownShortcuts

    constructor(app: App, plugin: MarkdownShortcuts) {
        super(app)
        this.plugin = plugin
    }
    resetInfos() {
        this.cmdStartCh = 0
        this.inCmd = false
    }

    onTrigger(
        cursor: EditorPosition,
        editor: Editor,
        _file: TFile
    ): EditorSuggestTriggerInfo {
        const currentLine = editor.getLine(cursor.line).slice(0, cursor.ch)

        if (
            !this.inCmd &&
            currentLine[currentLine.length - 1] !==
                this.plugin.settings.triggerChar
        ) {
            this.resetInfos()
            return null
        }

        if (!this.inCmd) {
            this.cmdStartCh = currentLine.length - 1
            this.inCmd = true
        }

        const currentCmd = currentLine.slice(this.cmdStartCh, cursor.ch)

        if (
            currentCmd.includes(" ") ||
            !currentCmd.includes(this.plugin.settings.triggerChar)
        ) {
            this.resetInfos()
            return null
        }

        return { start: cursor, end: cursor, query: currentCmd.slice(1) }
    }

    getSuggestions(
        context: EditorSuggestContext
    ): Command[] | Promise<Command[]> {
        const suggestions = resolveCommands(this.plugin).filter(({ label }) =>
            label.includes(context.query)
        )

        return suggestions.length > 0
            ? suggestions
            : [{ label: t.commandsSuggest.noResult, value: "" }]
    }

    renderSuggestion(value: Command, el: HTMLElement): void {
        const div = document.createElement("div")

        div.textContent = value.label

        el.appendChild(div)
    }

    selectSuggestion(cmd: Command, _evt: MouseEvent | KeyboardEvent): void {
        if (cmd.label === t.commandsSuggest.noResult) return

        this.context.editor.replaceRange(
            cmd.value,
            { ...this.context.start, ch: this.cmdStartCh },
            this.context.end
        )

        this.resetInfos()

        this.close()
    }
}
