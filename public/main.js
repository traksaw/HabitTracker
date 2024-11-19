// import { apiKey } from "./apiKeys";

var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");
const streakBtn = document.getElementsByClassName("streakBtn")
const resetBtn = document.getElementsByClassName("resetBtn")
const inspoBtn = document.querySelector('#apiBtn')
const pinBtn = document.querySelector('#pinnedQuoteBtn')

pinBtn.addEventListener('click', pinQuote)

function pinQuote(){
const object = {
  quote: document.querySelector('#quoteSection').innerText,
  author: document.querySelector('#authorSection').innerText,
  email: document.querySelector('#emailSection').innerText
}

  console.log(object.quote, object.author)

  fetch('pinned', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object)
  }).then(function (response) {
    window.location.reload()
  })
}

console.log(inspoBtn)

inspoBtn.addEventListener('click', getMeInspo)

function getMeInspo() {
  console.log('button clicked')
  const quoteArea = document.querySelector('#quoteSection')
  const authorArea = document.querySelector('#authorSection')
  const url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': `EXyOyn6Z1ROLqILk1NbYYA==3uQH1TRzZMveYzWa`,
      'Content-Type': 'application/json'

    },
  };
  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      console.log(data[0].quote, data[0].author)
      quoteArea.innerText = data[0].quote;
      authorArea.innerText = data[0].author
    })

}

// console.log(streakBtn)

Array.from(streakBtn).forEach(function (element) {
  element.addEventListener('click', function () {
    const object = {
      name: element.closest('li').querySelector('.catName').innerText,
      goal: element.closest('li').querySelector('.goalName').innerText
    }
    // const msg = this.parentNode.parentNode.childNodes[3].childNodes[3].innerText
    fetch('streak', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    }).then(function (response) {
      window.location.reload()
    })

  })
})

Array.from(resetBtn).forEach(function (element) {
  element.addEventListener('click', function () {
    const object = {
      name: element.closest('li').querySelector('.catName').innerText,
      goal: element.closest('li').querySelector('.goalName').innerText
    }
    // const msg = this.parentNode.parentNode.childNodes[3].childNodes[3].innerText
    fetch('reset', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    }).then(function (response) {
      window.location.reload()
    })

  })
})

// Array.from(thumbUp).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp': thumbUp
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     // console.log('hey')
//     fetch('messages', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown': thumbDown
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const object = {
      name: element.closest('li').querySelector('.catName').innerText,
      goal: element.closest('li').querySelector('.goalName').innerText
    }
    // const msg = this.parentNode.parentNode.childNodes[3].childNodes[3].innerText
    fetch('streak', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    }).then(function (response) {
      window.location.reload()
    })
  });
});
