<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	buffer="none" session="false" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html>
<head>
	<title>论文写作平台</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<!-- 引入 Bootstrap -->
	<link rel="stylesheet" href="utils/bootstrap-3.3.0/css/bootstrap.min.css">
	<!-- 页面样式 -->
	<link rel="stylesheet" href="styles/mainpage-style.css">
	<link rel="stylesheet" href="utils/dojo-1.12.1/dijit/themes/claro/claro.css">
	<!-- 引入 dojo -->
	<script type="text/javascript" charset="utf-8" src="utils/dojo-1.12.1/dojo/dojo.js" data-dojo-config="async:true"></script>
	<!-- 页面函数 -->
	<script type="text/javascript" charset="utf-8" src="javascripts/mainmenu.js"></script>
</head>
<body>
	<div style="float: left; position: fixed; width: 48px; height: 100%; background-color: #202020; z-index:1000;"></div>
	<div class="container">
		<div class="row clearfix headbar">
			<div class="col-md-1 column logobar">
				<img id="MainMenu" alt="logo" src="images/logo.jpeg" class="img-circle" width="48px" height="48px"/>
			</div>
			<div class="col-md-9 column toolbar">
				<script>
					require(["dojo/parser", "dijit/Toolbar", "dijit/form/Button", "dijit/form/ToggleButton", "dijit/ToolbarSeparator"]);
				</script>
				<div id="toolbar1" data-dojo-type="dijit/Toolbar">
					<div data-dojo-type="dijit/form/Button" id="toolbar1.new"
				        data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconCut', showLabel:false">新建</div>
					<div data-dojo-type="dijit/form/Button" id="toolbar1.open"
				        data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconCopy', showLabel:false">打开</div>
					<div data-dojo-type="dijit/form/Button" id="toolbar1.store"
				        data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconPaste', showLabel:false">存储</div>
					<div data-dojo-type="dijit/form/Button" id="toolbar1.close"
								data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconPaste', showLabel:false">关闭</div>
					<div data-dojo-type="dijit/form/Button" id="toolbar1.preview"
								data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconPaste', showLabel:false">预览</div>
					<div data-dojo-type="dijit/form/Button" id="toolbar1.export"
							  data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconPaste', showLabel:false">导出</div>
						<!-- The following adds a line between toolbar sections -->
					<span data-dojo-type="dijit/ToolbarSeparator"></span>
					<div data-dojo-type="dijit/form/ToggleButton" id="toolbar1.figure" data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconBold', showLabel:false">图</div>
					<div data-dojo-type="dijit/form/ToggleButton" id="toolbar1.table" data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconBold', showLabel:false">表格</div>
					<div data-dojo-type="dijit/form/ToggleButton" id="toolbar1.define" data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconBold', showLabel:false">定义</div>
				</div>
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
