let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    let rand = Math.floor(Math.random() * Number(10)) + 1;
    //console.log(rand % 2);
    if (rand % 2 === 0) {
      return (this.state = 0);
    } else {
      return (this.state = 1);
    }
  },

  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    let str = "";
    if (this.state === 0) {
      return (str = "Heads");
    } else if (this.state === 1) {
      return (str = "Tails");
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    if (this.state === 0) {
      image.className = "image-one";
      //image.id = "image-one";
      image.src = "assets/images/quarter-heads-569x570.jpg";
      image.style.width = "90px";
      image.style.height = "auto";
      return image;
    } else if (this.state === 1) {
      image.className = "image-two";
      //image.id = "image-two";
      image.src = "assets/images/quarter-tails-612x612.jpg";
      image.style.width = "100px";
      image.style.height = "auto";
      return image;
    }
  },
};
//console.log(coin.flip());
//console.log(coin.toString());
//console.log(coin.toHTML());

function display20Flips() {
  // use a loop to flip the coin 20 times. Each time the coin flips,
  // display the result of each flip as a string on the page
  // (make use of your toString() method)
  // make this outside the function
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    console.log(coin.toString());
    let divElement = document.createElement("div");
    let flipText = document.createTextNode(i + ". " + coin.toString());
    divElement.appendChild(flipText);
    bodySectionElement = document.querySelector("body");
    bodySectionElement.append(divElement);
  }
}
bodySectionElement = document.querySelector("body");
bodySectionElement.append(display20Flips());

function display20Images() {
  // make this outside the function
  // using a loop to flip the coin 20 times…but this time instead of displaying
  // the result as a string, display the result of each flip as an
  // HTML IMG element on the page (make use of your toHTML() method).
  for (let j = 1; j <= 20; j++) {
    coin.flip();
    console.log(coin.toString());
    let divElement = document.createElement("div");
    divElement.appendChild(coin.toHTML());
    bodySectionElement = document.querySelector("body");
    bodySectionElement.append(divElement);
  }
}

bodySectionElement = document.querySelector("body");
bodySectionElement.append(display20Images());
