c = document.getElementById("dvdlogo-canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
ctx = c.getContext("2d");
var img = document.getElementById("dvdimg");

var x = 0
var y = 0
var s = 5
var ang = Math.random() * 1.2 + 0.1
var dx = s * Math.cos(ang)
var dy = s * Math.sin(ang)
var c1 = Math.random()
var c2 = Math.random()
var c3 = Math.random()
var c4 = Math.random()


function animLoop() {

    ctx.clearRect(0, 0, c.width, c.height)
    ctx.drawImage(img, x, y)
    x += dx
    y += dy

    if (x > c.width - 200) {
        dx = -dx

        if (c1 >= c2) {
            img = document.getElementById("dvdimgp")
        }

        else if (c1 < c2) {
            img = document.getElementById("dvdimgb")
        }

    }

    if (y > c.height - 117) {
        dy = -dy

        if (c1 >= c3) {
            img = document.getElementById("dvdimgo")
        }

        else if (c1 < c3) {
            img = document.getElementById("dvdimgg")
        }
    }

    if (x < 0) {
        dx = -dx

        if (c2 >= c4) {
            img = document.getElementById("dvdimg")
        }

        else if (c2 < c4) {
            img = document.getElementById("dvdimgr")
        }
    }

    if (y < 0) {
        dy = -dy

        if (c1 >= c4) {
            img = document.getElementById("dvdimggr")
        }

        else if (c1 < c4) {
            img = document.getElementById("dvdimgy")
        }
    }


    window.requestAnimationFrame(animLoop);
}

window.requestAnimationFrame(animLoop);