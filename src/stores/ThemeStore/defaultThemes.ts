import {SerializedTheme} from "./ThemeProvider"
import Rainy_Theme from "$img/themes/Rainy_Theme.png"
import Liyue_Theme from "$img/themes/Liyue_Theme.jpg"
import Snow_Theme from "$img/themes/Snow_Theme.gif"
import Legacy_Bg from "$img/themes/Legacy_Bg_Theme.png"
import Desert_Theme from "$img/themes/Desert_Theme.jpg"

import {BASE_THEME_CONFIG} from "$config"


const baseThemes: SerializedTheme[] = [
    {
        id: "Pink",
        type: 'theme',
        editable: false,
        other: {
            backgroundImageMain: "",
            backgroundImageComposer: "",
            name: "Pink",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "rgb(48, 49, 64)",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "rgb(23, 14, 46)",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(212, 171, 171)",
                text: "#151414"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "#DC45B4",
                text: "#eae8e6"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "rgb(132, 28, 104)",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "#FBDDFF",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "rgb(212, 173, 194)",
                text: "#151414"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "rgb(13, 6, 33)",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }
        }
    }, {
        editable: false,
        id: "Blue",
        type: 'theme',
        other: {
            backgroundImageMain: "",
            backgroundImageComposer: "",
            name: "Blue",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "rgb(48, 49, 64)",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "rgb(14, 32, 46)",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(171, 212, 206)",
                text: "#151414"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "rgb(56, 94, 201)",
                text: "#eae8e6"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "rgb(56, 94, 201)",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "rgb(135, 179, 255)",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "#c4cfd4",
                text: "#151414"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "rgb(14, 32, 46)",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }

        }
    },

    {
        editable: false,
        id: "Rainy_Lullaby",
        type: 'theme',
        other: {
            backgroundImageMain: Rainy_Theme.src,
            backgroundImageComposer: Rainy_Theme.src,
            name: "Rainy Lullaby",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "#394248",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "#1a212a",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "#113244",
                text: "#eae8e6"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "#88a8a4",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "#6D8582",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "#5e7775",
                text: "#eae8e6"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "rgba(237, 229, 216, 0.95)",
                text: "#151414"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "#203141",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }

        }
    },

    {
        editable: false,
        id: "Liyue",
        type: 'theme',
        other: {
            backgroundImageMain: Liyue_Theme.src,
            backgroundImageComposer: Liyue_Theme.src,
            name: "Liyue",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "#3B5A62",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "#486D78",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(228, 183, 119)",
                text: "#151414"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "#54928C",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "#54928C",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "rgb(155, 220, 230)",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "#E4D6C8",
                text: "#151414"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "rgb(255, 229, 209)",
                text: "#151414"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }

        }
    },

    {
        editable: false,
        id: "Hacker_Theme",
        type: 'theme',
        other: {
            backgroundImageMain: "",
            backgroundImageComposer: "",
            name: "Hacker",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "#070707",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "#141a14",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "#00ff00",
                text: "#151414"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "#00ff00",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "#005700",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "#00ff00",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "#202820",
                text: "#eae8e6"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "#141a14",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }

        }
    },
    {
        editable: false,
        id: "Snowy Night",
        type: 'theme',
        other: {
            backgroundImageMain: Snow_Theme.src,
            backgroundImageComposer: Snow_Theme.src,
            name: "Snowy Night",
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "rgb(0, 0, 0)",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "#141414",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(255, 255, 255)",
                text: "#151414"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "rgb(255, 255, 255)",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "rgb(255, 255, 255)",
                text: "#858585"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "rgb(255, 255, 255)",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "rgb(21, 21, 21)",
                text: "#eae8e6"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "rgb(0, 0, 0)",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }

        }
    },
    {
        editable: false,
        id: "Eons of time",
        type: "theme",
        other: {
            backgroundImageMain: Desert_Theme.src,
            backgroundImageComposer: Desert_Theme.src,
            name: "Eons of times"
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "rgb(124, 101, 76)",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "#453427d9",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(105, 80, 54)",
                text: "#eae8e6"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "rgb(251, 155, 110)",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "rgb(110, 57, 40)",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "rgb(187, 154, 119)",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "rgba(130, 108, 84, 0.8392156862745098)",
                text: "#eae8e6"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "#453427d9",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "#d3bd8e",
                text: BASE_THEME_CONFIG.text.dark
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "#de6b45",
                text: BASE_THEME_CONFIG.text.dark
            }
        }
    },
    {
        editable: false,
        id: "Sky Music",
        type: "theme",
        other: {
            backgroundImageMain: Legacy_Bg.src,
            backgroundImageComposer: Legacy_Bg.src,
            name: "Sky Music"
        },
        data: {
            background: {
                name: "background",
                css: "background",
                value: "rgb(49 49 49)",
                text: "#eae8e6"
            },
            primary: {
                name: "primary",
                css: "primary",
                value: "rgba(23, 23, 23, 0.72)",
                text: "#eae8e6"
            },
            secondary: {
                name: "secondary",
                css: "secondary",
                value: "rgb(65, 65, 65)",
                text: "#eae8e6"
            },
            accent: {
                name: "accent",
                css: "accent",
                value: "rgb(211, 189, 142)",
                text: "#151414"
            },
            composer_accent: {
                name: "composer_accent",
                css: "composer-accent",
                value: "rgb(42, 140, 132)",
                text: "#eae8e6"
            },
            icon_color: {
                name: "icon_color",
                css: "icon-color",
                value: "rgb(211, 189, 142)",
                text: "#151414"
            },
            menu_background: {
                name: "menu_background",
                css: "menu-background",
                value: "rgba(34, 34, 34, 0.72)",
                text: "#eae8e6"
            },
            note_background: {
                name: "note_background",
                css: "note-background",
                value: "rgba(33, 33, 33, 0.65)",
                text: "#eae8e6"
            },
            composer_main_layer: {
                name: "composer_main_layer",
                css: "composer-main-layer",
                value: "rgb(211, 189, 142)",
                text: "#151414"
            },
            composer_secondary_layer: {
                name: "composer_secondary_layer",
                css: "composer-secondary-layer",
                value: "rgb(222, 107, 69)",
                text: "#151414"
            }
        }
    }
]


export {
    baseThemes
}


