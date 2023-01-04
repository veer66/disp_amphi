export interface RTok {
    s: number,
    e: number,
    text: string
}

export interface BiRToks {
    source: RTok[],
    target: RTok[]
}

interface BiText {
    source: string,
    target: string
}

export interface Link {
    source: number,
    target: number
}

export interface PhrasePair {
	source: RTok[],
	target: RTok[]
}

export interface TextUnit {
    i: number,
    bi_text: BiText,
    bi_rtoks: BiRToks,
    tree: any,
    links: Link[],
    initial_phrase_pairs: PhrasePair[]
}

export interface RTokWithLinks {
    s: number,
    e: number,
    text: string,
    links: Link[]
}

export interface BiRToksWithLinks {
	source: RTokWithLinks[],
    target: RTokWithLinks[]
}

export enum LangDir {
    source = "source",
    target = "target"
}
