import { create_bi_rtoks_with_links, create_rtoks_with_links } from './rtok_link'
import { LangDir } from './data'

describe('create rtoks wtiht links', () => {
	test('basic', () => {
		let rtok0 = {
			"s": 0,
			"e": 2,
			"text": "กา"
		};
		let rtok1 = {
			"s": 2,
			"e": 4,
			"text": "ตา"
		};
		let rtok2 = {
			"s": 4,
			"e": 6,
			"text": "มา"
		};
		let links = [
			{ source: 0, target: 1 },
			{ source: 0, target: 2 },
			{ source: 2, target: 3 },
		]
		expect(create_rtoks_with_links([rtok0, rtok1, rtok2], links, LangDir.source)).toEqual([
			{ ...rtok0, links: [{ source: 0, target: 1 }, { source: 0, target: 2 }] },
			{ ...rtok1, links: [] },
			{ ...rtok2, links: [{ source: 2, target: 3 }] }
		])
	})

})

describe("create bi-rtoks with links", () => {
	test('basic', () => {
		let src_rtok0 = {
			"s": 0,
			"e": 1,
			"text": "A"
		}
		let src_rtok1 = {
			"s": 1,
			"e": 2,
			"text": "B"
		}
		let tgt_rtok0 = {
			"s": 0,
			"e": 2,
			"text": "กา"
		}
		let tgt_rtok1 = {
			"s": 2,
			"e": 4,
			"text": "ตา"
		}
		let links = [
			{source: 0, target: 1}
		]
		let bi_rtoks = {
			source: [src_rtok0, src_rtok1],
			target: [tgt_rtok0, tgt_rtok1]
		}
		let bi_rtoks_with_links = create_bi_rtoks_with_links(bi_rtoks, links)
		let src = bi_rtoks_with_links.source
		let tgt = bi_rtoks_with_links.target
		expect(src[0]).toEqual({...src_rtok0, links: [{source: 0, target: 1}]})
		expect(tgt[1]).toEqual({...tgt_rtok1, links: [{source: 0, target: 1}]})
	})
})
