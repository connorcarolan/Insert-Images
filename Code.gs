function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  DocumentApp.getUi().createMenu('Start')
  .addItem('Wallet', 'showPickerWallet')
  .addItem('3x3 - 9 images per page', 'showPicker3x3')
  .addItem('2x2 - 4 images per page', 'showPicker2x2')
  .addItem('1x1 - 2 images per page', 'showPicker1x1')
  .addItem('Full Page', 'showPickerFull')
  .addToUi();
}

function showPicker2x2() {
  var html = HtmlService.createHtmlOutputFromFile('Picker2x2.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function showPicker3x3() {
  var html = HtmlService.createHtmlOutputFromFile('Picker3x3.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function showPickerWallet() {
  var html = HtmlService.createHtmlOutputFromFile('PickerWallet.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function showPicker1x1() {
  var html = HtmlService.createHtmlOutputFromFile('Picker1x1.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function showPickerFull(){
  var html = HtmlService.createHtmlOutputFromFile('PickerFull.html')
  .setWidth(600)
  .setHeight(425)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select Folder');
}

function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}
