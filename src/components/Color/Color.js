const api = {
     BgColor: 'dark',
     TextColor: 'white'
}
const Bg_Color = localStorage.getItem("bgColor")
const Text_Color = localStorage.getItem("TextColor")

export const BgColor = Bg_Color ? Bg_Color : api.BgColor;
export const TextColor = Text_Color ? Text_Color : api.TextColor;

