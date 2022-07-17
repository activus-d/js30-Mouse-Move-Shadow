const hero = document.querySelector('.hero');
  const h1 = document.querySelector('h1');
  const walk = 500

hero.addEventListener('mousemove', shadows)
    function shadows(e) {
      const width = hero.offsetWidth;
      const height = hero.offsetHeight;

      let x = e.offsetX;
      let y = e.offsetY;
      // console.log(y)
      if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const walkX = Math.round((x / width * walk) - (walk / 2));
      const walkY = Math.round((y / height * walk) - (walk / 2));
      console.log(walkX, walkY)

      h1.style.textShadow = `
      ${walkX}px ${walkY}px 0 rgba(225,0,215,0.7),
      ${walkX * -1}px ${walkY}px 0 rgba(255,100,25,0.2),
      ${walkY}px ${walkX}px 0 rgba(0,255,0,0.7),
      ${walkY * -1}px ${walkX}px 0 rgba(0,155,189,0.7)
      `
    }