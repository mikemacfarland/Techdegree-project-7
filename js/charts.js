// ------------------------
// VARIABLES
// ------------------------

// variables for alert dropdown
const notificationsBell = document.querySelector('.notifications')
const notifications = document.getElementsByClassName('notification')
const body = document.querySelector('body')
const newNotification = document.querySelector(".new-notification")

let notificationsDropdown = document.querySelector('.notifications-dropdown')
let notifyChildren = notificationsDropdown.children

// variable for alert banner
const alertBanner = document.querySelector('#alert')

// variables for traffic line chart
const trafficCanvas = document.querySelector('#traffic-chart')

let dataSelection = document.querySelectorAll('.traffic-nav-link')

// variable for traffic bar chart
const dailyCanvas = document.querySelector('#daily-traffic-chart')

// variable for dohnut chart
const mobileCanvas = document.querySelector('#mobile-users-chart')

// variables for message form
const searchUser = document.querySelector('#user-search')
const messageUser = document.querySelector('#message-user')
const send = document.querySelector('#send')

// variables for settings widget
let settings = document.querySelector('#settings')
let switches = document.getElementsByClassName('switch')
let checkbox = document.getElementsByClassName('checkbox')

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
  if (e.target === notificationsDropdown.querySelector('div')){
    console.log('wow')
  }
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

const trafficData = {
  labels: [ 0,600,1000,1500,2000,2500],
  datasets: [{
  data: [16-22,23-29,30-5,6-12,13-19,20-28,27-3,4-10,11-17,18-24,25-31],
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
    data: trafficData,
    options: trafficOptions
    });
    
// ------------------------
// BAR CHART
// ------------------------

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
  label: '# of Hits',
  data: [75, 115, 175, 125, 225, 200, 100],
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

// ------------------------
// SETTINGS WIDGET
// ------------------------

// functions for local storage setting and retreival
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

