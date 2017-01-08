<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" 
	buffer="none" session="false" trimDirectiveWhitespaces="true" %>
<!--%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %-->
<!DOCTYPE html>
<html>
<head>
	<title>论文写作平台</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<!-- 引入 Bootstrap -->
	<link href="utils/bootstrap-3.3.0/css/bootstrap.min.css" rel="stylesheet">

	<!-- 引入 dojo -->
	<!--
		<script src="utils/dojo-1.12.1/dojo.js" data-dojo-config="async:true"></script>
	-->
	<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js" data-dojo-config="async:true"></script>
	

	<!-- 页面样式 -->
	<link href="styles/mainpage-style.css" rel="stylesheet">
</head>
<body>
	<div style="float: left; position: fixed; width: 48px; height: 100%; background-color: #202020; z-index:1000;"></div>
	<div class="container">
		<div class="row clearfix headbar">
			<div class="col-md-1 column logobar">
				<img id="MainMenu" alt="logo" src="images/logo.jpeg" class="img-circle" width="48px" height="48px"/>
	<script>
	require([
		"dijit/Menu",
		"dijit/MenuItem",
		"dijit/CheckedMenuItem",
		"dijit/MenuSeparator",
		"dijit/PopupMenuItem",
		"dojo/domReady!"
	], function (Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem) {
		var pMenu;
		pMenu = new Menu({targetNodeIds: ["MainMenu"]});
		pMenu.addChild(new MenuItem({label: "Simple menu item"}));
		pMenu.addChild(new MenuItem({label: "Disabled menu item", disabled: true}));
		pMenu.addChild(new MenuItem({
			label: "Menu Item With an icon",
			iconClass: "dijitEditorIcon dijitEditorIconCut",
			onClick: function () {
				alert('i was clicked')
			}
		}));
		pMenu.addChild(new CheckedMenuItem({label: "checkable menu item"}));
		pMenu.addChild(new MenuSeparator());

		var pSubMenu = new Menu();
		pSubMenu.addChild(new MenuItem({label: "Submenu item"}));
		pSubMenu.addChild(new MenuItem({label: "Submenu item"}));
		pMenu.addChild(new PopupMenuItem({label: "Submenu", popup: pSubMenu}));

		pMenu.startup();
	});
	</script>
			</div>
			<div class="col-md-9 column toolbar">
				工具栏
			</div>
			<div class="col-md-2 column systembar">
				登录
			</div>
		</div>
		<div class="row" style="position: relative; top: 80px; z-index: 1001;width: 100%; height: 74em;">
			<div class="col-md-2 column outline">
				<ul class="nav nav-pills nav-stacked">
					<li class="part">中文摘要</li>
					<li class="part">英文摘要</li>
					<li class="part">正文
						<ul class="nav nav-pills nav-stacked">
							<li class="capter">绪论
								<ul class="nav nav-pills nav-stacked">
									<li class="section">研究背景</li>
									<li class="section">国内外研究现状</li>
								</ul>
							</li>
							<li class="capter">基于XXXXXXXXXX的算法</li>
						</ul>
					</li>
					<li class="part">参考文献</li>
					<li class="part">致谢</li>
					<li class="part">附录</li>
					<li class="part">论文附件
						<ul class="nav nav-pills nav-stacked">
							<li class="capter">用图</li>
							<li class="capter">表格</li>
							<li class="capter">公式</li>
							<li class="capter">定义</li>
							<li class="capter">定理</li>
							<li class="capter">证明</li>
							<li class="capter">算法</li>
							<li class="capter">代码</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="col-md-10 column workframe">
				<textarea rows="60" class="paper">
					国内外研究现状dddddddd ddddddd国内外研究现状 dddddd
				</textarea>
			</div>
		</div>
		<div class="row footbar">
			<div class="col-md-12 column">
				<span>页面信息</span>
			</div>
		</div>
	</div>
</body>
</html>
