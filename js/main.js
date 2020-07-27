/*
; =======================================================
; Title: main.js ( familysocial website - js folder )
; Authors: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 21 July 2020
; Description: JS Template engine setup file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

//
let imgOne = document.getElementById('img').src('img/img_one.webp')
let imgTwo = document.getElementById('img').src('img/img_two.webp')
let imgThree = document.getElementById('img').src('img/img_three.webp')

// Create a simple function that passes each page in as a parameter and returns it.
let btnBank = document.getElementByClassName('nav-item')
let homeBtn = document.getElementById('home-nav-button')
let aboutBtn = document.getElementById('about-nav-button')
let appBtn = document.getElementById('app-nav-button')
let contactBtn = document.getElementById('contact-nav-button')
let registerBtn = document.getElementById('register-nav-button')

homeBtn.click((pgHome) => { return pgHome })
aboutBtn.click((pgAbout) => { return pgAbout })
appBtn.click((pgApp) => { return pgApp })
contactBtn.click((pgContact) => { return pgContact })
registerBtn.click((pgRegister) => { return pgRegister })

// This variable stores the HTML value for the HOME page.
let pgHome = document.getElementById('pgContent').innerHTML(`

  <div class="container">

    <img src="img/img_one.webp" id="imgSwap">

    <div id="bullets">
      <a href="#" onclick="changeImg(imgOne);" id="bullet_one"></a>
      <a href="#" onclick="changeImg(imgTwo);" id="bullet_two"></a>
      <a href="#" onclick="changeImg(imgThree);" id="bullet_three"></a>
    </div>
  </div>

`)

// This variable stores the HTML value for the ABOUT page.
let pgAbout = document.getElementById('pgContent').innerHTML(`

    <h1 class="develop"> THE ABOUT PAGE IS BEING DEVELOPED...</h1>

`)

// This variable stores the HTML value for the THE APP page.
let pgApp = document.getElementById('pgContent').innerHTML(`

    <h1 class="develop"> THE APP PAGE IS BEING DEVELOPED...</h1>

`)

// Create a simple function that passes each page in as a parameter and returns it.
let changePage = (page) => {
  return page
}

let changeImg = (image) => {
  return image
}

let clearForm = () => {

  let undo = document.querySelector('button[type=button]')
  let conInputs = document.querySelectorAll('input')

  undo.addEventListener('click', () => {
    conInputs.forEach(input => input.value = '');
  })
}

let undoForm = (array, page) => {
  if(!array.length) {
    let undoModal = document.getElementsByTagName('body').innerHTML(`
      <p id="no-data"> It appears that there is no data to undo? </p>
    `)
  }

  array = []

  return page
}

let checkValue = (arrStrValue) => {
  if (arrStrValue == '') {
    arrStrValue = 'Enter input data here'
    return arrStrValue
  }

  return arrStrValue
}
