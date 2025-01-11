document.querySelector('.downloadcv').addEventListener('click',()=>{
    const url='file:///C:/Users/HZ/Documents/CV.pdf';
    const link=document.createElement("a");
    link.href=url;
    link.download="remove.pdf";
    link.style.display="none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})
document.querySelector('.downloadct').addEventListener('click', async () => {
  const url = 'file:///C:/Users/HZ/Downloads/Sadaf%20Javed.pdf'; // Replace with your PDF URL
  const response = await fetch(url);

  if (!response.ok) {
    alert('Failed to download the file!');
    return;
  }

  const blob = await response.blob();
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Sadaf Javed.pdf'; // Desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const boxes = document.querySelectorAll('.box1, .box2');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});
boxes.forEach(box => {
  box.style.animationPlayState = 'paused'; // Pause animations initially
  observer.observe(box);
});


document.querySelector('#contactForm').addEventListener('submit',(e)=>{
    let name=document.querySelector('#name').value.trim();
    let email=document.querySelector('#email').value.trim();
    let msg=document.querySelector('#msg').value.trim();
    let alertDiv=document.querySelector('#formAlert');

    alertDiv.style.display="none";
    alertDiv.textContent='';

    /**Form Validation */
    if(name.length < 3 || name.length >20){
        e.preventDefault();
        alertDiv.style.display='block';
        alertDiv.textContent='Name should be in between 3 and 20 characters.';
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alertDiv.style.display = 'block';
            alertDiv.textContent = 'Please enter a valid email address.';
            return;
        }
        if(message.length>100){
            e.preventDefault();
            alertDiv.style.display='block';
            alertDiv.textContent='Message should not exceed 100 characters only.';
            return;
        }
});