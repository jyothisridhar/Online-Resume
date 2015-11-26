//Bio 

var bio = {
	"name": "Jyothi Sridhar",
	"role": "front end web developer",
	"contacts" : {
		"mobile": '9886709283',
		"email": "jyotishridhar7@gmail.com",
		"github": "jyothisridhar",
		"twitter": "@Jyothi_Sridhar",
		"location": "Bangalore"
	},
	"welcomeMessage": "Curriculum vitae",
	"skills": ["HTML", "CSS", "Javascript", "jQuery", "C++", "C", "Python"],
	"biopic": "images/me.jpg"
};

bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGit);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
};

bio.displaySkills = function() {
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var index in bio.skills){
			var formattedSkill= HTMLskills.replace("%data%", bio.skills[index]);
			$("#skills").append(formattedSkill);
		}
	}
};

//Education 
var education = {
	"schools": [
	{
		"name" : "UVCE",
		"location": "Bangalore",
		"degree": "Bachelor of Engineering",
		"majors": "Computer Science",
		"dates": "2010",
		"url": "http://uvcebangalore.ac.in"
	}
	],
	"onlineCourses": [
	{
		"title": "Front end web developer nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com"
	}
	]
};

education.display = function () {
	$("#education").append(HTMLschoolStart);
	$(".education-entry").append(HTMLSchools);
  	if(education.schools.length > 0) {
		for(var key in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[key].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[key].location);
			$(".education-entry:last").append(formattedSchoolLoc);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].majors);
			$(".education-entry:last").append(formattedMajor);
		}
  	}
};

education.displayOnlineCourse = function() {
	$(".education-entry:last").append(HTMLonlineClasses);
  	if(education.onlineCourses.length > 0) {
		for(var key in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[key].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
			$(".education-entry:last").append(formattedUrl);
		}
  	}
};

//Work
var work = {
	"jobs": [
		{
			"employer": "Cerner Healthcare",
			"title": "senior sw engineer",
			"location": "Bangalore",
			"dates": "Aug 2014-Nov 2015",
			"description": "C++ developer in a team working on Cerner millenium solutions"
		},
		{
			"employer": "Mindtree",
			"title": "senior sw engineer",
			"location": "Pune",
			"dates": "Aug 2010-June 2014",
			"description": "Worked in a team providing solutions to flight operations for various Airlines"	
		}
	],
};

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
  	if(work.jobs.length > 0) {
		for(var key in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[key].description);
			$(".work-entry:last").append(formattedDesc);
		}
  	}
};

//Projects
var projects = {
	"projects": [
		{
			"title": "Flight Operations",
			"dates": "Jan 2011-June 2014",
			"description": "Flight operations for Airlines",
			"images": "images/sita.png"
		},
		{
			"title": "Cerner Stability",
			"dates": "Aug 2014-November 2015",
			"description": "Stability of cerner millenium applications",
			"images": "images/cerner.png"
		}
	],
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
  	if(projects.projects.length > 0) {
		for(var key in projects.projects){
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
			$(".project-entry:last").append(formattedProjectDescription);
			var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[key].images);
			$(".project-entry:last").append(formattedImg);
		}
  	}
};

$("#main").append(internationalizeButton);
function inName(name){
	var finalName = name;
    
    var names = finalName.split(' ');
    var firstName = names[0];
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    finalName = firstName + " " + names[1].toUpperCase();
    
    return finalName;
}

bio.displayBio();
bio.displaySkills();
projects.display();
work.display();
education.display();
education.displayOnlineCourse();

$("#mapDiv").append(googleMap);