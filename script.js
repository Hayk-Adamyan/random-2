btn.addEventListener('click', function () {
	let parent = document.querySelector('.parent')
	if (parent) {
		parent.remove()
	}
	let d = document.createElement('div')
	d.className = 'parent'
	for (let i = 0; i < 10; i++) {
		let dd = document.createElement('div')
		dd.className = 'child d1'
		dd.innerHTML = parseInt(Math.random() * 50)
		dd.style.left = parseInt(Math.random((50 + 200) - 200) * 800) + 'px'
		dd.style.top = parseInt(Math.random((50 + 200) - 200) * 400) + 'px'
		let r = Math.round(Math.random() * 255)
		let g = Math.round(Math.random() * 255)
		let b = Math.round(Math.random() * 255)
		let color = `rgb(${r},${g},${b})`
		dd.style.background = color
		dd.addEventListener('click', D)
		d.append(dd)
	}
	document.body.append(d)
})
let h = setInterval(function () {
	let ch = document.querySelectorAll('.child')
	for (let k = 0; k < ch.length; k++) {
		ch[k].style.left = parseInt(Math.random((50 + 200) - 200) * 800) + 'px'
		ch[k].style.top = parseInt(Math.random((50 + 200) - 200) * 400) + 'px'
		let r = Math.round(Math.random() * 255)
		let g = Math.round(Math.random() * 255)
		let b = Math.round(Math.random() * 255)
		let color = `rgb(${r},${g},${b})`
		ch[k].style.background = color
	}
	ch = []
}, 2000)

function D() {
	console.log(this)
	this.classList.remove('child')
}






















