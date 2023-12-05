status = "";

document.getElementById('arrowContainer').addEventListener('mouseenter', function() {
    document.getElementById('navigation').style.left = '0';
});

document.getElementById('navigation').addEventListener('mouseleave', function() {
    document.getElementById('navigation').style.left = '-200px';
});

function setup()
{
    Canvas = createCanvas(640, 420);
    Canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);

    setTimeout(function()
    {
        document.getElementById("status").innerHTML = "Página cargada!";

        setTimeout(function()
        {
            document.getElementById("status").innerHTML = "Reconociendo Objetos...";
        }, 3000);

    }, 5000);
}

function modelLoaded()
{
    console.log("Modelo CocoSsd Cargado");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error("error");
    }
    else
    {
        console.log(results);
    }
}

function preload()
{
    img = loadImage("ha.png");
}

function draw()
{
    image(img, 0, 0, 640, 420);
}

