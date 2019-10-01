
var currentHour = moment().hours();

console.log(currentHour);

function updateHours(){
    $(".hour-block").each(function()
    {
        var hour = $(this).attr("id");
        var h = hour.split("-")[1];
        console.log(h);
        if(h<currentHour)
        {
            $(this).addClass("past");
        }
        else if(h === currentHour)
        {
            $(this).addClass("present");
        }
        else if(h > currentHour)
        {
            $(this).addClass("future");
        }
    })
}

$(".event-save").on("click", function()
{
    console.log("button pressed");
    var event = $(this).siblings("#event-input").val();
    var time = $(this).parent().attr("id");

    console.log(event, time);
    localStorage.setItem(time, event);
})

$("#hr-9 #event-input").val(localStorage.getItem("hr-9"))
$("#hr-10 #event-input").val(localStorage.getItem("hr-10"))
$("#hr-11 #event-input").val(localStorage.getItem("hr-11"))
$("#hr-12 #event-input").val(localStorage.getItem("hr-12"))
$("#hr-13 #event-input").val(localStorage.getItem("hr-13"))
$("#hr-14 #event-input").val(localStorage.getItem("hr-14"))
$("#hr-15 #event-input").val(localStorage.getItem("hr-15"))
$("#hr-16 #event-input").val(localStorage.getItem("hr-16"))
$("#hr-17 #event-input").val(localStorage.getItem("hr-17"))
$("#hr-18 #event-input").val(localStorage.getItem("hr-18"))

updateHours();