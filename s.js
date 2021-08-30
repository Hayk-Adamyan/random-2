btn.addEventListener('click',function(){
	let parent = document.querySelector('.parent')
	if (parent){parent.remuve()}
	let d = document.createElement(div)
	d.className = 'parent'
	for(let i = 0; i<10;i++){
		let dd = document.createElement(div)
		dd.innerHTML = parseInt(Math.random() * 50)
		dd.className = 'child'
		dd.style.background = 'red'
		d.append(dd)
	}
	document.body.append(d)
})