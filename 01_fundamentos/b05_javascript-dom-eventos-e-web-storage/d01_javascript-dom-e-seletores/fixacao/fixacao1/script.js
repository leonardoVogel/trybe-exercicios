const header = document.getElementById('header-container');
const emergency = document.querySelectorAll('.emergency-tasks')[0];
const noEmergency = document.querySelectorAll('.no-emergency-tasks')[0];
const emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');


header.style.backgroundColor = '#2fc18c'
emergency.style.backgroundColor = 'pink'
noEmergency.style.backgroundColor = 'yellow'
emergencyTitle[0].style.backgroundColor = 'purple'
emergencyTitle[1].style.backgroundColor = 'purple'
noEmergencyTitle[0].style.backgroundColor = 'black'
noEmergencyTitle[1].style.backgroundColor = 'black'
footer.style.backgroundColor = '#036b52'