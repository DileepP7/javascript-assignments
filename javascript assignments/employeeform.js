// JavaScript Document
 
		var editAge=document.getElementById('trainee_age');
		var editAddress=document.getElementById('trainee_address');
		var editName=document.getElementById('trainee_name');
		var editHidden=document.getElementById('trainee_hidden');
		
function Trainee(){
	this.uid;
	this.name="";
	this.address="";
	this.age="";
}

/*function add(){
		var name=document.form1.ename.value;
		var address=document.form1.address.value;
		var age=document.form1.age.value;
		var i=document.getElementById("tableWrapper");		
}*/

//initialize array as global variable
	var trainees=[];
<!-------------------------------------Creating new instance of object------------------------------------->
	var t1=new Trainee();
	t1.uid=1;
	t1.name="dileep";
	t1.address="kuleshwor";
	t1.age="22";
	trainees.push(t1);

	var t2= new Trainee();
	t2.uid=2;
	t2.name="suraj";
	t2.address="Balkhu";
	t2.age="22";
	trainees.push(t2);

	var t3= new Trainee();
	t3.uid=3;
	t3.name="naresh";
	t3.address="Bhaktapur";
	t3.age="22";
	trainees.push(t3);

	var t4= new Trainee();
	t4.uid=4;
	t4.name="naresh";
	t4.address="Bhaktapur";
	t4.age="22";
	trainees.push(t4);

<!------------------------------------------------------------------------------------------------------------>

var bd=document.getElementsByTagName("body");
var table=document.getElementById("tbltrainees");


for(var i=0;i<trainees.length;i++)
{
	var trainee= trainees[i];
	
	/*for (var i=0; i<1; i++){
       var tr = document.createElement("tr");
       
       for (var j=0; j<4; j++){
           var td = document.createElement("td");
       }
    }*/
	
	
	
	var tr=document.createElement("tr");
		tr.id="row-"+trainees[i].uid;
	var sn_td=document.createElement("td");
	var name_td=document.createElement("td");
	var addr_td=document.createElement("td");
	var age_td=document.createElement("td");
	var edit_btn=document.createElement("button");
	var del_btn=document.createElement("button");

	sn_td.innerHTML=i+1;
	name_td.innerHTML=trainees[i].name;
	addr_td.innerHTML=trainees[i].address;
	age_td.innerHTML=trainees[i].age;
	edit_btn.innerHTML=('<img src="images/edit.png"/>');
	edit_btn.setAttribute("index", trainees[i].uid);
	del_btn.innerHTML=('<img src="images/delete.png"/>');
	del_btn.setAttribute("data-index", trainees[i].uid);
	del_btn.onclick=function()
	{
		var UID=this.getAttribute('data-index');console.log(UID);
		document.getElementById("row-"+UID).remove();
	}
	
		/*del_btn.onclick="deleteRow(this.parentNode.parentNode.data-index)";
		function deleteRow(obj) {
      	var index1 = obj.parentNode.parentNode.data-index;
    	var table = document.getElementById("tbltrainees");
    	table.deleteRow(index1);
    	}*/
		
	/*function deleteRow(i){
    		document.getElementById('tbltrainees').deleteRow(i);
			}*/
	
		
		
			
	
	edit_btn.onclick=function(){
	var UID=this.getAttribute("index");console.log(UID);
	
		var trainessDetails = trainees[getIndexByUID(UID)],
			nm = trainessDetails.name,
			addr = trainessDetails.address,
			ag = trainessDetails.age;
		
		editName.value = nm;
		editAddress.value = addr;
		editAge.value = ag;
		
		editHidden.value=UID;
	}

	tr.appendChild(sn_td);
	tr.appendChild(name_td);
	tr.appendChild(addr_td);
	tr.appendChild(age_td);
	tr.appendChild(edit_btn);
	tr.appendChild(del_btn);
	table.appendChild(tr);

}

/*------------------------------------Add function------------------------------------*/

function getIndexByUID(uid)
{
	for(i=0;i<trainees.length;i++)
	{
		if(trainees[i].uid==uid)
		return i;
	}
}
function addTrainee()
	{
	var t = new Trainee();
	t.name = document.form1.name.value;
	t.age = document.form1.age.value;
	t.address = document.form1.address.value;
	console.log(trainees);
	trainees.push(t);
	
	
	//showTrainee(obj);
	/*updateTable();
	document.form1.name.value ='';
	document.form1.age.value ='';
	document.form1.address.value = '';*/
	
	
	var tr=document.createElement("tr");
	var sn_td=document.createElement("td");
	var name_td=document.createElement("td");
	var addr_td=document.createElement("td");
	var age_td=document.createElement("td");
	var edit_btn=document.createElement("button");
	var del_btn=document.createElement("button");

	
	var length=trainees.length;
	sn_td.innerHTML=length;
	name_td.innerHTML=trainees[(length)-1].name;
	addr_td.innerHTML=trainees[(length)-1].address;
	age_td.innerHTML=trainees[(length)-1].age;
	edit_btn.innerHTML=('<img src="images/edit.png"/>');
	edit_btn.setAttribute("index", (length)-1);
	del_btn.innerHTML=('<img src="images/delete.png"/>');
	del_btn.setAttribute("data-index", (length)-1);
	
	
	edit_btn.onclick=function(){
	var UID=this.getAttribute("index");
		console.log(UID);
		var traineesDetails = trainees[UID],
			nm = traineesDetails.name,
			addr = traineesDetails.address,
			ag = traineesDetails.age;
		
		
		editName.value = nm;
		editAddress.value = addr;
		editAge.value = ag;
		
		editHidden.value=UID;
	}
	
	
	del_btn.onclick=function()
	{
		var UID=this.getAttribute('data-index');
		console.log(UID);
		document.getElementById("row-"+UID).remove();
	}
	
	
	
	tr.appendChild(sn_td);
	tr.appendChild(name_td);
	tr.appendChild(addr_td);
	tr.appendChild(age_td);
	tr.appendChild(edit_btn);
	tr.appendChild(del_btn);
	table.appendChild(tr);

}


console.log(trainees);

function router()
{
	if(editHidden.value==""){
		addTrainee();
	}
	else{
		editTrainee();
	}

}
function editTrainee()
{
	var UID=editHidden.value;
	var curIndex=getIndexByUID(UID);
	trainees[curIndex].name=editName.value;
	trainees[curIndex].age=editAge.value;
	trainees[curIndex].address=editAddress.value;
	
	var tr=document.getElementById("row-"+UID);
	tr.innerHTML="Edited";
	
	
	
}
