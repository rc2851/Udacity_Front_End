var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Sr. Application Developer",
        "location": "St. Louis, MO",
        "dates": "June 2000 - Current",
        "description": "Application developer."
    }, {
        "employer": "Pillsbury",
        "title": "Sanitation Supervisor",
        "location": "St. Louis, MO",
        "dates": "1986 - June 2000",
        "description": "Sanitation supervision."
    }]
};

var education = {
    "schools": [{
        "name": "Vatterott College",
        "location": "St. Louis, MO",
        "degree": "Associates",
        "majors": ["CompSci"],
        "dates": "2000-2002",
        "url": "http://example.com"
    }, {
        "name": "Collinsville High School",
        "location": "Collinsville, Il",
        "degree": "High School Diploma",
        "majors": ["CompSci"],
        "dates": "1981-1985",
        "url": "http://example.com"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "date": "2016",
        "url": "http://www.udacity.com"
    }]
};

var bio = {
    "name": "Robert Cannon",
    "role": "Professional Application Developer",
    "contacts": {
        "mobile": "6185555555",
        "email": "email@email.com",
		"github": "rc2851",
		"twitter": "twitter@example",
		"location": "St. Louis, MO"
    },
    "welcomeMessage": "Welcome to my resume.",
    "skills": [
        "Java",
        "JavaScript",
        "Perl",
        "VBA",
        "SQL"
    ],
    "biopic": "images/fry.jpg"
}

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2014",
        "description": "Description of project 1",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    }, {
        "title": "Sample Project 2",
        "dates": "2014",
        "description": "Description of project 2",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    }]
};

//Bio
bio.display = function() {	
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);	
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);		

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

//Work
work.display = function() {
    if (work.jobs.length > 0) {
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

//Projects
projects.display = function() {
    //function displayProjects(){
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

//Education
education.display = function() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
		
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajors);

        var formattedSchoolUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedSchoolUrl);
    }
	
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

//Display bio function
bio.display();
//Display work function
work.display();
//Display projects function
projects.display();
//Display education function
education.display();
//Display map
$("#mapDiv").append(googleMap);