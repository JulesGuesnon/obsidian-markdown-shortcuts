class T {
    lang: string

    all = {
        en: {
            settings: {
                title: "Markdown commands settings",
                description:
                    "To quickly enable or disable the plugin, you can use the command palette.",
                toggle: {
                    title: "Activated",
                    description: "Wether or not the suggest will be triggered.",
                },
                character: {
                    title: "Trigger character",
                    description:
                        "Which character should show the suggestions. (press a key to replace the current char)",
                },
                examplelessCommands: {
                    title: "Exampleless commands",
                    description:
                        "Insert commands without examples: [ ]( ) instead of [link text](https://my.link)",
                    tooltip: "Exampleless commands",
                },
            },
            commandsSuggest: {
                noResult: "No result",
            },
            commandPalette: {
                enable: "Enable",
                disabled: "Disable",
            },
        },
        fr: {
            settings: {
                title: "Réglages Commandes Markdown",
                description:
                    "Pour rapidement activer ou désactiver le plugin, vous pouvez utiliser la palette de commande.",
                toggle: {
                    title: "Activé",
                    description: "Si la suggestion sera déclenchée ou non.",
                },
                character: {
                    title: "Caractère de déclenchement",
                    description:
                        "Quel caractère doit déclencher l'affichage des suggestions. (appuyez sur une touche pour remplacer le caractère actuel)",
                },
                examplelessCommands: {
                    title: "Commandes sans exemple",
                    description:
                        "Insère des commandes sans exemple: [ ]( ) au lieu de [link text](https://my.link)",
                    tooltip: "Commandes sans exemple",
                },
            },
            commandsSuggest: {
                noResult: "Pas de résultat",
            },
            commandPalette: {
                enable: "Activer",
                disabled: "Désactiver",
            },
        },
    }

    constructor() {
        this.lang = localStorage.getItem("language")
    }

    get texts(): typeof this.all.en {
        return this.all[this.lang === "fr" ? "fr" : "en"]
    }
}

export default new T().texts
