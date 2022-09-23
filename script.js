function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const init = () => {
    //get the avatar
    // const avatar = document.querySelector("#avator");
    // //get the coin
    // const coin = document.querySelector("#coin");
    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }

        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }

        if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveLateral(avatar, -50);
        }

        if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveLateral(avatar, 50);
        }

        if(isTouching(avatar,coin)) moveCoin();
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveLateral = (element, amount) => {
    const currX = extractPos(element.style.left);
    element.style.left = `${currX + amount}px`
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    // const y = ?
    const y = Math.floor(Math.random() * window.innerHeight)
    coin.style.top = `${x}px`;
    // coin.style.?? = ??
    coin.style.left = `${y}px`
}

init();