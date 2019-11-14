let get = (obj, keys, defalt) => {
	keys.split && (keys = keys.split('.'))
	let p = 0
	while (obj && p < keys.length) obj = obj[keys[p++]]
	return obj === undefined || p < keys.length ? defalt : obj
}

let set = (obj, keys, val) => {
	keys.split && (keys = keys.split('.'))
	var i = 0,
		l = keys.length,
		t = obj,
		x
	for (; i < l; ++i) {
		x = t[keys[i]]
		t = t[keys[i]] = i === l - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf('.') || !(+keys[i + 1] > -1) ? {} : []
	}
}

export { get, set }
