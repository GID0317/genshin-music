import {KeyboardCode, KeyboardLetter, KeyboardNumber, KeyboardNumberCode} from "./KeyboardTypes";
import {DEFAULT_ENG_KEYBOARD_MAP} from "$i18n/i18n";

export type KeyboardListenerOptions = {
    shift?: boolean
    id?: string
    type?: 'keydown' | 'keyup'
}
export type KeyboardRawListenerOptions = {
    id?: string
    type?: 'keydown' | 'keyup'
}
export type KeyboardEventData = { letter: string, shift: boolean, event: KeyboardEvent, code: KeyboardCode }
export type KeyboardListenerCallback = (data: KeyboardEventData) => void
export type KeyboardHandler = {
    callback: KeyboardListenerCallback
    options: KeyboardListenerOptions
}


export class KeyboardProviderClass {
    private handlers: Map<string, KeyboardHandler[]>
    private listeners: KeyboardHandler[] = []
    private layoutMap: Map<string, string> | undefined

    constructor() {
        this.handlers = new Map<string, KeyboardHandler[]>()
    }

    static get emptyHandler(): KeyboardHandler {
        return {
            callback: () => {
            },
            options: {
                shift: false,
                id: '',
                type: 'keydown'
            }
        }
    }

    create = () => {
        window.addEventListener('keydown', this.handleEvent)
        window.addEventListener('keyup', this.handleEvent)
        window.addEventListener('keypress', this.handleEvent)
        try {
            if ('keyboard' in navigator) {
                // @ts-ignore
                navigator.keyboard.getLayoutMap().then(layoutMap => {
                    const entries = [...layoutMap.entries()] as [string, string][]
                    if(entries.length === 0) return
                    this.layoutMap = new Map<string, string>(entries)
                })
            }
        } catch (e) {
            console.error(e)
        }

    }
    destroy = () => {
        this.clear()
        window.removeEventListener('keydown', this.handleEvent)
        window.removeEventListener('keyup', this.handleEvent)
        window.removeEventListener('keypress', this.handleEvent)
    }
    clear = () => {
        this.handlers.clear()
        this.listeners = []
    }
    listen = (callback: KeyboardListenerCallback, options?: KeyboardRawListenerOptions) => {
        const handler = KeyboardProviderClass.emptyHandler
        handler.callback = callback
        if (options) Object.assign(handler.options, options)
        this.listeners.push(handler)
        return callback
    }
    unlisten = (callback: KeyboardListenerCallback) => {
        this.listeners = this.listeners.filter(handler => handler.callback !== callback)
    }
    unregister = (code: KeyboardCode, callback: KeyboardListenerCallback) => {
        const handlers = this.handlers.get(code)
        if (handlers) {
            this.handlers.set(code, handlers.filter(handler => handler.callback !== callback))
            if (this.handlers.get(code)?.length === 0) this.handlers.delete(code)
        }
    }
    unregisterById = (id: string) => {
        this.handlers.forEach((handler, key) => {
            this.handlers.set(key, handler.filter(handler => handler.options.id !== id))
            if (this.handlers.get(key)?.length === 0) this.handlers.delete(key)
        })
        this.listeners = this.listeners.filter(handler => handler.options.id !== id)
    }


    register = (code: KeyboardCode, callback: KeyboardListenerCallback, options?: KeyboardListenerOptions) => {
        const handler = KeyboardProviderClass.emptyHandler
        handler.callback = callback
        if (options) Object.assign(handler.options, options)
        if (this.handlers.has(code)) {
            this.handlers.get(code)?.push(handler)
        } else {
            this.handlers.set(code, [handler])
        }
        return callback
    }
    registerLetter = (letter: KeyboardLetter, callback: KeyboardListenerCallback, options?: KeyboardListenerOptions) => {
        this.register(`Key${letter}`, callback, options)
        return callback
    }
    registerNumber = (number: KeyboardNumber, callback: KeyboardListenerCallback, options?: KeyboardListenerOptions) => {
        const letter = number.toString()
        this.register(`Digit${letter}` as KeyboardNumberCode, callback, options)
        return callback
    }
    private handleEvent = (e: KeyboardEvent) => {
        if (document.activeElement?.tagName === "INPUT") return
        const code = e.code as KeyboardCode
        const isKeyUp = e.type === 'keyup'
        const isKeyDown = e.type === 'keydown'
        const letter = code.replace('Key', '')
        const shiftPressed = e.shiftKey
        const data = {letter, shift: shiftPressed, event: e, code}
        this.listeners.forEach(handler => {
            if (handler.options.type === 'keydown' && isKeyDown) handler.callback(data)
            if (handler.options.type === 'keyup' && isKeyUp) handler.callback(data)
        })
        if (!this.handlers.has(code)) return
        this.handlers.get(code)?.forEach(handler => {
            if (shiftPressed && handler.options.shift) {
                if (handler.options.type === 'keydown' && isKeyDown) handler.callback(data)
                if (handler.options.type === 'keyup' && isKeyUp) handler.callback(data)
            } else if (!shiftPressed && !handler.options.shift) {
                if (handler.options.type === 'keydown' && isKeyDown) handler.callback(data)
                if (handler.options.type === 'keyup' && isKeyUp) handler.callback(data)
            }
        })
    }

    getTextOfCode = (code: KeyboardCode): string | undefined => {
        if (this.layoutMap) {
            return this.layoutMap.get(code)
        } else {
            return DEFAULT_ENG_KEYBOARD_MAP[code]
        }
        return undefined
    }
}


export const KeyboardProvider = new KeyboardProviderClass()