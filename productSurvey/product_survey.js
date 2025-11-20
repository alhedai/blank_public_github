

let submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

function submitFeedback() {
    let username = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let designation = document.getElementById("designation").value;
    let productType = document.getElementById("productType").value;
    let feedbackText = document.getElementById("feedbackText").value;
    
    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userExperince").innerHTML = feedbackText;
    
    document.getElementById("userInfo").style.display = "block";
    alert("thank you for your feedback");
}

document.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        submitFeedback();
    }
});