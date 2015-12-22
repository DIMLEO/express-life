module.exports = function($data, $Env){
	var $fs = require('fs');
	var $html = '';
	var $output = '';
	var $sessions = {};
	var $extends = "";



	var title = ($data)?$data.title:undefined;
	var __blade_private__ = ($data)?$data.__blade_private__:undefined;

	$html += `<!DOCTYPE html>
				<html>
				<head lang="en">
				    <link rel = "stylesheet" href="http://localhost:8080/css/help.css" />
				    <meta charset="UTF-8" />
				    <title>${title}</title>
				</head>
				<body>
				    `+eval("`"+__blade_private__.body+"`")+`
				</body>
				</html>`;

	$output = $html;

	delete title;
	delete __blade_private__;

	return $output;
};