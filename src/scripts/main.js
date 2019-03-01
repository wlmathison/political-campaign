const candidate = {
    district: "5th Congressional District",
    platform: {
        taxes: "",
        jobs: "",
        infrastructure: "",
        healthCare: "",
        crimeEnforcement: "",
    },
    donationURL: "",
    enventCalendar: "",
    volunteerInfo: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        availability: "",
        willingActivities: []
    },
    biography: "",
    imageGallery: {
        headShot: "",
        familyPic: "",
        constituentPic: "",
    },
    missionStatement: "",
    voterRegistrationURL: "",
};

console.table(candidate);


function changeDistrict(newDistrict) {
    candidate.district = newDistrict;
};

function changePlatform(topic, newPlatformStatement) {
    candidate.platform[topic] = newPlatformStatement;
};

function changeDonationURL(newURL) {
    candidate.donationURL = newURL;
};

function changeEventCalander(newCalendar) {
    candidate.enventCalendar = newCalendar;
};

function changeVolunteerInfo(volunteerInput, volunteerValue) {
    if (volunteerInput === "willingActivites") {
        candidate.volunteerInfo.willingActivities.push(volunteerValue)
    } else {
        candidate.volunteerInfo[volunteerInput] = volunteerValue;
    }
};

function changeBiography(newBio) {
    candidate.biography = newBio;
};

function changeImageGallery(photoType, newImage) {
    candidate.imageGallery[photoType] = newImage;
};

function changeMissionStatement(newStatement) {
    candidate.missionStatement = newStatement;
};

function changeVoterRegistrationURL(newVoterURL) {
    candidate.voterRegistrationURL = newVoterURL;
};