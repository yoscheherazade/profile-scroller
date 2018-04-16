const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingFor: 'Male',
    location: 'Boston, MA',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    name: 'Jane Roe',
    age: 38,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'Miami, FL',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'Jennifer Smith',
    age: 19,
    gender: 'Female',
    lookingFor: 'Female',
    location: 'Scottsdale, AZ',
    image: 'https://randomuser.me/api/portraits/women/35.jpg'
  }
];

const profile = profileIterator(data);

//Call First Profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${
          currentProfile.gender
        } looking for ${currentProfile.lookingFor}</li> 
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${
      currentProfile.image
    }" class="rounded">`;
  } else {
    // Reload the page
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
