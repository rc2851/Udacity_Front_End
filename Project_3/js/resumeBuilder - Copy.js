var formattedName = HTMLheaderName.replace("%data%", "Robert Cannon");
var formattedRole = HTMLheaderRole.replace("%data%", "Professional Application Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var education = {
	"schools" : [
     {
		"name": "Echard College",
		"city": "St. Louis, Mo",
		"degree": "Associates",
		"majors": ["CompSci"],
		"dates": 2000,
		"url": "http://example.com"
	},
     {
		"name": "Vatterot",
		"city": "SOMEWHERE",
		"degree": "Nanodegree",
		"majors": ["CompSci"],
		"dates": 2000,
		"url": "http://example.com"
	}
 ],
	"onLineCourses" : [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "http:/www.udacity.com"		
	}
	]};

var bio = {
	name: "Robert Cannon", 
	role: "Professional Application Developer", 
	welcomeMessage: "welcome message here",
	contacts: {
		"mobile": "6185555555",
		"email": "email@email.com"
	},
	skills:[
		"Java", 
		"VBA", 
		"SQL"
	], 
	bioPic:"images/fry.jpg"
}

var projects = {
	"projects" : [
     {
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "blah, blah",
		"images": [
			"http://image1.com",
			"http://image2.com"
		]
	},
     {
		"title": "Sample Project 2",
		"dates": "2014",
		"description": "blah, blah",
		"images": [
			"http://image1.com",
			"http://image2.com"
		]
	}
 ]};
 
 //$("#main").append(bio.name);
//$("#main").append(bio.skills);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);
//$("#header").append(bio.bioPic);
//$("#main").append(bio.welcome);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
 
 if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) { 
		 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		 $("#skills").append(formattedSkill);
	}
 };
 
 function displayWork(){
  if(work.jobs.length > 0){
	for (job in work.jobs) { 
		$("#workExperience").append(HTMLworkStart);
		 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		 var formattedEmployerTitle = formattedEmployer + formattedTitle;
		 var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		 var formattedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		 var formattedEmployerDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		 $(".work-entry:last").append(formattedEmployerTitle);
		 $(".work-entry:last").append(formattedEmployerLocation);
		 $(".work-entry:last").append(formattedEmployerDates);
		 $(".work-entry:last").append(formattedEmployerDescription);
	}
  }
 };
 
 displayWork();
 
 projects.display = function(){
	 
 }
 
 //print click location
 $(document).click(function(loc){
	 //console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
	 logClicks(loc.pageX, loc.pageY);
 });
 
 
 
 
 
 /* return locations
 //-----------------------------------------------------
 function locationizer(work_obj) {
    var locations = [];
    for (var job in work.jobs) { 
        locations.push(work.jobs[job].location);
    }
    
    return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
//-----------------------------------------------------
*/

 /*
var skills = ["Java", "VBA", "SQL"];
$("#main").append(skills[0]);

//http://jsonlint.com/

//OBJECTS
var work = {};
work.position = "Sr Application Developer";
work.employer = "AT&T";
work.years = 0.3;

var education = {};
education["name"] = "Nova Southeastern";
education["years"] = "2005-2013";
education["city"] = "Fort Lauderdale, FL, US";

$("#main").append(work["position"]);
$("#main").append(education.years);
*/


//document.getElementById("education").backgroundColor = "black;

//$("#main").append(bio.name);
//$("#main").append(bio.skills);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);
//$("#main").append(bio.pic);
//$("#main").append(bio.welcome);
//console.log(skills[0].length);
//console.log(bio.name);
//console.log(skills[1]);
