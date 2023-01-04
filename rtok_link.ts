import { TextUnit, RTok, RTokWithLinks, Link, LangDir, BiRToks, BiRToksWithLinks } from './data'

export function create_rtoks_with_links(rtoks: RTok[], links: Link[], lang_dir: LangDir): RTokWithLinks[] {
	return rtoks.map((rtok, i) => {
		let selected_links = links.filter(link => link[lang_dir] == i)
		return { ...rtok, links: selected_links }
	})
}

export function create_bi_rtoks_with_links(bi_rtoks: BiRToks, links: Link[]): BiRToksWithLinks {
	return {
		source: create_rtoks_with_links(bi_rtoks.source, links, LangDir.source),
		target: create_rtoks_with_links(bi_rtoks.target, links, LangDir.target),
	}
}
