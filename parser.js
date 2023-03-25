const apiUrl = 'https://api.github.com/';
  
// function to fetch github user data using Axios library
async function getUserData(username) {
	const apiEndpoint = `${apiUrl}users/${username}`;
	try {
		const response = await axios.get(apiEndpoint);
		 
          //update ui with result
          updateUI(response.data)
          
        } catch (error){
         console.error(error.message);

          const errorMessageDiv = document.getElementById('results');

           errorHTML= '<p style=color:red; > Sorry, an error occured. There is no such user. Please try again! </p>'
          
           errorMessageDiv.innerHTML= errorHTML;
	}
}


// function to update the UI with user data
function updateUI(userData){
    const userName = userData.login;
    const name = userData.name || 'Name not provided';
    const bio = userData.bio || 'Bio not available.';
  	const followersCount = userData.followers;
  
  	// create HTML template for displaying user data
  	const htmlTemplate = `
     <div>
       <p><strong>Username:</strong> ${userName}</p>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Bio:</strong> ${bio} </p>
       <p><strong>Number of Followers:</strong> ${followersCount}</P
   		 </div>`
   
        // add it to the page inside #results container

         document.getElementById('results').innerHTML= htmlTemplate
      
}

// цей рядок зберігає посилання на елемент HTML-форми з ідентифікатором "github-form" у змінній з ім'ям "form".
const form = document.querySelector("#github-form");

// цей рядок приєднує слухача подій до події submit форми введення даних користувача GitHub.
form.addEventListener("submit", (event) => {

  // цей рядок забороняє функціонал кнопки "Надіслати" за замовчуванням, яка зазвичай оновлює або перенаправляє сторінку.
  event.preventDefault();

  // Цей рядок отримує і зберігає значення, введені користувачами в поле вводу "username-input".
  const usernameInputValue = document.getElementById("username-input").value;

  /* Цей рядок викликає функцію, яка отримує ім'я користувача GitHub як параметр і надсилає GET-запит, використовуючи бібліотеку Axios, 
     щоб отримати потрібні дані користувача з кінцевої точки API GitHub, після чого викликає метод updateUI, щоб відобразити результати на екрані після успішного отримання з API; 
     передаючи дані отриманого об'єкта-відповіді в якості аргументу. */
  getUserData(usernameInputValue);

});




