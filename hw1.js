var video=[
        {id:"OEAsS7leOSw", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:1, fav:0, name:"Chaos Time"},
        {id:"HGxcnEjmFOA", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:0, fav:0, name:"Garakuta Doll Play"},
        {id:"6WTN4jsq4Yg", genre:"音樂", lang:"未歸類", tag:"tag", feature:1, recommend:0, fav:0, name:"MIYABeam"},
        {id:"2Vv-BfVoq4g", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Ed Sheeran- Perfect"},
        {id:"nSDgHBxUbVQ", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Ed Sheeran- Photograph"},
        {id:"lp-EO5I60KA", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Ed Sheeran- Thinking Out Loud"},
        {id:"HdWnPr52M1k", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"One OK ROCK- Listen"},
        {id:"5anLPw0Efmo", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Evanescence- My Immortal"},
        {id:"vx2u5uUu3DE", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:1, fav:0, name:"Bon Jovi- It's My Life"},
        {id:"VlMEGBsw6j8", genre:"音樂", lang:"英文", tag:"tag", feature:1, recommend:0, fav:0, name:"Maroon 5- Won't Go Home Without You"}];

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
    str+="<a href=\"http://youtube.com/watch?v="+video[i].id+"\">";
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
        if(obj.indexOf(search_str)!=-1)
        {
            cnt++;
            card+=cardStruct(i);
        }
    }
    
    str+="<div id=\"search_result_top\">搜尋 "+search_str+" : </div>";
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
    
    str+="<div id=\"search_result_top\">搜尋 "+search_str+" 標籤 : </div>";
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
    var str="", card="<h3 class=\"video-title\"> Latest Videos </h3><ul class=\"video-list\">";
    var cnt=0;
    search_str=document.getElementById("searchString").value.toLowerCase();
    for(var i=0; i<video.length; i++) card+=cardStruct(i);
    card+="</ul>";
    document.getElementById("card").innerHTML=card;
}

function shuffle(array)
{
    var tmp, current, top=array.length;
    if(top)
    {
        while(--top)
        {
            current=Math.floor(Math.random()*(top+1));
            tmp=array[current];
            array[current]=array[top], array[top]=tmp;
        }
    }
    return array;
}

function randomGenerator(head, tail, num)
{
    var arr=[], res=[];
    if(tail<head)
    {
        console.log("隨機亂數產生器錯誤：範圍上界應大於等於下界");
        return null;
    }
    for(var i=head; i<tail; i++) arr[i-head]=i;
    arr=shuffle(arr);
    for(var i=0; i<num; i++) res[i]=arr[i];
    return res;
}

function loadFeatured()
{
    var str="<span>精選影片</span><br>";
    var cnt=0;
    var res=[];
    var arr=randomGenerator(0, video.length, 3);
    for(var i=0; i<3; i++) str+=sidebarStruct(arr[i], "feature");
    document.getElementById("feature").innerHTML=str;
}

function loadRecommend()
{
    var str="<span>推薦影片</span><br>";
    var cnt=0;
    var res=[];
    var arr=randomGenerator(0, video.length, 3);
    for(var i=0; i<3; i++) str+=sidebarStruct(arr[i], "recommend");
    document.getElementById("recommend").innerHTML=str;
}