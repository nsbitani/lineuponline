$(document).ready(function(){
        $("#no").click(function(){
            $("#help").removeClass('hidden');
            $(".yn").addClass('hidden');
        });
        $("#yes").click(function(){
            $(".yn").addClass('hidden');
            $("#question").removeClass('hidden');
        });
        $('#office li a').on('click', function(){
            $("#boo").addClass('hidden');
            $(".person").addClass('hidden');
            var val = this.innerHTML;
            $('#'+val).removeClass('hidden');
            $("#yesnow").removeClass('hidden');
        });
        $("#yesnow").click(function(){
            $("#help").addClass('hidden');
            $(".person").addClass('hidden');
            $("#yesnow").addClass('hidden');
            $("#question").removeClass('hidden');
        });

        $(".correct").click(function(){
            $("#question").addClass('hidden');
            $("#yay").removeClass('hidden');
        });
        $(".incorrect").click(function(){
            $("#question").addClass('hidden');
            $("#boo").removeClass('hidden');
            $("#help").removeClass('hidden');
        });
        $("#next").click(function(){
            $("#yay").addClass('hidden');
            $("#lineup").removeClass('hidden');
            document.getElementById('main').style.backgroundImage="url(LULBoss.png)";
        });
    });