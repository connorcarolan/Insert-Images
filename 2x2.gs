var numTables = 0

function countFilesInFolder2x2(folderId) {
  
  var htmlPop = HtmlService.createHtmlOutputFromFile('Alert')
      .setWidth(500)
      .setHeight(170);
  DocumentApp.getUi()
      .showModalDialog(htmlPop, 'Your Photos are being processed, please wait...');
  
  
  var count,file,files,theFolder;
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  body.setMarginBottom(11.5).setMarginLeft(2.9).setMarginRight(2.9).setMarginTop(11.5);
  
  theFolder = DriveApp.getFolderById(folderId);
  files = theFolder.getFiles();

  count = 0;

  while (files.hasNext()) {
   count++;
   file = files.next();
 };
  
  
numTables = count / 4
var numTablesN = Math.ceil(numTables);  

var n = 0
while(n < numTablesN){
 //Add a table in document
  
  var newTable = body.appendTable();
  newTable.setBorderWidth(0);
  
  //Create rows
  for(var i=0; i<2; i++){
    var tr = newTable.appendTableRow();
    
    //add 2 cells in each row
    for(var j=0; j<2; j++){
      tr.appendTableCell();
  }
  }
  ++n
}
  
  
  getFiles2x2(folderId)
};


function getarrayFiles(folderId) {
  var limit = 4;
  var output = [];
  var files = DriveApp.getFolderById(folderId).getFiles();
  
  while (files.hasNext()) {
    output.push(files.next());
  }  
  return output;
}

function getFiles2x2(output) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var row = 0
  var cell = 0 // 1 or 0  
  var numRow = 0
  var tab = 0
  var tabP = 0
  var count = 0
  var pArr = []
  var next = getarrayFiles(output);
  var Pcount = 0
  
  
  while (next.length > 0) {
       var four = next.splice(0, 4)
      
    four.forEach(function(file) {
     
      var styles = {};
  styles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      
      
      var maxnumTables = Math.ceil(numTables) -1
        
      if (count != 0) {
      if (count % 4 == 0){
      if (tab < maxnumTables){
        ++tab
        }
      }
      }
         
  var blob = file.getBlob();
          
  var findTables = body.getTables()
  var table = findTables[tab]   
     
  
  
     var rowI = table.getRow(row);
     var cellI = rowI.getCell(cell);
      
      
     var insImg = cellI.insertImage(0, blob)
     insImg.getParent().clear().setAttributes(styles);
     
      
      
     //edit image size
     var maxHeight = 450
     var imgWidth = insImg.getWidth();
     var imgHeight = insImg.getHeight();
     var maxWidth = 325
     var ratio = imgWidth / imgHeight
     var ratio2 = imgHeight / imgWidth
     var newWidth
     var newHeight
     
    
     
     if (imgWidth > imgHeight) {
       
       body.setPageWidth(842);
       body.setPageHeight(595);

       var maxWidthL = 425
    
     if (maxWidthL < imgWidth){
        newWidth = maxWidthL
        newHeight = parseInt(newWidth/ratio)
     } 
     else {
       newWidth = imgWidth
       newHeight = imgHeight
        }
       insImg.setHeight(newHeight).setWidth(newWidth);
             
         // increase row
      if (numRow % 2 != 0) {                        // every other time / when numRow is odd
      if (row == 0){
        row = 1 
      }
      else {
        row = 0
      }  
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
    else {
      // if portait, remove from table and add to array
      pArr.push(file);
      insImg.removeFromParent();
      ++Pcount
      --count
    }
            ++count            
  }) 
  }
  
  
  
  if (Pcount != 0) {
                                    // Horitontal =-------------------------------------=----------------------------------=
    
  // create new document for portrait images
  var d = new Date();
  var currentTime = d.toLocaleTimeString();
  
  var newDoc = DocumentApp.create('Portrait images @ ' + currentTime);
  var newDociD = newDoc.getId();
  var docFile = DocumentApp.openById(newDociD);
  var newBody = docFile.getBody();
  
  newBody.setMarginBottom(11.5).setMarginLeft(2.9).setMarginRight(2.9).setMarginTop(11.5);
  
  
  
  
  
                                        // crate new table
      
  var n = 0
    var tabPCount = Pcount / 4
while(n < tabPCount){
 //Add a table in document
  
  var newTableP = newBody.appendTable();
   newTableP.setBorderWidth(0);
  
  //Create rows
  for(var i=0; i<2; i++){
    var tr = newTableP.appendTableRow();
    
    //add 2 cells in each row
    for(var j=0; j<2; j++){
      tr.appendTableCell();
  }
  }
  ++n
}
  
      var rowP = 0
    var cellP = 0 // 1 or 0  
    var numRowP = 0
    var countP = 0
  
  pArr.forEach(function(file){     
    
       newBody.setPageWidth(595);
       newBody.setPageHeight(842);
      
    
  // add portait images to new table
      var styles = {};
  styles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
      
      if (countP != 0) {
      if (countP % 4 == 0){
        ++tabP
      }
      }
         
  var blob = file.getBlob();
      

      
  var findTables = newBody.getTables()   
  var tableP = findTables[tabP]  
 
     
     var rowI = tableP.getRow(rowP);
     var cellI = rowI.getCell(cellP);
     var insImg = cellI.insertImage(0, blob)
     insImg.getParent().setAttributes(styles);
     
     //edit image size
     var maxHeight = 450
     var imgWidth = insImg.getWidth();
     var imgHeight = insImg.getHeight();
     var maxWidth = 325
     var ratio = imgWidth / imgHeight
     var ratio2 = imgHeight / imgWidth
     var newWidth
     var newHeight

    
     if (maxHeight < imgHeight){
        newHeight = maxHeight
        newWidth = parseInt(newHeight/ratio2)
     } 
     else {
       newWidth = imgWidth
       newHeight = imgHeight
        } 
       
       insImg.setHeight(newHeight).setWidth(newWidth);
             
         // increase row
      if (numRowP % 2 != 0) {                        // every other time / when numRow is odd
      if (rowP == 0){
        rowP = 1 
      }
      else {
        rowP = 0
      }  
      }
     ++numRowP    
     
   // alternate cell between 1 & 0   
     if (cellP == 0) { 
      cellP = 1 
     }
      else {
       cellP = 0
      }
      
      ++countP
  })
  }
}
