export interface Option {
    option: string,
    label: string,
    checked: boolean,
    removed: boolean,
    id: string
}

export const options: Omit<Option, 'id'>[] = [
    { option: "🫐", label: "plum", checked: false, removed: false },
    { option: '🍒', label: "chery", removed: false, checked: false },
    { option: '🍏', label: "apple", removed: false, checked: false },
    { option: '🍉', label: "watermelon", removed: false, checked: false },
    { option: '🍌', label: "banana", removed: false, checked: false },
]

export const extraOption = [
{ option: "🌍", label: "earth", checked: false,  removed: false },
]