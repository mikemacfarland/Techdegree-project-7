const alertBanner = document.querySelector('#alert')
 
alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener("click", e =>{
    if (e.target = document.querySelector(".alert-banner-close")){
        alertBanner.style.display = "none"
    }
}
)