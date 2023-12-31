// code for fetching **user** information and updating the profile page here

document.addEventListener('DOMContentLoaded', () => {
    // get JSON Web Token 
    const token = 'your-jwt-token'; // replace with the actual JWT token once everything is linked 
  
    // request to get the user's information using the JWT token
    // replace 'link' with the backend endpoint for fetching user information **chris**
    fetch('/api/getUserProfile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      // Update the profile page with the user's information
      const usernameElement = document.getElementById('username');
  
      // if you have an element for the profile picture
      const profilePictureElement = document.querySelector('.profile-picture');
      // set the user profile picture as the profile picture bubble in nav bar
      profilePictureElement.style.backgroundImage = `url(${data.profilePicture})`;
  
      usernameElement.textContent = data.username;
    })
    .catch(error => {
      console.error('Error fetching user information:', error);
      // error (e.g., redirect to login page or show an error message)
    });
  });

  const logoutButton = document.getElementById('logoutBtn')

  logoutButton.addEventListener('click', () => {
    window.location.href = 'https://traveling-bucket-a1886f9c05bf.herokuapp.com/';
  });
  //API SEARCH FUNCTION
  
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const searchQuery = searchInput.value;
  
    try {
      const response = await fetch(`/api/travelDestinations/search?name=${searchQuery}`);
      if (response.ok) {
        const destinations = await response.json();
        
        console.log(destinations);
      
      } else {
        console.error('Error searching destinations:', response.statusText);
      }
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  });
  
  // var myWidget = cloudinary.createUploadWidget({
  //   cloudName: 'dstjbcoj0', 
  //   uploadPreset: 'nkle7m7w'}, (error, result) => { 
  //     if (!error && result && result.event === "success") { 
  //       console.log('Done! Here is the image info: ', result.info); 
  //     }
  //   }
  // )
  
  // document.getElementById("upload_widget").addEventListener("click", function(){
  //     myWidget.open();
  //   }, false);
  // //memories input
  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import UserPhotos from './frontend/src/sections/Userphotos.js';


  // Define the profile
  function Profile() {
    return (
      `<div>
        {/* Other content */}
        <UserPhotos /> {/* Render the UserPhotos component */}
      </div>`
    );
  }
  
  // Render the profile
  ReactDOM.render(Profile, document.getElementById('root'));
  
export default Profile;