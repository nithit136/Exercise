window.addEventListener('load', () => {
    const canvas = document.querySelector("Canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
     canvas.height = window.innerHeight;
     canvas.clientWidth = window.innerWidth;

    ctx.strokeRect(50, 50, 200, 500);
    ctx.strokeRect(100, 10, 200, 500);

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(200, 100);
    ctx.closePath
    ctx.stroke()

    //variable
    let painting = false
    function startPosition(){
        painting = true;
    
    }
    function finisgPosition( ) {
        painting = false;
        ctx.beginPath();
    }


    //EventListener
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finisgPosition)
    canvas.addEventListener("mousemove", draw)

    function draw(e) {
        if(!painting) return; 
        ctx.lientWidth  = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);     
    }


   

     ctx.beginPath();
     ctx.arc(100, 100, 30,0, Math.PI*2);
     ctx.fill();
     ctx.lineWidth = circle.lineWidth;
     ctx.closePath
}); 