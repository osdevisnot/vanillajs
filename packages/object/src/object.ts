let get = (obj: { [x: string]: any }, keys: string | string[], defalt?: unknown): unknown => {
	;(keys as string).split && (keys = (keys as string).split('.'))
	let p = 0
	while (obj && p < keys.length) obj = obj[keys[p++]]
	return obj === undefined || p < keys.length ? defalt : obj
}

let set = (obj: any, keys: string | string[], val: any): void => {
	;(keys as string).split && (keys = (keys as string).split('.'))
	var i = 0,
		l = keys.length,
		t = obj,
		x: any
	for (; i < l; ++i) {
		x = t[keys[i]]
		t = t[keys[i]] = i === l - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf('.') || !(+keys[i + 1] > -1) ? {} : []
	}
}

export { get, set }
