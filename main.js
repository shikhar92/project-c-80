var guest_array=[];

function submit()
{var display_array=[];
for (var i=1;i<=2;i++)
{
    var names=document.getElementById("name_of_the_guests_"+i).value;
    guest_array.push(names);
}
var count=guest_array.length;
for (var j=0;j<count;j++)
{
display_array.push("<h4>Name= "+guest_array[j]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove=display_array.join("");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_btn").style.display="inline-block";
}
function sorting ()
{
guest_array.sort();
var new_display=[];
var newcount=guest_array.length;
for (var k=0;k<newcount;k++)
{
new_display.push("<h4> names= "+guest_array[k]+"</h4>");
}
var rem2=new_display.join("");
document.getElementById("display_name_without_commas").innerHTML=rem2



}