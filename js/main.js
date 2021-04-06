

var toggle = true
function small() {
    debugger
    var elBalls = document.querySelectorAll('.big1, .big2, .big3')

    for (var i = 0; i < elBalls.length; i++) {
        var elBall = elBalls[i]
        console.log(elBall)

        if (toggle) {
      
            elBall.style.backgroundColor = '#00c9ff'
            toggle = false

        } else {


   
            elBall.style.backgroundColor = 'grey'
            toggle = true

        }

    }
}


function enlarge() {
    // debugger
    var elBalls = document.querySelectorAll('.big1, .big2, .big3')
    for (var i = 0; i < elBalls.length; i++) {
        var elboll = elBalls[i]
        if (toggle) {
            elboll.style.width = '50px'
            elboll.style.height = '50px'
            elboll.style.transform = 'rotateX(150deg)'
            elboll.style.backgroundColor = 'yellow'
            toggle = false
        } else {
            elboll.style.width = '150px'
            elboll.style.height = '150px'
            elboll.style.transform = 'rotateX(150deg)'
            toggle = true

        }

    }
}

function rotate() {
    var elball = document.querySelector('.big1')
    if (toggle) {
        elball.style.width = '700px'
        elball.style.backgroundColor = 'blue'
        // elball.style.transform = rotateX('150deg')
        toggle = false

    } else {
        elball.style.width = '300px'
        // elball.style.transform = rotateX('150deg')
        toggle = true


    }
}
function big() {
    var elball = document.querySelector('.big1')
    if (toggle) {
        elball.style.width = '20px'
        // elball.style.transform = rotateX('150deg')
        toggle = false

    } else {
        elball.style.width = '100px'
        elball.style.height = '100px'
        // elball.style.transform = rotateX('150deg')
        toggle = true


    }
}

function light() {
    // debugger
    var ball = document.querySelector('.big3')
    if (toggle) {
        ball.style.backgroundColor = 'yellow'
        ball.style.height = '50px'
        ball.style.width = '190px'
        toggle = false

    } else {
        ball.style.width = '200px'
        ball.style.height = '100px'
        ball.style.backgroundColor = 'green'
        toggle = true

    }
}

function move() {
    // debugger
    var squares = document.querySelectorAll('.big1, .big2, .big3')
    console.log(squares)

    for (var i = 0; i < squares.length; i++) {
        var SingleBall = squares[i]
        console.log(SingleBall)
        if (toggle) {
            SingleBall.style.backgroundColor = 'blue'
            toggle = false

        } else {
            SingleBall.style.backgroundColor = 'green'
            toggle = true


        }
    }



}



