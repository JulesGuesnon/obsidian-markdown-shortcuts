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
        value: "**bold**",
    },
    {
        label: "italic",
        value: "*italic*",
    },
    {
        label: "strike",
        value: "~~strike~~",
    },
    {
        label: "highlight",
        value: "==highlight==",
    },
    {
        label: "quote",
        value: "> ",
    },
    {
        label: "ordered-list",
        value: `
1. First item
2. Second item
3. Third item`,
    },
    {
        label: "unordered-list",
        value: `
- First item
- Second item
- Third item`,
    },
    {
        label: "external-link",
        value: "[link text](https://my.link)",
    },
    {
        label: "image",
        value: "![alt text](https://via.placeholder.com/150)",
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
        value: `\`let hello = "world"\``,
    },
    {
        label: "codeblock",
        value: `
\`\`\`rust
let hello = 'world' 
\`\`\``,
    },
    {
        label: "todo",
        value: "- [ ] To do",
    },
    {
        label: "line-break",
        value: "<br/>",
    },

    {
        label: "divider",
        value: `
Optional
---`,
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
        value: "![[page]]",
    },
    {
        label: "tag",
        value: "#tag",
    },
]
