let animation = () => {

      let word = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];

      let hexcolor = (y) => {

          for (let x = 0; x < word.length/2 - 2; x++) {

             let n = Math.floor(Math.random()*word.length);

             let hexcode = word[n];

             y=y+hexcode;

          }

          return y;

      }

      let color = ("#"+hexcolor(""));

      let body = document.querySelectorAll("body")[0];

      let p = document.createElement("p");

      var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

      var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

      var xx = Math.floor(Math.random()*width);

      var yy = Math.floor(Math.random()*height);

      p.style.left = (width-xx) +"px";

      p.style.top = (height-yy) +"px";

      body.appendChild(p);

      let n = Math.random() * 10;

      p.style.width = 0.5+n +"px";

      p.style.height = 0.5+n +"px";

      p.style.backgroundColor = color;

      setTimeout(function() {

        p.remove()

      }, 1950);

  

}

setInterval(animation,200);

