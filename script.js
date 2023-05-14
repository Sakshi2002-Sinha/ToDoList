// function get_todos(){
//   var td=new Array;
//   var td_str=localStorage.getItem('td');
//   if(td_str!==null){
//     td=JSON.parse(td_str);
//   }
//   return td;
// }
//
// function Add(){
//   var task=document.getElementById('task').value;
//   var td=get_todos();
//   td.push(task);
//   localStorage.setItem('td',JSON.stringify(td));
//   show();
//   return false;
// }
//
// function clearDefault(a){
//   if(a.defaultValue==a.value){a.value=""}
// };
//
// function remove() {
//   var id=this.getAttribute('id');
//   var td=get_todos();
//   td.splice(id,1);
//   localStorage.setItem('td',JSON.stringify(td));
//
//   show();
//   return false;
// }
//
// function show() {
//     var td=get_todos();
//
//     var html='<ul>';
//     for(var i=0;i<td.length;i++){
//       html+='<li>'+td[i]+'<button class="remove" id="'+i +'">Delete</button> </li>';
//       html+='<ul>';
//       document.getElementById('td').innerHTML=html;
//       var buttons=document.getelementByClassName('remove');
//       for(var i=0;i<buttons.length;i++){
//         buttons[i].addEventListener('click',remove);
//       };
//       document.getElementById('add').addEventListener('click',add);
//       show()
//     }
// }

$(".txtb").on("keyup",function(e){
  //13  means enter button
  if(e.keyCode == 13 && $(".txtb").val() != "")
  {
    var task = $("<div class='task'></div>").text($(".txtb").val());
    var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
      var p = $(this).parent();
      p.fadeOut(function(){
        p.remove();
      });
    });

    var check = $("<i class='fas fa-check'></i>").click(function(){
      var p = $(this).parent();
      p.fadeOut(function(){
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove();
    });

    task.append(del,check);
    $(".notcomp").append(task);
      //to clear the input
    $(".txtb").val("");
  }
});
