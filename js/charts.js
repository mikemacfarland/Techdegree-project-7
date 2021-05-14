// ------------------------
// VARIABLES
// ------------------------

// variables for alert dropdown
const clickoff = document.querySelector('.clickoff')
const notificationsBell = document.querySelector('.notifications')
const notifications = document.getElementsByClassName('notification')
const body = document.querySelector('body')
const newNotification = document.querySelector(".new-notification")
const notificationsDropdown = document.querySelector('.notifications-dropdown')

// variable for alert banner
const alertBanner = document.querySelector('#alert')

// variables for traffic line chart
const trafficNav = document.querySelector(".traffic-nav")
const trafficCanvas = document.querySelector('#traffic-chart')

// variable for traffic bar chart
const dailyCanvas = document.querySelector('#daily-traffic-chart')

// variable for dohnut chart
const mobileCanvas = document.querySelector('#mobile-users-chart')

// variables for message form
const searchUser = document.querySelector('#user-search')
const messageUser = document.querySelector('#message-user')
const send = document.querySelector('#send')

// variables for settings widget
const settings = document.querySelector('#settings')
const switches = document.getElementsByClassName('switch')
const checkbox = document.getElementsByClassName('checkbox')

const emailNotifications = document.querySelector('#email-checkbox')
const profilePrivacy = document.querySelector('#privacy-checkbox')
const timeZone = document.querySelector('#timezone')

// ------------------------
// ALERT BELL NOTIFICATIONS DROPDOWN
// ------------------------

body.addEventListener('click', (e) =>{

  if (e.target === notificationsBell && notificationsDropdown.style.display === "flex"){
    notificationsDropdown.style.display = "none"
    return
  }

  if (e.target === notificationsBell){
    notificationsDropdown.style.display = "flex"
    clickoff.style.display = "block"
    newNotification.style.display = "none"
    return
  }

  if (e.target.className === 'close-alert'){
    e.target.parentNode.remove()
    }

  if (notifications.length == '0'){
    notificationsDropdown.style.display = "none"
    newNotification.style.display = "none"
  }

  if (e.target.className === "clickoff" || notificationsDropdown.style.display === "none"){
    notificationsDropdown.style.display = "none"
    clickoff.style.display = "none"
  }

  // if (e.target)
})

// ------------------------
// ALERT BANNER
// ------------------------

alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener("click", e =>{
    if (e.target === document.querySelector(".alert-banner-close")){
        alertBanner.style.display = "none"
    }
}
)

// ------------------------
// TRAFFIC LINE CHART
// ------------------------

trafficNav.addEventListener('click', (e) =>{
  function replaceData(timeframe,dataset){
    if (e.target.textContent === timeframe){
    trafficChart.data = dataset
    trafficChart.update()
  }}
  replaceData("Hourly", hourlyTraffic)
  replaceData("Daily",dailyTraffic)
  replaceData("Weekly",weeklyTraffic)
  replaceData("Monthly",monthlyTraffic)
})

const hourlyTraffic = {
  labels: ["12AM","3AM","6AM","9AM","12PM","3PM","6PM","9PM","12AM"],
  datasets: [{
    data: [0,2,24,20,42,32,67,21,1],
    backgroundColor: 'rgb(103, 86, 167)',
    borderWidth: '1',
  }]
}

const dailyTraffic = {
  labels: ["S","M","T","W","T","F","S"],
  datasets: [{
    data: [120,218,113,160,426,402,82],
    backgroundColor: 'rgb(103, 86, 167)',
    borderWidth: '1',
  }]
}

const weeklyTraffic = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
  data: [ 620,810,1002,715,834,682,523,1086,865,1243,1205],
  backgroundColor: 'rgb(103, 86, 167)',
  borderWidth: '1',
  }]
}

