module.exports = function($data, $Env){
	var $fs = require('fs');
	var $html = '';
	var $output = '';
	var $sessions = {};
	var $extends = require($Env.path.storage+'/views/layouts/help.blade')($data, $Env);



	var title = ($data)?$data.title:undefined;
	var __blade_private__ = ($data)?$data.__blade_private__:undefined;

	$html += ``;

	$output = $html+$extends;

	delete title;
	delete __blade_private__;

	return $output;
};