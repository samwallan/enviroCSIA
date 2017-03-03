function doGet() { 
  return HtmlService.createTemplateFromFile('EnterId').evaluate().setTitle('Group Quiz Entry System').setSandboxMode(HtmlService.SandboxMode.IFRAME);
              }

function checkId(x){
 Logger.log('yes')
  var id = x;
  var idArray = getIdArray();
  for(var i = 0; i<idArray.length; i++){
    if(id == idArray[i]){
   return "sam"}
      }
return "no" 
}



function getIdArray(){
  //DON'T TOUCH THIS IT WORKS
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var studentIds = new Array();
  for(var i = 2; i <= sheet.getLastColumn(); i++){
    studentIds.push(sheet.getRange(1,i,1).getValues().toString());
 }
  Logger.log(studentIds);
  return studentIds
}

function getUserInfoInArray(column){
  Logger.log(typeof column, column)
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var arrayOfInfo = new Array();
  var lastRow = parseInt(lastValue(column))
//  for(var i = 2; i <= lastRow; i++){
    arrayOfInfo.push(sheet.getRange(1,column,lastRow).getValues().toString());
// }
return arrayOfInfo

}

function lastValue(column) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastNonBlankColCrow = 0;
  for (var i=1, lenRows=sheet.getRange("B:B").getNumRows(); i<=40; i++) {
    if ( !sheet.getRange(i, parseInt(column)).isBlank() ) { // 3 is 1-based index of column C
      lastNonBlankColCrow = i;
    }
  }
  return lastNonBlankColCrow;
}


function addGQ(column, row, grade){
SpreadsheetApp.getActiveSheet().getRange(row,column).setValue(grade)
return grade
}

function addStudent(id, name, col){
  SpreadsheetApp.getActiveSheet().getRange(1,col).setValue(id)
  SpreadsheetApp.getActiveSheet().getRange(2,col).setValue(name)
}






