module.exports = function($data, $Env){
	var $fs = require('fs');
	var $html = '';
	var $output = '';
	var $sessions = {};
	var $extends = "";



	var title = ($data)?$data.title:undefined;
	var __blade_private__ = ($data)?$data.__blade_private__:undefined;

	$html += `<!DOCTYPE html>\n
				<html>\n
				<head lang="en">\n
				    <link rel = "stylesheet" href="http://localhost:8080/css/help.css" />\n
				    <link rel = "stylesheet" href="http://localhost:8080/script/SyntaxHighlighter/styles/shCore.css" />\n
				    <link rel = "stylesheet" href="http://localhost:8080/script/SyntaxHighlighter/styles/shThemeMidnight.css" />\n
				    <meta charset="UTF-8" />\n
				    <title>${ title }</title>\n
				</head>\n
				<body>\n
				<header  >\n
				    <div class="body" >\n
				        <!-- use asset for the static file in resources folders -->\n
				        <img src = 'http://localhost:8080/images/elife.png' style="height : 80px;" />\n
				        <span class="title">\n
				            <span style="color : #92D13D;" >Express</span>\n
				            <span style="color : #DE3541;" >Life</span>\n
				        </span>\n
				    </div>\n
				</header>\n
				    <div class="body" >\n
				        <div class="options" >\n
				            <h2>Main concepts</h2>\n
				             <ul>\n
				                <li><a href="http://localhost:8080/help/">Overview</a></li>\n
				                <li><a href = "http://localhost:8080/help/anatomy" >Anatomy of project</a></li>\n
				                <li>\n
				                    <a href = "http://localhost:8080/help/conf" >Projet Configuration</a>\n
				                    <ul>\n
				                        <li><a href="http://localhost:8080/help/conf#overview">Overview</a></li>\n
				                        <li><a href="http://localhost:8080/help/conf#app">Application</a></li>\n
				                        <li><a href="http://localhost:8080/help/conf#path">Path</a></li>\n
				                        <li><a href="http://localhost:8080/help/conf#app">DataBase</a></li>\n
				                        <li><a href="http://localhost:8080/help/conf#app">Langue</a></li>\n
				                        <li><a href="http://localhost:8080/help/conf#app">EBlade</a></li>\n
				                    </ul>\n
				                </li>\n
				                <li><a href="#">HTTP Routing, Controllers and Results</a></li>\n
				                <li><a href="#">Body parsers</a></li>\n
				                <li>\n
				                    <a href="#">Global variables</a>\n
				                    <ul>\n
				                        <li><a href="#">$Environnement</a></li>\n
				                        <li><a href="#">$Routes</a></li>\n
				                        <li><a href="#">$Filters</a></li>\n
				                        <li><a href="#">$App</a></li>\n
				                    </ul>\n
				                </li>\n
				                <li><a href="#">Handling errors</a></li>\n
				                <li><a href="#">Asynchronous HTTP programming</a></li>\n
				                <li>\n
				                    <a href="#">The template engine</a>\n
				                    <ul>\n
				                        <li><a href="#">HTTP Routing And Views</a></li>\n
				                        <li><a href="#">EBLADE templates syntax</a></li>\n
				                        <li><a href="#">Defining A EBLADE Layout</a></li>\n
				                        <li><a href="#">Using A EBLADE Layout</a></li>\n
				                        <li><a href="#">Echoing Data</a></li>\n
				                        <li><a href="#">Echoing Data After Checking For Existence</a></li>\n
				                        <li><a href="#">If Statements</a></li>\n
				                        <li><a href="#">Loops</a></li>\n
				                        <li><a href="#">Including Sub-Views</a></li>\n
				                        <li><a href="#">Comments</a></li>\n
				                        <li><a href="#">Extending Blade</a></li>\n
				                    </ul>\n
				                </li>\n
				                <li>\n
				                    <a href="#">Form submission and validation</a>\n
				                    <ul>\n
				                        <li><a href="#">Handling form submission</a></li>\n
				                        <li><a href="#">Protecting against CSRF</a></li>\n
				                        <li><a href="#">Custom Validations</a></li>\n
				                        <li><a href="#">Custom Field Constructors</a></li>\n
				                    </ul>\n
				                </li>\n
				                <li><a href="#">Handling file upload</a></li>\n
				                <li>\n
				                    <a href="#">Accessing an SQL database</a>\n
				                    <ul>\n
				                        <li><a href="#">Configuring and using DBSM</a></li>\n
				                        <li><a href="#">Create yours model</a></li>\n
				                        <li><a href="#">Using Eloquent to access your database</a></li>\n
				                    </ul>\n
				                </li>\n
				                <li><a href="#">Internationalization</a></li>\n
				                <li><a href="#">PhpJs</a></li>\n
				                <!--<li><a href="#"></a></li>-->\n
				            </ul>\n
				            <h2>Sécurity</h2>\n
				            <ul>\n
				                <li><a href="#">Crsf</a></li>\n
				                <li><a href="#">Authentification</a></li>\n
				            </ul>\n
				            <h2>Advanced topics</h2>\n
				            <ul>\n
				                <li><a href="#">Extending ELife</a></li>\n
				                <li><a href="#">Extending EBlade</a></li>\n
				                <li><a href="#">Dependency injection</a></li>\n
				            </ul>\n
				        </div>\n
				        <div class="source-code" >\n
				            `+eval("`"+__blade_private__.body+"`")+`\n
				        </div>\n
				        <div style = "clear : both;"></div>\n
				    </div>\n
				<footer>\n
				    <div class="body" >\n
				        <!-- use asset for the static file in resources folders -->\n
				    </div>\n
				</footer>\n
				<script type = "text/javascript" src = "http://localhost:8080/script/jquery/dist/jquery.js" ></script>\n
				<script type = "text/javascript" src = "http://localhost:8080/script/angular/angular.js" ></script>\n
				<script language="JavaScript" src="http://localhost:8080/script/SyntaxHighlighter/scripts/XRegExp.js" type="text/javascript"></script>\n
				<script language="JavaScript" src="http://localhost:8080/script/SyntaxHighlighter/scripts/shLegacy.js" type="text/javascript"></script>\n
				<script language="JavaScript" src="http://localhost:8080/script/SyntaxHighlighter/scripts/shCore.js" type="text/javascript"></script>\n
				<script language="JavaScript" src="http://localhost:8080/script/SyntaxHighlighter/scripts/shBrushJScript.js" type="text/javascript"></script>\n
				<script language="JavaScript" type="text/javascript">dp.SyntaxHighlighter.HighlightAll('code');</script>\n
				`+eval("`"+__blade_private__.script+"`")+`\n
				</body>\n
				</html>`;

	$output = $html;

	delete title;
	delete __blade_private__;

	return $output;
};