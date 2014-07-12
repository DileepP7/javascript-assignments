// JavaScript Document
var defaultImage=1;
var big=document.createElement("img");
	big.setAttribute('src' , 'images/' + "moon" +'.jpg');
	big.onclick=showPopUp;
var thumbnail=document.createElement("div");
	thumbnail.className="thumbnail-wrapper";




	var images=[
			"1.jpg",
			"2.jpg",
			"3.jpg",
			"4.jpg",
			"5.png"
			];
	
	var thumb=[];
	for(i=0;i<images.length;i++)
		{
			thumb[i]=document.createElement("img");
			thumb[i].setAttribute('src' , 'images/' + images[i]);
			thumb[i].onclick=loadImage;
			thumbnail.appendChild(thumb[i]);
		}
		
		document.getElementById("upperdiv").appendChild(big);
		document.getElementById("lowerdiv").appendChild(thumbnail);
		
		
		
		function loadImage()
		{
			var recentImg=this.getAttribute('src');
			big.setAttribute('src',recentImg);
		}	
			
	
	
	function showPopUp(){
		document.getElementById('pop-wrapper').style.display="block";
		document.getElementById('image').src=this.getAttribute('src');
		document.getElementById('image').index=this.getAttribute('index');
		//document.getElementById('image').setAttribute('index',this.getAttribute('index'));
		recentImg=this.getAttribute('index');
		
		}
		
	function hidePopUp()
	{
		document.getElementById('pop-wrapper').style.display="none";
	}
	

	/*var recentState=0;
	function slide()
	{

		if(recentState<images.length-1)recentState=0;
		big.setAttribute('src','images/'+images[recentState]);
		big.setAttribute('index',recentState);
		recentState++;

	}*/
	var recentImg;
	
	
	function slidePrev()
	{
		if(recentImg<=0)recentImg=images.length-1;
		else recentImg--;
		document.getElementById('image').setAttribute('src','images/'+images[recentImg]);
	}
		
		
	function slideNext()
	{
		if(recentImg>=images.length-1)recentImg=0;
		else recentImg++;
		document.getElementById('image').setAttribute('src','images/'+images[recentImg]);
	}
		