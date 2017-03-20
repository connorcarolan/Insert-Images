function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  DocumentApp.getUi().createMenu('Start')
  .addItem('2x2 - 4 images per page', 'showPicker2x2')
}

function showPicker2x2() {
  var html = HtmlService.createHtmlOutputFromFile('Picker2x2.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}
