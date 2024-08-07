import type {INSTRUMENTS} from '$config'
import type {ComposerSettings, PlayerSettings, VsrgComposerSettings, ZenKeyboardSettings} from '$lib/BaseSettings'
import {AppI18N} from "$i18n/i18n";
import {InstrumentName} from "$types/GeneralTypes";


export type SettingsCategory =
    'keyboard'
    | 'metronome'
    | 'layout_settings'
    | "player_settings"
    | "song_settings"
    | "composer_settings"
    | "editor_settings"
    | "player_practice_settings"

export type NameOrDescriptionKey = keyof AppI18N['settings']['props']


interface BaseSettingsProp {
    name: NameOrDescriptionKey
    songSetting: boolean
    category: SettingsCategory
    tooltip?: NameOrDescriptionKey
}

export type SettingsPropriety =
    SettingsInstrument
    | SettingsSelect
    | SettingsSlider
    | SettingsNumber
    | SettingsCheckbox
    | SettingsText

export type SettingsInstrument = BaseSettingsProp & {
    type: 'instrument'
    volume: number
    value: InstrumentName
    options: InstrumentName[]
}
export type SettingsCheckbox = BaseSettingsProp & {
    type: 'checkbox'
    value: boolean
}

export type SettingsNumber = BaseSettingsProp & {
    type: 'number'
    value: number
    increment: number
    threshold: [number, number]
    placeholder?: string
}
export type SettingsText = BaseSettingsProp & {
    type: 'text'
    value: string
    placeholder?: string
}
export type SettingsSlider = BaseSettingsProp & {
    type: 'slider'
    value: number
    threshold: [number, number]
    step?: number
}
export type SettingsSelect<T = string | number> = BaseSettingsProp & {
    type: 'select'
    value: T
    options: T[]
}

export type SettingUpdateKey =
    keyof typeof ComposerSettings.data
    | keyof typeof PlayerSettings.data
    | keyof typeof VsrgComposerSettings.data
    | keyof typeof ZenKeyboardSettings.data
export type SettingUpdate = {
    key: SettingUpdateKey,
    data: SettingsPropriety
}
export type SettingVolumeUpdate = {
    key: SettingUpdateKey
    value: number
}