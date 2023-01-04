import { PhrasePair, RTok } from './data'
import { read_tu } from './tu'

function rtok_to_s(rtok: RTok): string {
	return `${rtok.text}@${rtok.s}-${rtok.e}`	
}

function rtoks_to_s(rtoks: RTok[]): string {
	return rtoks.map(rtok_to_s).join(" ")
}

function disp_phrase_pair(phrase_pair: PhrasePair): void {
	console.log(`${rtoks_to_s(phrase_pair.source)} ||| ${rtoks_to_s(phrase_pair.target)}`)
}

function disp_phrase_pairs(phrase_pairs: PhrasePair[]): void {
	phrase_pairs.forEach(disp_phrase_pair)
}

function main(): void {
    if (process.argv.length != 4) {
        console.log('Usage: node disp_links.js <amphi path> <line no>')
        process.exit(1)
    }
    let file_path: string = process.argv[2]
    let line_no: number = parseInt(process.argv[3])
    let tu = read_tu(file_path, line_no)
	disp_phrase_pairs(tu.initial_phrase_pairs)
}

main()
