function setListeners(){
	let screenTableKeyUp = document.getElementById('screenTable');
		screenTableKeyUp.addEventListener('keyup', (event) => {
			event = (event || window.event);
			document.getElementById('result').innerHTML = (`key=${event.key},code=${event.code},field=${event.srcElement.id}`);
			if (event.key == "a"){ //define a set of value strings to move cursor to next position
				var fieldCodeUp = (event.srcElement.id.substring(5));
				
				fieldCodeUp = 1 * fieldCodeUp + 1;
				if (fieldCodeUp > 1920)  {
					fieldCodeUp = 1;
				}
				document.getElementById("field" + fieldCodeUp).focus();
			}
	});

	let screenTable = document.getElementById('screenTable');
		screenTable.addEventListener('keydown', (event) => {
			event = (event || window.event);
			document.getElementById('result').innerHTML = (`key=${event.key},code=${event.code},field=${event.srcElement.id}`);

			var fieldCode = (event.srcElement.id.substring(5));
			
			if (event.code == "ArrowRight") {
				fieldCode = 1 * fieldCode + 1;
				if (fieldCode > 1920)  {
					fieldCode = 1;
				}
				document.getElementById("field" + fieldCode).focus();
			}
			if (event.code == "ArrowLeft") {			
				fieldCode = 1 * fieldCode - 1;
				if (fieldCode < 1)  {
					fieldCode = 1920;
				}
				document.getElementById("field" + fieldCode).focus();
			}
			if (event.code == "ArrowUp") {
				fieldCode = 1 * fieldCode - 80;
				if (fieldCode < 1){
					fieldCode = 1920 + fieldCode;
				}
				document.getElementById("field" + fieldCode).focus();
			}
			if (event.code == "ArrowDown") {
				fieldCode = 1 * fieldCode + 80;
				if (fieldCode > 1920)  {
					fieldCode = fieldCode - 1920;
				}
				document.getElementById("field" + fieldCode).focus();
			}
			
			switch (event.code) {
				case 'F1':
				case 'F2':
				case 'F3':
				case 'F4':
				case 'F5':
				case 'F6':
				case 'F7':
				case 'F8':
				case 'F9':
				case 'F10':
				case 'F11':
				case 'F12':
				case 'Enter':
					buildScreen();
					break;
				default:
					break;
			}

			// Cancel pfkeys
			if (event.code.substring(0, 1) == "F") {
				event = null;
				return false;
		}
	});
}

