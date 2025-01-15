const button = document.getElementById("fetchUserButton");

button.addEventListener('click',function(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET','https://randomuser.me/api/',true) ;

   xhr.onload=function(){
    if(xhr.status==200){
        const data= JSON.parse(xhr.responseText);
        const user=data.results[0];
        console.log(user);

        const userName=`${user.name.first} ${user.name.last}`;
        const userEmail= user.email;
        const userImage= user.picture.large;

        document.getElementById('userName').innerText = `Name: ${userName}`;
            document.getElementById('userEmail').innerText = `Email: ${userEmail}`;
            const userImageElement = document.getElementById('userImage');
            userImageElement.src = userImage;
            userImageElement.style.display = 'block';      
    }
    else{
        console.log("error in fetching data:",xhr.statusText);
    }
   };
   xhr.onerror=function(){
    console.error("request failed");
   }

   xhr.send();
});
