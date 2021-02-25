
var topicList = ["test","test","test","test","test","test","test","test","test"];
$(document).ready(function(){
    for(let i = 0;i<topicList.length;i++){
        $('#module-nav').append('<a href="#">' +topicList[i]+ '</a>');
    }
});
