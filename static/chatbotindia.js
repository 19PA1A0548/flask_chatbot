/*js file for chatbot india*/
function send(){
	var x = document.getElementById("input").value;
	//uploading user msg to a div 
	var p = document.createElement("p");
	var y = document.createTextNode(x);
	p.appendChild(y);
	var di = document.getElementsByClassName("r1");
	di[0].appendChild(p);
	//uploading the replied msg of bot to div tag
	if(x=="hi"){
		var pb = document.createElement("p");
		var res1 = document.createTextNode("Hello this is covidbot");
		pb.appendChild(res1);
		var dib = document.getElementsByClassName("r2");
		dib[0].appendChild(pb);
	}
	else if (x=="Get Started"){
		var pb = document.createElement("p");
		var res1 = document.createTextNode("Welcome to covid bot");
		pb.appendChild(res1);
		var dib = document.getElementsByClassName("r2");
		dib[0].appendChild(pb);
	}
	else if (x=="how can you help me"){
		var pb = document.createElement("p");
		var res1 = document.createTextNode("Iam covid chatbot see alert");
		pb.appendChild(res1);
		var dib = document.getElementsByClassName("r2");
		dib[0].appendChild(pb);
		//creating an alert msg
		alert("This bot can provide covid-19 statistics across states in india and in world.(Ps:- All states or countries should be in upper camel case only)\n"+
			"infected == Total number of people infected\n"+
			"new infected == Total number of people newly Infected\n"+
			"recovered == Total number of people recovered\n"+
			"new recovered == Total number of people newly recovered\n"+
			"died == Total number of people died\n"+
			"To get any type of detail type \n"+
			"State or Country,statistic");
	}
	else{
		var result = x.split(",");
		var state = result[0];
		var info = result[1];
		var value = "Error msg";
		var name;
		var request = new XMLHttpRequest();
		request.open('GET', 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true', true);
		request.onload = function () {
  			// We can acess JSON data here in API
  			var data = JSON.parse(this.response);
  			for(var i=0;i<data.regionData.length;i++){
  				if(data.regionData[i].region==state){
  					if(info=="infected"){
  						value = data.regionData[i].totalInfected;
  						name = "Infected"
  					}
  					else if(info=="new infected"){
  						value = data.regionData[i].newInfected;
  						name = "newly Infected"
  					}
  					else if(info=="recovered"){
  						value = data.regionData[i].recovered;
  						name = "recovered"
  					}
  					else if(info=="new recovered"){
  						value = data.regionData[i].newRecovered;
  						name = "newly recovered"
  					}
  					else if(info=="died"){
  						value = data.regionData[i].deceased;
  						name = "died"
  					}
  				}
  			}
  			//creating a formated string
  			var sending = `${name} : ${value}`
  			var pb = document.createElement("p");
			var res1 = document.createTextNode(sending);
			pb.appendChild(res1);
			var dib = document.getElementsByClassName("r2");
			dib[0].appendChild(pb);
		}
		request.send();
	}
	//changing the value in input tag to empty string so that user can send multiple msgs
	document.getElementById("input").value = "";
}