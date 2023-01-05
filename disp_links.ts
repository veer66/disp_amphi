import { BiRToksWithLinks, RTokWithLinks, Link } from './data'
import { create_bi_rtoks_with_links } from './rtok_link'
import { read_tu } from './tu'

function link_to_s(link: Link): string {
	return `${link.source}-${link.target}`
}

function links_to_s(links: Link[]): string {
	return links.map(link_to_s).join(",")
}

function rtok_with_links_to_s(rtok_with_link: RTokWithLinks): string {
	return `${rtok_with_link.text}@${rtok_with_link.s}-${rtok_with_link.e}#${links_to_s(rtok_with_link.links)}`
}

function rtoks_with_links_to_s(rtoks_with_links: RTokWithLinks[]): string {
	return rtoks_with_links.map(rtok_with_links_to_s).join(" ")
}
function disp_bi_rtoks_with_links(bi_rtoks_with_links: BiRToksWithLinks): void {
	console.log(`${rtoks_with_links_to_s(bi_rtoks_with_links.source)} ||| ${rtoks_with_links_to_s(bi_rtoks_with_links.target)}`)
}

function main(): void {
    if (process.argv.length != 4) {
        console.log('Usage: node disp_links.js <amphi path> <line no>')
        process.exit(1)
    }
    let file_path: string = process.argv[2]
    let line_no: number = parseInt(process.argv[3])
    let tu = read_tu(file_path, line_no)
    let bi_rtoks_with_links = create_bi_rtoks_with_links(tu.bi_rtoks, tu.links)
	disp_bi_rtoks_with_links(bi_rtoks_with_links)
}

main()
