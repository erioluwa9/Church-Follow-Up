/***********************************************************
 * Table 1
 */

var form1 = document.getElementById('myForm1');

// /*Inputs from table1 */
form1.addEventListener("submit", addItem1);

function addItem1(e){
e.preventDefault();

var fullName = document.getElementById('inputFullName').value;
var email = document.getElementById('inputEmail').value;
var phone = document.getElementById('inputPhone').value;
var address = document.getElementById('inputAddress').value;
var address2 = document.getElementById('inputAddress2').value;
var city = document.getElementById('inputCity').value;
var state = document.getElementById('inputState').value;
var fullAddress = address + ' ' + address2 + ' ' + city + ' ' + state;

// Passing My Form values to the Array 
let names = [fullName, email, phone, fullAddress];

//create the Table row(tr) and asign to the Table
var table = document.getElementById('tested');
var tr = table.insertRow(1);

//create tds and asign newRow
var fullName = tr.insertCell(0);
var email = tr.insertCell(1);
var phone = tr.insertCell(2);
var fullAddress = tr.insertCell(3);
var deleteB = tr.insertCell(4);

fullName.innerHTML = names[0];
email.innerHTML = names[1];
phone.innerHTML = names[2];
fullAddress.innerHTML = names[3];
deleteB.innerHTML = '<button onclick="deleteRow1(this)" type="button" class="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i></button>';


form1.reset();

alert("Successful!");

}












/***********************************************************
 * Table 2
 */

var form2 = document.getElementById('myForm2');

// /*Inputs from table1 */
form2.addEventListener("submit", addItem2);

function addItem2(e){
e.preventDefault();

var messageTitle = document.getElementById('inputMessageTitle').value;
var dateTime = document.getElementById('inputDateTime').value;
var messageBody = document.getElementById('inputMessageBody').value;
var sendType = document.getElementById('inputSendType').value;


// Passing My Form values to the Array 
let message = [messageTitle, dateTime, messageBody, sendType];


//create the Table row(tr) and asign to the Table
var table = document.getElementById('tableTwo');
var tr = table.insertRow(1);

//create tds and asign newRow
var messageTitle = tr.insertCell(0);
var dateTime = tr.insertCell(1);
var messageBody = tr.insertCell(2);
var sendType = tr.insertCell(3);
var deleteBu = tr.insertCell(4);

/******** Binding the Array to the Table ******/
messageTitle.innerHTML = message[0];
dateTime.innerHTML = message[1];
messageBody.innerHTML = message[2];
sendType.innerHTML = message[3];
deleteBu.innerHTML = '<button onclick="deleteRow2(this)" type="button" class="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i></button>';

form2.reset();

alert("You have Successfully added a Message to your records!");

}











/***********************************************************
 * Table 3
 */

var form3 = document.getElementById('myForm3');

// /*Inputs from table1 */
form3.addEventListener("submit", addItem3);

function addItem3(e){
e.preventDefault();

var fullName = document.getElementById('inputRecipientName').value;
var phoneRecord = document.getElementById('inputRecordedCall').value;
var phoneNumber = document.getElementById('inputRecipientNumber').value;
var moveOut = document.getElementById('inputDateTime').value;

// Passing My Form values to the Array 
let calls = [fullName, phoneRecord, phoneNumber, moveOut];


//create the Table row(tr) and asign to the Table
var table = document.getElementById('tableThree');
var tr = table.insertRow(1);

//create tds and asign newRow
var fullName = tr.insertCell(0);
var phoneRecord = tr.insertCell(1);
var phoneNumber = tr.insertCell(2);
var moveOut = tr.insertCell(3);
var deleteBut = tr.insertCell(4);

fullName.innerHTML = calls[0];
phoneRecord.innerHTML = calls[1];
phoneNumber.innerHTML = calls[2];
moveOut.innerHTML = calls[3];
deleteBut.innerHTML = '<button onclick="deleteRow3(this)" type="button" class="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i></button>';

form3.reset();

alert("You have Successfully added a call dailog to your records!");

}










/************************************************************************
 * Delete Row function
*/

function deleteRow1(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("tested").deleteRow(i);
}

function deleteRow2(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("tableTwo").deleteRow(i);
}

function deleteRow3(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tableThree").deleteRow(i);
}

























































































  // // //Edit Table function
// // function startEdit() {
// //   // Make the element editable.
// // var element = document.getElementById("editableElement");
// // element.contentEditable = true;
// // }














// // console.log(document.getElementById('inputFullName').value);
// var submit = document.getElementById('submit');

// submit.onclick = function (e) {
//     e.preventDefault();
//     var fullName = document.getElementById('inputFullName').value;
//     var email = document.getElementById('inputEmail').value;
//     var phone = document.getElementById('inputPhone').value;
//         var address = document.getElementById('inputAddress').value;
//         var address2 = document.getElementById('inputAddress2').value;
//         var city = document.getElementById('inputCity').value;
//         var state = document.getElementById('inputState').value;
//         var zip = document.getElementById('inputZip').value;
//     var fullAddress = address + ' ' + address2 + ' ' + city + ' ' + state + ' ' + zip;



//     // Passing My Form values to the Array 
//     let names = [fullName, email, phone, fullAddress];
// debugger
    
//     console.log(names);
// let cells = document.querySelectorAll("#tested tbody > tr > td");
// for(let i = 0; i < cells.length; i++) {
//     cells[1].innerHTML = names[i];
    
// }


