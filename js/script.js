const navLink1 = document.querySelector('.navLink1')
const navLink2 = document.querySelector('.navLink2')
const navLinkActive1 = document.querySelector('.navLinkActive1')
const navLinkActive2 = document.querySelector('.navLinkActive2')

const onClickLinkHandler = event => {
	event.target.classList.toggle('active')
	console.log(event.target.className)
	
	event.target.className.split(' ').forEach(item => {
		item === 'navLink1' ? navLinkActive1.classList.toggle('d-block') : null
	})
	event.target.className.split(' ').forEach(item => {
		item === 'navLink2' ? navLinkActive2.classList.toggle('d-block') : null
	})
}

navLink1.onclick = event => onClickLinkHandler(event)
navLink2.onclick = event => onClickLinkHandler(event)