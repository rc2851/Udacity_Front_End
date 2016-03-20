var formattedName = HTMLheaderName.replace("%data%", "Robert Cannon");
var formattedRole = HTMLheaderRole.replace("%data%", "Professional Application Developer");
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", "314-555-5555");
var formattedMobile = HTMLmobile.replace("%data%", "618-555-5555");
var formattedEmail = HTMLemail.replace("%data%", "Robert@example.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "@robert");
var formattedGitHub = HTMLgithub.replace("%data%", "rc2851");
var formattedBlog = HTMLblog.replace("%data%", "blog");
var formattedLocation = HTMLlocation.replace("%data%", "St. Louis, MO");
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome message here.");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);


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
		"JavaScript",
		"Perl",
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
			"images/197x148.gif",
			"images/197x148.gif"
		]
	},
     {
		"title": "Sample Project 2",
		"dates": "2014",
		"description": "blah, blah",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	}
 ]};
 

//Picture display
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
 
 //Skills display
 if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) { 
		 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		 $("#skills").append(formattedSkill);
	}
 };
 
 //Work display
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

 //Projects display
 projects.display = function(){
 //function displayProjects(){
	 for(project in projects.projects){
		 $("#projects").append(HTMLprojectStart);

		 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		 $(".project-entry:last").append(formattedTitle);
		 
		 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		 $(".project-entry:last").append(formattedDates);
		 
		 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		 $(".project-entry:last").append(formattedDescription);
		 
		 if(projects.projects[project].images.length > 0){
			 for(image in projects.projects[project].images){
				 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				 $(".project-entry:last").append(formattedImage);
			 }
		 }
	 }
 }
 
 //Call display work function
 displayWork();
 //Call display projects function
 //displayProjects();
 projects.display();
 
 //display mapp
 $("#main").append(internationalizeButton);
 $("#mapDiv").append(googleMap);
 
 
 
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



//http://jsonlint.com/

