var formattedName = HTMLheaderName.replace("%data%", "Robert Cannon");
var formattedRole = HTMLheaderRole.replace("%data%", "Professional Application Developer");
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", "314-555-5555");
var formattedMobile = HTMLmobile.replace("%data%", "618-555-5555");
var formattedEmail = HTMLemail.replace("%data%", "Robert@example.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "@robert");
var formattedGitHub = HTMLgithub.replace("%data%", "rc2851");
var formattedBlog = HTMLblog.replace("%data%", "blog");
var formattedLocation = HTMLlocation.replace("%data%", "St. Louis, MO");
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my resume.");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);


var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }]
};

var education = {
    "schools": [{
        "name": "Echard College",
        "location": "Nashville, TN",
        "degree": "Associates",
        "majors": ["CompSci"],
        "dates": 2000,
        "url": "http://example.com"
    }, {
        "name": "Vatterot",
        "location": "Nashville, TN",
        "degree": "Nanodegree",
        "majors": ["CompSci"],
        "dates": 2000,
        "url": "http://example.com"
    }],
    "onLineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2016,
        "url": "http:/www.udacity.com"
    }]
};

var bio = {
    name: "Robert Cannon",
    role: "Professional Application Developer",
    welcomeMessage: "welcome message here",
    contacts: {
        "mobile": "6185555555",
        "email": "email@email.com"
    },
    skills: [
        "Java",
        "JavaScript",
        "Perl",
        "VBA",
        "SQL"
    ],
    bioPic: "images/fry.jpg"
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


//Picture display
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//Skills display
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

//Work display
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

//Projects display
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

//Education display
education.display = function() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolName.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDegree = HTMLschoolName.replace("%data%", education.schools[school].Degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolMajors = HTMLschoolName.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajors);

        var formattedSchoolDates = HTMLprojectDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolUrl = HTMLprojectDescription.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedSchoolUrl);

    }
}

//Call display work function
work.display();
//Call display projects function
//Display projects;
projects.display();
//Display education function
education.display();
//display mapp
$("#mapDiv").append(googleMap);