const monthlyTraffic = {
  labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","NOV","DEC"],
  datasets: [{
    data: [4230,3920,4859,4600,5230,5600,3863,4925,5820,6204,6320,7240],
    backgroundColor: 'rgb(103, 86, 167)',
    borderWidth: '1',
  }]
}

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
  duration: 0
  },
  scales: {
  y: {
  beginAtZero: true
  }
  },
  plugins: {
  legend: {
  display: false
  }
  }

  };
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: weeklyTraffic,
    options: trafficOptions
    });
    
// ------------------------
// BAR CHART
// ------------------------

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
  label: '# of Hits',
  data: [120,218,113,160,426,402,82],
  backgroundColor: 'rgb(103, 86, 167)',
  borderWidth: 1
  }]
  };
  const dailyOptions = {
  scales: {
  y: {
  beginAtZero: true
  }
  },
  plugins: {
  legend: {
  display: false
  }
  }
  };
  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

// ------------------------
// DOHNUT CHART
// ------------------------

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: "# of users",
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477bf',
      '#78cf82',
      '#51b6c8'

    ]
  }]
}

const mobileOptions = {
  plugins: {
  legend: {
  position: 'right',
  labels: {
  boxWidth: 20,
  fontStyle: 'bold'
  }
  }
  }
  };

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });

// ------------------------
// USER MESSAGE FORM
// ------------------------



// send button event listener
send.addEventListener('click', () => {
  if (searchUser.value === "" && messageUser.value === ""){
    alert("User and Message Fields must be filled out")
    return
  }
  else if (searchUser.value === ""){
    alert("User field must be filled out")
    return
  }
  else if (messageUser.value === ""){
    alert("Message field must be filled out")
    return
  }
  else{
    alert(`Message sent to ${searchUser.value}`)
  }
})


// user search
const userNames = [ "Dale Byrd",
                    "Victoria Chambers",
                    "Dawn Wood", 
                    "Dan Oliver"]

/*list of available options*/
var n = userNames.length; //length of datalist tags    
  
function ac(value) {
   document.getElementById('datalist').innerHTML = '';
    //setting datalist empty at the start of function
    //if we skip this step, same name will be repeated
      
    l = value.length;
    //input query length
for (var i = 0; i<n; i++) {
    if(((userNames[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
    {
        //comparing if input string is existing in tags[i] string

        var node = document.createElement("option");
        var val = document.createTextNode(userNames[i]);
         node.appendChild(val);

          document.getElementById("datalist").appendChild(node);
              //creating and appending new elements in data list
    }
  }
}


// ------------------------
// SETTINGS WIDGET
// ------------------------

// ------------------------
// LOCAL STORAGE JS
// ------------------------
function setStorage(key,value){
  window.localStorage.setItem(key,value)
}

function getStorage(key){
  localStorage.getItem(key)
    checkboxes()
  }

// IIFE - using getStorage to set values
( () => {
emailNotifications.checked = JSON.parse(localStorage.getItem("email"))
profilePrivacy.checked = JSON.parse(localStorage.getItem('privacy'))
timezone.value = localStorage.getItem('timezone')
if (timezone.value === ""){
  timeZone.value = 'default'
}

checkboxes()
})()

// function for on off switch labels
function checkboxes(){
for (let i = 0; i < checkbox.length; i++){

  if(checkbox[i].checked === true){
    switches[i].firstChild.textContent = "ON"
  }

  if(checkbox[i].checked === false){
    switches[i].firstChild.textContent = "OFF"
  }
}}

// event listener for save and cancel buttons
settings.addEventListener('click', (e) => {

  checkboxes()
  if (e.target.id === "cancel"){
  emailNotifications.checked = false
  profilePrivacy.checked = false
  timeZone.value = 'default'
  localStorage.clear()
  checkboxes()
  }

  if (e.target.id === "save"){
    setStorage("email",emailNotifications.checked)
    setStorage("privacy",profilePrivacy.checked)
    setStorage("timezone",timezone.value)
    if (timezone.value === 'default'){
      alert('Please select a timezone')
    }
  }
})
