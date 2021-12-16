const targetMap = new WeakMap()
let activeEffect = null

function effect (eff) {
	activeEffect = eff
	activeEffect()
	activeEffect = null
}

function ref (raw) {
	const r = {
		get value () {
			track(r, 'value')
			return raw
		},
		set value (newVal) {
			raw = newVal
			trigger(r, 'value')
		}
	}

	return r
}

function track (target, key) {
	if (activeEffect) {
		let depsMap = targetMap.get(target)
		if (!depsMap) {
			targetMap.set(target, (depsMap = new Map()))
		}

		let dep = depsMap.get(key)
		if (!dep) {
			depsMap.set(key, (dep = new Set()))
		}
		dep.add(activeEffect)
	}
}

function trigger(target, key) {
	const depsMap = targetMap.get(target)
	if (!depsMap) return

	let dep = depsMap.get(key)
	if (dep) {
		dep.forEach(effect => effect())
	}
}

function reactive (target) {
	const handler = {
		get (target, key, receiver) {
			console.log('get property ' + key )
			track(target, key)
			return Reflect.get(target, key, receiver)
		},
		set (target, key, value, reciever) {
			console.log('set property ' + key + ' value is ' + value)
			let oldValue = target[key]
			let result = Reflect.set(target, key, value, reciever)
			if (oldValue != result) {
				trigger(target, key)
			}
			return result
		}
	}

	return new Proxy(target, handler)
}

let product = reactive({ price: 5, quantity: 2})
let total = 0
let salePrice = ref(0)
effect(() => {
	total = salePrice.value * product.quantity
})

effect(() => {
	salePrice.value = product.price * 0.9
})


console.log(total)

product.quantity = 3

console.log(total)