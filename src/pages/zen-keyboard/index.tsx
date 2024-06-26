import {ZenKeypad} from "$cmp/pages/ZenKeyboard/ZenKeypad"
import {ZenKeyboardMenu} from "$cmp/pages/ZenKeyboard/ZenKeyboardMenu"
import {ZenKeyboardSettings, ZenKeyboardSettingsDataType} from "$lib/BaseSettings"
import {Instrument, ObservableNote} from "$lib/audio/Instrument"
import {metronome} from "$lib/audio/Metronome"
import {AudioProvider} from "$lib/Providers/AudioProvider"
import {settingsService} from "$lib/Services/SettingsService"
import {logger} from "$stores/LoggerStore"
import {zenKeyboardStore} from "$stores/ZenKeyboardStore"
import {InstrumentName} from "$/types/GeneralTypes"
import {SettingUpdate, SettingVolumeUpdate} from "$/types/SettingsPropriety"
import {ReactElement, useCallback, useEffect, useState} from "react"
import {PageMetadata} from "$cmp/shared/Miscellaneous/PageMetadata"
import {AppBackground} from "$cmp/shared/pagesLayout/AppBackground"
import {MIDIProvider} from "$lib/Providers/MIDIProvider";
import {i18n} from "$i18n/i18n";
import {useTranslation} from "react-i18next";
import {useSetPageVisited} from "$cmp/shared/PageVisit/pageVisit";

export default function ZenKeyboard() {
    useSetPageVisited('zenKeyboard')
    const {t} = useTranslation(['home'])
    const [settings, setSettings] = useState(ZenKeyboardSettings.data)
    const [instrument, setInstrument] = useState(new Instrument())
    const [isMetronomePlaying, setIsMetronomePlaying] = useState(false)
    useEffect(() => {
        const settings = settingsService.getZenKeyboardSettings()
        metronome.bpm = settings.metronomeBpm.value
        setInstrument(new Instrument(settings.instrument.value))
        setSettings(settings)
        AudioProvider.setReverb(settings.reverb.value)
        return () => logger.hidePill()
    }, [])
    const updateSettings = useCallback((settings: ZenKeyboardSettingsDataType) => {
        settingsService.updateZenKeyboardSettings(settings)
    }, [])
    useEffect(() => {
        zenKeyboardStore.setKeyboardLayout(instrument.notes)
    }, [instrument])
    const handleSettingChange = async (setting: SettingUpdate) => {
        //@ts-ignore
        const {data} = setting
        //@ts-ignore
        settings[setting.key] = {...settings[setting.key], value: data.value}
        if (setting.key === "instrument") {
            setInstrument(new Instrument(data.value as InstrumentName))
        }
        if (setting.key === 'reverb') {
            AudioProvider.setReverb(data.value as boolean)
        }
        if (setting.key === 'metronomeBpm') metronome.bpm = data.value as number
        if (setting.key === 'metronomeBeats') metronome.beats = data.value as number
        if (setting.key === 'metronomeVolume') metronome.changeVolume(data.value as number)
        setSettings({...settings})
        updateSettings(settings)
    }
    useEffect(() => {
        async function load() {
            logger.showPill(i18n.t('zen_keyboard:loading_instrument', {
                instrument: i18n.t('instruments.' + settings.instrument.value)
            }))
            await instrument.load(AudioProvider.getAudioContext())
            logger.hidePill()
            AudioProvider.connect(instrument.endNode, null)
        }

        load()
        return () => {
            AudioProvider.disconnect(instrument.endNode)
        }
    }, [instrument])
    const onNoteClick = useCallback((note: ObservableNote) => {
        instrument.play(note.index, settings.pitch.value)
        zenKeyboardStore.animateNote(note.index)
        MIDIProvider.broadcastNoteClick(note.midiNote)
    }, [instrument, settings.pitch.value])

    useEffect(() => {
        if (isMetronomePlaying) metronome.start()
        else metronome.stop()
    }, [isMetronomePlaying])

    const onVolumeChange = useCallback((data: SettingVolumeUpdate) => {
        instrument.changeVolume(data.value)
    }, [instrument])
    return <>
        <PageMetadata text={t('zen_keyboard_name')}
                      description="The simplest keyboard in the app, focus only on playing manually with all the features of the player, instrument and pitch selection, animations and metronome"/>
        <ZenKeyboardMenu
            settings={settings}
            isMetronomePlaying={isMetronomePlaying}
            setIsMetronomePlaying={setIsMetronomePlaying}
            onVolumeChange={onVolumeChange}
            handleSettingChange={handleSettingChange}
        />
        <div className="flex-centered">
            <ZenKeypad
                instrument={instrument}
                onNoteClick={onNoteClick}
                noteNameType={settings.noteNameType.value}
                pitch={settings.pitch.value}
                scale={settings.keyboardSize.value}
                keySpacing={settings.keyboardSpacing.value}
                verticalOffset={settings.keyboardYPosition.value}
            />
        </div>

    </>
}

ZenKeyboard.getLayout = function getLayout(page: ReactElement) {
    return <AppBackground page="Main">{page}</AppBackground>
}