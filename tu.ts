import { readFileSync } from 'fs'
import { TextUnit } from './data'

export function read_tu(file_path: string, line_no: number): TextUnit {
	let raw = readFileSync(file_path, {encoding: "utf-8"})
    let lines = raw.split(/\n/).filter(line => line != "")
    let line = lines[line_no]    
    return JSON.parse(line)
}