function buildScreen() {
	var screen = {
		"fields":[
			{
				"row":"1",
				"col":"1",
				"size":"80",
				"value":" *****************************             +----------------------------------+ ",
				"protected":"false"
			},
			{
				"row":"2",
				"col":"1",
				"size":"80",
				"value":" ****************---**********             | IP ADDRESS   : 192.168.58.175    | ",
				"protected":"false"
			},
			{
				"row":"3",
				"col":"1",
				"size":"80",
				"value":" *********-    ______  *******             | LUNAME       : OA2BRQDS          | ",
				"protected":"false"
			},
			{
				"row":"4",
				"col":"1",
				"size":"80",
				"value":" *****_-    -**********- *****             | PORT ADDRESS : 45877             | ",
				"protected":"false"
			},
			{
				"row":"5",
				"col":"1",
				"size":"80",
				"value":" **-      _______    *********             | DATA / HORA  : 06/11/20 09:10:21 | ",
				"protected":"false"
			},
			{
				"row":"6",
				"col":"1",
				"size":"80",
				"value":" *****-  **********-    ******             +----------------------------------+ ",
				"protected":"false"
			},
			{
				"row":"7",
				"col":"1",
				"size":"80",
				"value":" ****-  **************-   ****                                                  ",
				"protected":"false"
			},
			{
				"row":"8",
				"col":"1",
				"size":"80",
				"value":" ****-  ***************-   ***                                                  ",
				"protected":"false"
			},
			{
				"row":"9",
				"col":"1",
				"size":"80",
				"value":" *****- ****************-  ***    *****                *                        ",
				"protected":"false"
			},
			{
				"row":"10",
				"col":"1",
				"size":"80",
				"value":" ******- *******-  ****-  ****    *    *               *                        ",
				"protected":"false"
			},
			{
				"row":"11",
				"col":"1",
				"size":"80",
				"value":" ******** ******-  *** *******    *    *  * *  **    ***   **    **    **   **  ",
				"protected":"false"
			},
			{
				"row":"12",
				"col":"1",
				"size":"80",
				"value":" ***********- **-  ***********    *****   **     *  *  *  *  *  *     *    *  * ",
				"protected":"false"
			},
			{
				"row":"13",
				"col":"1",
				"size":"80",
				"value":" ***********- **-  ***********    *    *  *    ***  *  *  ****   **   *    *  * ",
				"protected":"false"
			},
			{
				"row":"14",
				"col":"1",
				"size":"80",
				"value":" ***********- **-  ***********    *    *  *   *  *  *  *  *        *  *    *  * ",
				"protected":"false"
			},
			{
				"row":"15",
				"col":"1",
				"size":"80",
				"value":" ***********- **-  ***********    *****   *    ***   ***   **    **    **   **  ",
				"protected":"false"
			},
			{
				"row":"16",
				"col":"1",
				"size":"80",
				"value":"                                                                                ",
				"protected":"false"
			},
			{
				"row":"17",
				"col":"1",
				"size":"80",
				"value":" +----------------------------------------------------------------------------+ ",
				"protected":"false"
			},
			{
				"row":"18",
				"col":"1",
				"size":"80",
				"value":" | Esta conexão é específica e de uso exclusivo da empresa: BRQ               | ",
				"protected":"false"
			},
			{
				"row":"19",
				"col":"1",
				"size":"80",
				"value":" | Caso  haja  alguma  irregularidade  nas  informações  apresentadas,  favor | ",
				"protected":"false"
			},
			{
				"row":"20",
				"col":"1",
				"size":"80",
				"value":" | contactar  nossa  Central  de  Atendimento  DPCD:  (0 xx 11)  4197-2222    | ",
				"protected":"false"
			},
			{
				"row":"21",
				"col":"1",
				"size":"80",
				"value":" | Sistema(s) de acesso: TSOS                                                 | ",
				"protected":"false"
			},
			{
				"row":"22",
				"col":"1",
				"size":"80",
				"value":" +----------------------------------------------------------------------------+ ",
				"protected":"false"
			},
			{
				"row":"23",
				"col":"1",
				"size":"80",
				"value":"                                                                                ",
				"protected":"false"
			},
			{
				"row":"24",
				"col":"1",
				"size":"30",
				"value":" Tecle o sistema desejado: ",
				"protected":"false"
			},
			{
				"row":"24",
				"col":"32",
				"size":"30",
				"value":"ACCTER TSO ",
				"protected":"false"
			}
		]
	}  
	
	document.getElementById("screenTable").innerHTML = "";

	for (row = 1; row < 25; row++) {
		createRow(row);
		var rowColumns = 1;

		for (j = 0; j < screen.fields.length; j++) {
			if (row == screen.fields[j].row) {
				if (screen.fields[j].col > rowColumns) {
					createBlankArea(row, screen.fields[j].col - 1, screen.fields[j].col - rowColumns);
					rowColumns += screen.fields[j].col - rowColumns;
				}
					createFieldBytes(screen.fields[j]);
					rowColumns = screen.fields[j].size * 1 + rowColumns;
				}
		}

		if (rowColumns < 80) {
			createBlankArea(row, rowColumns, 81 - rowColumns);
		}
	}
}

function createRow(rowNumber) {

	var tr = document.createElement("TR");

	var td = document.createElement("TD");

	var divTable = document.createElement("DIV");
	divTable.setAttribute("style", "width: 100%; display: table");
	divTable.setAttribute("id", "tableRow" + rowNumber);

	td.appendChild(divTable);
	tr.appendChild(td);
	document.getElementById("screenTable").appendChild(tr);
}

function createBlankArea(rowNumber, colNumber, size) {

	if (rowNumber == 24){
		var a = "";
	}
	
	for (k = 0; k < size; k++) {
		var inputField = document.createElement("INPUT");
		inputField.setAttribute("id", "field" + (((rowNumber - 1) * 80) + k + (1 * colNumber )));
		inputField.setAttribute("maxlength", 1);
		inputField.setAttribute("class", "unprotectedinputfield");

		inputField.style.width = "8.8125px";

		var divCell = document.createElement("DIV");
		divCell.setAttribute("style", "display: table-cell");

		divCell.appendChild(inputField);

		document.getElementById("tableRow" + rowNumber).appendChild(divCell);
	}
}

function createFieldBytes(field) {
	
	if (field.row == 24){
		var a = "";
	}

	for (i = 0; i < field.size; i++) {
		var inputField = document.createElement("INPUT");
		inputField.setAttribute("id", "field" + (((field.row - 1) * 80) + i + (1 *field.col )));
		inputField.setAttribute("value", field.value.substring( i , i + 1));
		inputField.setAttribute("maxlength", "1");
		if (field.protected == "true") {
			inputField.setAttribute("class", "protectedinputfield");
			inputField.setAttribute("disabled", "false");
		} else {
			inputField.setAttribute("class", "unprotectedinputfield");
		}

		inputField.style.width = "8.8125px";

		var divCell = document.createElement("DIV");
		divCell.setAttribute("style", "display: table-cell");

		divCell.appendChild(inputField);

		document.getElementById("tableRow" + field.row).appendChild(divCell);
	}
}