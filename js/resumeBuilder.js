// a project from udacity to improve my skills in End-font developer.
// and it's Online Resume Which contains my information 
//like personal info , Work Experience , Projects , Education and Online Classes that I've been taking.
//reference to ”%data%” to make easy change if we need.
var data = "%data%";

// ---- bio object contains (name , role , contacts , welcomeMessage , skills , biopic ) ----
// ----    inside the contacts there are (mobile , email , github , twitter , location)    ----
var bio = {
    name: "Noura Alkhateeb",
    role: "End-font developer",
    contacts: {
        mobile: "0080034774",
        email: "Ireturn.noura@hotmail.com",
        github: "nouraal",
        twitter: "@nireta1",
        location: "Riyadh",
    },
    welcomeMessage: "welcome to my resume",
    skills: ["End-font developer", "C#", "C++"],
    biopic: "images/my img.jpg",

    // ----- display function for bio. ----- 
    display: function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);


        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts , #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);

        // ---- if statement to check the length and for loop to print the skills array. ----
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

// ----              education object contains  (schools , onlineCourses)               ----
// ---- inside the schools there are (name , location , degree , majors , dates , url ) ----
// ----     and inside the onlineCourses there are (title , school , dates , url )      ----
var education = {
    schools: [{
        name: "Princess Nourah bint Abdulrahman University",
        location: "Riyadh, KSA",
        degree: "bachelor",
        majors: ["Computer Science"],
        dates: "2011 to 2016",
        url: "http://www.pnu.edu.sa/en/Pages/default.aspx",
    }],
    onlineCourses: [{
        title: "Front-End Web Developer ",
        school: "udacity",
        dates: "Jul - Oct 2017",
        url: "https://www.udacity.com/",
    }],

    //----  display function for education. ----
    display: function() {
        // ---- if statement to check the length and for loop to print the schools array. ----
        if (education.schools.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);

                $("#education").append(HTMLschoolStart);
                $(".education-entry").append(formattedName, formattedDegree, formattedSchoolDates, formattedLocation);

                // ---- for loop to print the majors array that exists in a school array. -----
                for (var a = 0; a < education.schools[i].majors.length; a++) {
                    var formattedMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[a]);
                    $(".education-entry").append(formattedMajor);
                }
            }

            $("#education").append(HTMLonlineClasses);

            // ----- if statement to check the length and for loop to print the onlineCourses array. -----
            if (education.onlineCourses.length > 0) {

                for (var n = 0; n < education.onlineCourses.length; n++) {
                    var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[n].title).replace("#", education.onlineCourses[n].url);
                    var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[n].school);
                    var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[n].dates);
                    var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[n].url);


                    $("#education").append(HTMLschoolStart);
                    $(".education-entry:last").append(formattedTitle, formattedSchool, formattedOnlineDates, formattedUrl);

                }
            }
        }
    }
};

// ----                          work object contains  (jobs)                                ----
// ---- inside the jobs there are (employer , title , location , dates , description , url ) ----
var work = {
    jobs: [{
        employer: "Ministry of Labor",
        title: "Training in IT department",
        location: "Riyadh, KSA",
        dates: "JUN 2015",
        description: "Two months training in Ministry of Labor i worked on tasks management system website using C# language with visual studio ASP.NET MVC program, also i worked on databases in the Ministry of Labour.",
        url: "https://mlsd.gov.sa/",
    }],

    // ----- display function for work. ----- 
    display: function() {

        // ---- if statement to check the length and for loop to print the jobs array. ----
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            for (var i = 0; i < work.jobs.length; i++) {

                var formattedworkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer).replace("#", work.jobs[i].url);
                var formattedworkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
                var formattedworkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
                var formattedworkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
                var formattedworkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
                $(".work-entry").append(formattedworkEmployer, formattedworkTitle, formattedworkDates, formattedworkLocation, formattedworkDescription);
            }
        }
    }
};

// ----                 work projects contains  (projects)                 ----
// ----  inside the jobs there are (title , dates , description , images)  ----
var projects = {
    projects: [{
        title: "TAXI APP",
        dates: "in 2015",
        description: "Taxi dispatching system using android smartphone, we name is Fast Taxi and it's an Android Application focuses on designing and implementing the application for exchanging information between android devices. The application consists of an Android applications which has tow clients (Customer, and Driver), also a server that provides interaction between them .Taxi dispatching system is a transportation service that will change the whole concept of transportation and That was my graduation project group of five students.",
        images: ["images/p1-1.png", "images/p1-2.png", "images/p1-3.png", "images/p1-4.png"],
    }],

    // -----  display function for projects.  ----- 
    display: function() {

        // ----  for loop to print the projects array.  ----
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

            // ----  for loop to print the images array that exists in a projects array..  ----
            for (var a = 0; a < projects.projects[i].images.length; a++) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[a]);

                $(".project-entry").append(formattedImage);
            }
        }
    }
};

// ----    call all display property to print info in the resume website.     ----
bio.display();
education.display();
work.display();
projects.display();

// ---- print map that show Where I've Lived and Worked in the resume website. ----
$("#mapDiv").append(googleMap);