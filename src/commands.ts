export type Command = {
    label: string
    value: string
}

export default [
    {
        label: "h1",
        value: "# ",
    },
    {
        label: "h2",
        value: "## ",
    },
    {
        label: "h3",
        value: "### ",
    },
    {
        label: "h4",
        value: "#### ",
    },
    {
        label: "h5",
        value: "##### ",
    },
    {
        label: "h6",
        value: "###### ",
    },
    {
        label: "bold",
        value: "****",
    },
    {
        label: "italic",
        value: "**",
    },
    {
        label: "strike",
        value: "~~~~",
    },
    {
        label: "highlight",
        value: "====",
    },
    {
        label: "quote",
        value: "> ",
    },
    {
        label: "ordered-list",
        value: `1. `,
    },
    {
        label: "unordered-list",
        value: `- `,
    },
    {
        label: "external-link",
        value: "[]()",
    },
    {
        label: "image",
        value: "![]()",
    },
    {
        label: "table",
        value: `
|Left aligned text|Centered text| Right aligned text|
|---|:---:|---:|
|Cell|Cell|Cell|`,
    },
    {
        label: "inline-code",
        value: `\`\``,
    },
    {
        label: "codeblock",
        value: `
\`\`\`

\`\`\``,
    },
    {
        label: "todo",
        value: "- [ ] ",
    },
    {
        label: "line-break",
        value: "<br/>",
    },

    {
        label: "divider",
        value: `
---
`,
    },
    {
        label: "footnote",
        value: "[^id]: value",
    },
    {
        label: "link",
        value: "[[note|alias]]",
    },
    {
        label: "embed",
        value: "![[]]",
    },
    {
        label: "tag",
        value: "#",
    },
]
