const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
});


function sendMail(event) {
event.preventDefault();
const form = event.target;
const subject = encodeURIComponent(form.subject.value);
const body = encodeURIComponent(`Hi, my name is ${form.name.value}.\n\n${form.message.value}\n\nContact: ${form.email.value}`);
window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
alert('Mail client opened!');
form.reset();
}


// Animate skill bars on load
window.addEventListener('load', () => {
document.querySelectorAll('.skills-bar div').forEach(bar => {
const width = bar.style.width;
bar.style.width = '0';
setTimeout(() => bar.style.width = width, 500);
});
});