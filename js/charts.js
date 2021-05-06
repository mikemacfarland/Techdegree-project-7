// ------------------------
// alert bell action
// ------------------------

const notificationsBell = document.querySelector('.notifications')
const notifications = document.getElementsByClassName('notification')
const body = document.querySelector('body')
const newNotification = document.querySelector(".new-notification")
let notificationsDropdown = document.querySelector('.notifications-dropdown')
let notifyChildren = notificationsDropdown.children

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
// notifications/alert banner
// ------------------------

const alertBanner = document.querySelector('#alert')
 
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
// Traffic line chart
// ------------------------

const trafficCanvas = document.querySelector('#traffic-chart')

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
    
let dataSelection = document.querySelectorAll('.traffic-nav-link')

// ------------------------
// bar chart
// ------------------------

const dailyCanvas = document.querySelector('#daily-traffic-chart')

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
// dohnut chart
// ------------------------

const mobileCanvas = document.querySelector('#mobile-users-chart')

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
// form data
// ------------------------

const searchUser = document.querySelector('#user-search')

const messageUser = document.querySelector('#message-user')

const send = document.querySelector('#send')

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
// settings switches
// ------------------------

let settings = document.querySelector('.settings')

settings.addEventListener('click', (e) => {
  let switches = document.getElementsByClassName('switch')
  let checkbox = document.getElementsByClassName('checkbox')

  if (e.target.className === "switch" || "switch-label"){
    for (i = 0; i<switches.length; i++){
      if(checkbox[i].checked === true){
        switches[i].firstChild.textContent = "ON"
      }
      if(checkbox[i].checked === false){
        switches[i].firstChild.textContent = "OFF"
      }
    }
  }
})

// ------------------------
// settings local storage
// ------------------------

const saveSettings = document.querySelector('#save')


saveSettings.addEventListener('click', () =>{

})
