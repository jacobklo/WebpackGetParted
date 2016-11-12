/**
 * Created by jacoblo on 11/11/16.
 */
document.write("Hello from entry2");

var imgSmall = document.createElement("img");
imgSmall.src = require("./../img/small.png");
document.body.appendChild(imgSmall);

var imgBig = document.createElement("img");
imgBig.src = require("./../img/big.png");
document.body.appendChild(imgBig);

