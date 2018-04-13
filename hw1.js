var video=[
        {id:"Z-5zUm8U2o8", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:1, fav:0, name:"Chaos Time"},
        {id:"twyuPTw0AyY", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:0, fav:0, name:"Garakuta Doll Play"},
        {id:"ar8S6virCwM", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:0, fav:0, name:"MIYABeam"},
        {id:"paREY4LLwEY", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Ed Sheeran- Perfect"},
        {id:"9bAiXJoNdy0", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Ed Sheeran- Photograph"},
        {id:"Y7bxlR-MxxM", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Ed Sheeran- Thinking Out Loud"},
        {id:"A_DRNbpsU3Q", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"One OK ROCK- Listen"},
        {id:"stxQq0kI4pk", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Evanescence- My Immortal"},
        {id:"wAZswdN2baQ", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Bon Jovi- It's My Life"},
        {id:"OjEkotGQxzA", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Maroon 5- Won't Go Home Without You"}];


function Mark(e, id)
{
	var m = e.getElementsByTagName("i")[0];
	m.style.color = (m.style.color!="rgb(255, 105, 180)")?"rgb(255, 105, 180)":"rgb(211, 211, 211)";
    video[id].fav=(video[id].fav==1)?0:1;
}
        
function cardStruct(i)
{
    var str="";
    str+="<li class=\"span2\">";
    str+="<div class=\"thumbnail mycard\">";
    str+="<div>";
    str+="<a href=\"hw1page2.html?v="+video[i].id+"\">";
    str+="<img class=\"card-img-top rounded\" src=\"http://img.youtube.com/vi/"+video[i].id+"/sddefault.jpg\">";
    str+="</a>";
    str+="</div>";
    str+="<div class=\"caption\">";
    str+="<h5>";
    str+="<a href=\"http://youtube.com/watch?v="+video[i].id+"\" title=\""+video[i].name+"\">"+video[i].name+"</a>";
    str+="</h5>";
    str+="<div class=\"thumbnail-tags\">";
    str+="<span class=\"label label-default\" onclick=\"searchByTag('"+video[i].tag+"', 'tag');\">"+video[i].tag+"</span> ";
    str+="<span class=\"label label-primary\" onclick=\"searchByTag('"+video[i].lang+"', 'lang');\">"+video[i].lang+"</span> ";
    str+="<span class=\"label label-success\" onclick=\"searchByTag('"+video[i].genre+"', 'genre');\">"+video[i].genre+"</span> ";
    str+="<span class=\"fav\" onclick=\"Mark(this,"+i+")\"> <i class=\"fa fa-heart\" style=\"color:"+((video[i].fav==1)?"rgb(255, 105, 180)":"rgb(211, 211, 211)")+";\"></i> </span>";
    str+="</div>";
    str+="</div> ";
    str+="<div class=\"clearfix\"></div>";
    str+="</div>";
    str+="</li>";
    
    return str;
}

function sidebarStruct(i, type)
{
    var str="";
    str+="<a href=\"https://www.youtube.com/watch?v="+video[i].id+"\">";
    str+="<img src=\"http://img.youtube.com/vi/"+video[i].id+"/sddefault.jpg\"></img>";
    str+="<div class=\""+type+"\">"+video[i].name+"</div></a>";
    
    return str;
}

function searchVideo()
{
    var str="", card="<ul class=\"video-list\">";
    var cnt=0;
    search_str=document.getElementById("searchString").value.toLowerCase();
    for(var i=0; i<video.length; i++)
    {
        var obj=video[i].name.toLowerCase();
        console.log(search_str);
        if(obj.indexOf(search_str)!=-1)
        {
            cnt++;
            card+=cardStruct(i);
        }
    }
    
    str+="<div id=\"search_result_top\">搜尋 "+search_str+" :</div>";
    str+="<pre>";
    if(cnt<=0) str+="找不到相關結果";
    else str+="找到 "+cnt+" 個結果";
    str+="</pre>";
    
    
    card+="</ul>";
    document.getElementById("card").innerHTML=str+card;
    
}

function searchByTag(name, type)
{
    var str="", card="<ul class=\"video-list\">";
    var cnt=0;
    var search_str=name;
    for(var i=0; i<video.length; i++)
    {
        var obj=video[i][type];
        if(obj.indexOf(search_str)!=-1)
        {
            cnt++;
            card+=cardStruct(i);
        }
    }
    
    str+="<div id=\"search_result_top\">搜尋 "+search_str+" 標籤:</div>";
    str+="<pre>";
    if(cnt<=0) str+="找不到相關結果";
    else str+="找到 "+cnt+" 個結果";
    str+="</pre>";
    
    
    card+="</ul>";
    document.getElementById("card").innerHTML=str+card;
}

function loadAll()
{
    loadVideo();
    loadFeatured();
    loadRecommend();
}

function loadVideo()
{
    var str="", card="<ul class=\"video-list\">";
    var cnt=0;
    search_str=document.getElementById("searchString").value.toLowerCase();
    for(var i=0; i<video.length; i++) card+=cardStruct(i);
    card+="</ul>";
    document.getElementById("card").innerHTML=card;
}

function loadFeatured()
{
    var str="<span>精選影片</span><br>";
    var cnt=0;
    for(var i=0; i<video.length; i++)
    {
        if(video[i].feature==1) str+=sidebarStruct(i, "feature");
    }
    document.getElementById("feature").innerHTML=str;
}

function loadRecommend()
{
    var str="<span>推薦影片</span><br>";
    var cnt=0;
    for(var i=0; i<video.length; i++)
    {
        if(video[i].recommend==1) str+=sidebarStruct(i, "recommend");
    }
    document.getElementById("recommend").innerHTML=str;
}