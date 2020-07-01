
export interface Player {
    name: string;
    color: string;
    position: number;
    loseturn: number;
    history: Array<string>;
    style: {left, marginTop, paddingTop, background, bottom, marginLeft};
}