$(document).ready(function() {
	var post = {
	"list":[{
		"title":"用jekyll生成包含json变量的js脚本",
		    "url":"http://chen.yanping.me/cn/blog/2012/04/20/jekyll-with-js-and-json/",
		    "date":"20 Apr 2012"
		},
	{
		"title":"用jekyll生成json",
		    "url":"http://chen.yanping.me/cn/blog/2012/04/19/jekyll-with-json/",
		    "date":"19 Apr 2012"
		},
	{
		"title":"指数方法论入门",
		    "url":"http://chen.yanping.me/cn/blog/2012/03/30/the-abcs-of-index-methodologies/",
		    "date":"30 Mar 2012"
		},
	{
		"title":"Github Pages极简教程",
		    "url":"http://chen.yanping.me/cn/blog/2012/03/18/github-pages-step-by-step/",
		    "date":"18 Mar 2012"
		},
	{
		"title":"黑魔法利器pandoc",
		    "url":"http://chen.yanping.me/cn/blog/2012/03/13/pandoc/",
		    "date":"13 Mar 2012"
		}
	
	]};

	var content ="<ul class=\"compact recent\">";
	$.each(post.list,function(i,item){

	content += "<li><span class=\"date\">"+ item.date + "</span><a href=\""+item.url+"\">"+ item.title +"</a></li>";

	});
	
	content +="</ul>";
	$("#blog1-posts-list .loading").remove();
	$("#blog1-posts-list").append(content);
}); 