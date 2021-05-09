//----------------safe naming for titles with apostrophes---------------------
var entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;'
};

function escapeHtml(string) {
	return String(string).replace(/[&<>"'\/]/g, function (s) {
		return entityMap[s];
	});
}
//------------------------------------------------------------------------------

function disableBtn(id){
	document.getElementById(id).disabled = true;
}
function enableBtn(id){
	document.getElementById(id).disabled = false;
}