function countFilesInFolderSmall(folderId) {
  Logger.log("Small");
  var count,file,files,theFolder;
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  body.setMarginBottom(29).setMarginLeft(29).setMarginRight(29).setMarginTop(29);
 
  
  theFolder = DriveApp.getFolderById(folderId);
  files = theFolder.getFiles();

  count = 0;

  while (files.hasNext()) {
   count++;
   file = files.next();
 };
  
 //Add a table in document
  var newTable = body.appendTable();
  
  //Create rows
  var halfcount = count / 2
  for(var i=0; i<halfcount; i++){
    var tr = newTable.appendTableRow();
    
    //add 2 cells in each row
    for(var j=0; j<2; j++){
      tr.appendTableCell();
  }
  }
  Logger.log("firstcount:" + count);
  getFiles(folderId)
};

function getFiles(folderId) {
  var folder = DriveApp.getFolderById(folderId);  
  var contents = folder.getFiles();
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var row = 0
  var cell = 0 // 1 or 0  
  var numRow = 0
 
while(contents.hasNext())  {
  var files = contents.next();   
    Logger.log("files:"+ files)
  var blob = files.getBlob();
  var findTables = body.getTables()
  var table = findTables[0]   
  
     Logger.log("row: " + row)
     Logger.log("cell: " + cell)  
     
     var rowI = table.getRow(row);
     var cellI = rowI.getCell(cell);
     var insImg = cellI.insertImage(0, blob);
     
     //edit image size
     var maxHeight = 280
     var imgWidth = insImg.getWidth();
     var imgHeight = insImg.getHeight();
     var maxWidth = 280
     var ratio = imgWidth / imgHeight
     var ratio2 = imgHeight / imgWidth
     Logger.log("ratio: " +ratio)
     var newWidth
     var newHeight
     
     if (imgWidth > imgHeight) {
     
     if (maxWidth < imgWidth){
        newWidth = maxWidth
        newHeight = parseInt(newWidth/ratio)
     } 
     else {
        newWidth = imgWidth
        newHeight = imgHeight
        }
        Logger.log("newWidth: " + newWidth);
        Logger.log("newHeight: " + newHeight);
     
     }
    else {
     if (maxHeight < imgHeight){
        newHeight = maxHeight
        newWidth = parseInt(newHeight/ratio2)
     } 
     else {
        newHeight = imgHeight
        newWidth = imgWidth
        }
        Logger.log("newWidth2: " + newWidth);
        Logger.log("newHeight2: " + newHeight);
       }
        
        insImg.setHeight(newHeight).setWidth(newWidth);
     
     
         // increase row
    if (numRow % 2 != 0) {                        // every other time / when numRow is odd
     ++row 
    } 

     ++numRow
     
   // alternate cell between 1 & 0   
     if (cell == 0) { 
      cell = 1 
     }
      else {
       cell = 0
      }
}
}
