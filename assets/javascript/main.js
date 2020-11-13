let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           let rand = Math.floor(Math.random() * Number(2)) + 0;
           if (rand === 0) {
              return this.state = 0;
           } else if (rand === 1) {
              return this.state = 1;
           }
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           let str = ""
           if (this.state === 0) {
               return this.str = "Heads";
           } else if (this.state === 1) {
                return this.str = "Tails";
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           if (this.state === 0) {
              image.className = "image-one";
              image.id = "image-one";
              image.src = "assets/images/quarter-heads-569x570.jpg";
              return document.body.append(image);
           } else if (this.state === 1) {
              image.className = "image-two";
              image.id = "image-two";
              image.src = "assets/images/quarter-tails-612x612.jpg";
              return document.body.append(image);
           }
    }
};
//console.log(coin.flip());
//console.log(coin.toString());
console.log(coin.toHTML());

function display20Flips() {
    // make this outside the function
    for (let i = 1; i<=20; i++) {
      console.log(coin.flip());
      console.log(coin.toString());
      let divElement = document.createElement("div");
      let flipText = document.createTextNode( i + ". " + coin.toString() );
      divElement.appendChild(flipText);
      bodySectionElement = document.querySelector("body");
      bodySectionElement.append(divElement);
    }
    
}
bodySectionElement = document.querySelector("body");
bodySectionElement.append(display20Flips());

function display20Images() {
  // make this outside the function
  for (let j = 1; j<=20; j++) {
    console.log(coin.flip());
    //console.log(coin.toString());
    console.log(coin.toHTML());
  }
}

bodySectionElement = document.querySelector("body");
bodySectionElement.append(display20Images());


