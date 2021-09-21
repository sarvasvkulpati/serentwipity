let idx = 0;
let data = [
  {
    'image': 'https://pbs.twimg.com/profile_images/1432725978120220672/uxZUTafa.jpg',
    'name': 'visa is writing... ✍🏾📖', 
    'description': 'Simple yet radical: focus your time + energy on what you want to see more of. 🌍💪🏾❤️🔥⚡️ buy my ebook FRIENDLY AMBITIOUS NERD https://t.co/2IBKmkd3kT', 
    'location': '📍 🇸🇬, 🌏, 🌌', 
    'url': '🔗 https://t.co/Mn4VLsT2Yk',
    'followers': '33936', 
    'following': '1620',
    'profileUrl': 'https://twitter.com/visakanv',
    
  },
  {
    'image': 'https://pbs.twimg.com/profile_images/1428528008974016515/gAm8YPHM.jpg',
    'name': 'tyler🫐🍄🐇🕸', 
    'description': 'making things for making things @replit', 
    'location': '📍NYC', 
    'url': '🔗 https://t.co/aUlgM32LpG',
    'followers': '2010', 
    'following': '998',
    'profileUrl': 'https://twitter.com/tylerangert',
    
  }
]



let image = document.getElementById('image');
let name = document.getElementById('name');
let description  = document.getElementById('description')
let place = document.getElementById('location')
let url = document.getElementById('url')
let followers = document.getElementById('followers')
let following = document.getElementById('following')
let profileUrl = document.getElementById('profileUrl')




let refresh = () => {

  console.log('refreshing', idx)
  if (idx == data.length - 1) {
    console.log('hi')
    idx = 0
  } else {
     console.log('hierer')
    idx += 1
  }


  image.src = data[idx].image
name.innerText = data[idx].name
description.innerText = data[idx].description
place.innerText  = data[idx].location
url.innerText  = data[idx].url
url.href = data[idx].url
followers.innerText  = data[idx].followers
following.innerText  = data[idx].following
profileUrl.href  = data[idx].profileUrl



}

refresh()


let refreshButton = document.getElementById('landingRefresh')
refreshButton.addEventListener('click', refresh)
