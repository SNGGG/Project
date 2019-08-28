window.onbeforeunload = function(){
    return "Reload site?";
};

$(function(){
    var box=$(".box");
    var copy=$(".copy");
    var canvas=$("canvas");
    var cobj=canvas[0].getContext("2d");
    var aColorBtn = document.getElementsByClassName("color-item");
    getColor()

    canvas.attr({
        width:box.width(),
        height:box.height()
    })
    $(".parent").hover(function(){
        $(this).find(".son").finish();
        $(this).find(".son").slideDown(200);
        this.style.background="orange";
    },function(){
        $(this).find(".son").finish();
        $(this).find(".son").slideUp(200);
        this.style.background="rgb(190, 228, 245)";
    })
    var obj=new draw(copy[0],canvas[0],cobj,$(".xp"),$(".selectarea"));
    //paint type:
    $(".hasson:eq(0) ").find(".son li").click(function(){
        obj.shapes=$(this).attr("data-role");
        if(obj.shapes=="pen"){
            obj.pen();
        }else{
            obj.draw();
        }
    })
    //fill type

    $(".hasson:eq(1) ")[0].onmousedown=function(e){
        e.stopPropagation();
    }
    $(".hasson:eq(1) ").find(".son  li input").click(function(){
        $(this).change(function(){
            obj.borderWidth=this.value;
           
        })
    })
    //eraser
    $(".xpc li").click(function(){
        var w=$(this).attr("data-role");
        var h=$(this).attr("data-role");
        obj.xp($(".xp"),w,h);
    })


    //drag
function getColor(){
    for (let i = 0; i < aColorBtn.length; i++) {
        aColorBtn[i].onclick = function () {
            for (let i = 0; i < aColorBtn.length; i++) {
                aColorBtn[i].classList.remove("active");
                this.classList.add("active");
                activeColor = this.style.backgroundColor;
                obj.borderColor=activeColor;

            }
        }
    }
}
    //close up
    var flag=true;
    $(".sq").click(function(e){
        if(flag){
            $(".parent:not(.sq)").css({
                display:"none"
            })
            $(".sq").html("&#xe61c;");
            flag=false;
        }else{
            $(".parent:not(.sq)").css({
                display:"block"
            })
            $(".sq").html("&#xe61b;");
            flag=true;
        }
    })
    $(".select").click(function(){
        obj.select($(".selectarea"));
    })

})