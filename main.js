canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";

canvas.addEventListener("mousedown" , my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup" , my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mousedown(e){
    mouseEvent="mousedown";
}
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function my_mouseup(e){
    mouseEvent="mouseup";
}
function my_mousemove(e){

    color=document.getElementById("Color").value;
    lineWidth=document.getElementById("line_width").value;

console.log(color);
console.log(lineWidth);

    current_pos_mouse_x=e.clientX-canvas.offsetLeft;
    current_pos_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;

        ctx.moveTo(last_pos_x, last_pos_y);
        console.log("last position, x=" + last_pos_x +" y=" + last_pos_y);
        ctx.lineTo(current_pos_mouse_x, current_pos_mouse_y);
        console.log("current position, x=" + current_pos_mouse_x +" y=" + current_pos_mouse_y);

        ctx.stroke();
    }
    last_pos_x=current_pos_mouse_x;
    last_pos_y=current_pos_mouse_y;
}