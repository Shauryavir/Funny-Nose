noseX = 0;
noseY = 0;



function preload() {
    moustache = loadImage("https://i.postimg.cc/2SJH62MC/imgbin-nose-euclidean-nose-person-s-nose-X4-Zq-Efr00-DSx-W3z-K690-Gp-Ee-Er-removebg-preview.png")
}
    function setup() {
        canvas = createCanvas(500, 450);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(500, 450)
        video.hide();
        posenet = ml5.poseNet(video, modelLoaded);
        posenet.on('pose', gotPoses)
    }

    function modelLoaded() {
        console.log("posenet is initialised ")
    }

    function gotPoses(results) {
        if (results.length > 0) {
            noseX = results[0].pose.nose.x -40
            noseY = results[0].pose.nose.y -30
        }
    }

    function draw() {
        image(video, 0, 0, 500, 450)
        image(moustache, noseX, noseY, 80, 40)
    }

    function take_snapshot() {
        save('myFilterImage.png');
    }
