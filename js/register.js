/*
; =======================================================
; Title: register.js ( familysocial website - js folder )
; Authors: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 26 July 2020
; Description: JS Register Page file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

// The variables to pinpoint the form.
let regForm = document.getElementById('register-form')

// Make a variable that captures an empty object and others for the values.
let rFn = regForm.getElementById('rd-fn')
let rLn = regForm.getElementById('rd-ln')
let rAd = regForm.getElementById('rd-ad')
let rAp = regForm.getElementById('rd-ap')
let rCy = regForm.getElementById('rd-cy')
let rSt = regForm.getElementById('rd-st')
let rZp = regForm.getElementById('rd-zp')
let rEm = regForm.getElementById('rd-em')
let rUn = regForm.getElementById('rd-un')
let rPw = regForm.getElementById('rd-pw')
let rAm = regForm.getElementById('rd-am')
let rJn = regForm.getElementById('rd-jn')

// This variable stores the HTML value for the REGISTER page.
let pgRegister = document.getElementById('pgContent').innerHTML(`

  <div class="container">

    <form id="register-form">

      <div class="row">

        <div class="col-sm" id="col-one">

          <div class="form-group">
            <label for="fnLbl">FIRST NAME:</label>
            <input type="text" class="form-control" id="rd-fn" aria-describedby="fnHlp">
            <small id="fnHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="lnLbl">LAST NAME:</label>
            <input type="text" class="form-control" id="rd-ln" aria-describedby="lnHlp">
            <small id="lnHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="adLbl">STREET ADDRESS:</label>
            <input type="text" class="form-control" id="rd-ad" aria-describedby="adHlp">
            <small id="adHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="apLbl">APT / SUITE / PO BOX:</label>
            <input type="text" class="form-control" id="rd-ap" aria-describedby="apHlp">
            <small id="apHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>

        <div class="col-sm" id="col-two">

          <div class="form-group">
            <label for="cyLbl">CITY:</label>
            <input type="text" class="form-control" id="rd-cy" aria-describedby="cyHlp">
            <small id="cyHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="stLbl">STATE:</label>
            <input type="text" class="form-control" id="rd-st" aria-describedby="stHlp">
            <small id="stHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="zpLbl">ZIP CODE:</label>
            <input type="text" class="form-control" id="rd-zp" aria-describedby="zpHlp">
            <small id="zpHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="emLbl">EMAIL:</label>
            <input type="email" class="form-control" id="rd-em" aria-describedby="emHlp">
            <small id="emHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>

        <div class="col-sm" id="col-three">

          <div class="form-group">
            <label for="unLbl">USERNAME:</label>
            <input type="text" class="form-control" id="rd-un" aria-describedby="pwHlp">
            <small id="unHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="pwLbl">PASSWORD:</label>
            <input type="password" class="form-control" id="rd-pw" aria-describedby="pwHlp">
            <small id="pwHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="amLbl">ARE YOU A FAMILY ADMIN (Answer, yes or no):</label>
            <input type="text" class="form-control" id="rd-am" aria-describedby="amHlp">
            <small id="amHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label for="jnLbl">TRACK NEWLY JOINED FAMILY MEMBERS (Answer, yes or no):</label>
            <input type="text" class="form-control" id="rd-jn" aria-describedby="jnHlp">
            <small id="jnHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group" id="connect-buttons">

            <button type="button" class="btn btn-raised btn-info" data-toggle="modal" data-target="#undoModal">undo</button>
            <button type="button" onclick="setRegisterData(rFn, rLn, rAd, rAp, rCy, rSt, rZp, rEm, rUn, rPw, rAm, rJn);" class="btn btn-raised btn-info" id="submit-rf">submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <!-- Undo Form Modal ---------------------------------------------------------------------------------------------------------------------->

  <div class="modal fade" id="undoModal" tabindex="-1" role="dialog" aria-labelledby="undoModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="undoModalLabel">UNDO THIS ENTIRE FORM?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCEL</button>
          <button type="button" onclick="undoForm(regData, pgRegister);" class="btn btn-primary">UNDO FORM</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Separation between mobile and desktop ---------------------------------------------------->

  <div id="reg-one-mobile">

    <header id="mobile-header">

      <nav class="navbar navbar-expand-md">

        <!-- Brand -->
        <a id="logo" onclick="changePage(pgHome);" class="navbar-brand" href=""></a>

        <!-- Toggler/collapsing Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">

          <!-- Standard White navigation -->
          <ul class="nav nav-tabs">

            <li class="nav-item">
              <a id="logo" onclick="changePage(pgHome);" class="nav-link" href="#" ></a>
            </li>
            <li class="nav-item">
              <a id="home" onclick="changePage(pgHome);" class="nav-link active" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a id="about" onclick="changePage(pgAbout);" class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a id="app" onclick="changePage(pgApp);" class="nav-link" href="#">THE APP</a>
            </li>
            <li class="nav-item">
              <a id="contact" onclick="changePage(pgContact);" class="nav-link" href="#" >CONTACT</a>
            </li>
            <li class="nav-item">
              <button id="register" type="button" onclick="changePage(pgRegister);" class="btn btn-raised btn-lg btn-info">REGISTER</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <form id="conForm" action="">

      <h1>Register Information:</h1>

      <!-- One "tab" for each step in the form: -->
      <div class="tab">Name & Address:
        <p><input placeholder="First name..." id="rm-fn" oninput="this.className = ''"></p>
        <p><input placeholder="Last name..." id="rm-ln" oninput="this.className = ''"></p>
        <p><input placeholder="Street Address..." id="rm-ad" oninput="this.className = ''"></p>
        <p><input placeholder="Apt \ Suite \ PO Box..." id="rm-ap" oninput="this.className = ''"></p>
      </div>

      <div class="tab">Address Info (continued):
        <p><input type="text" placeholder="City..." id="rm-cy" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="State..." id="rm-st" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Zip Code..." id="rm-zp" oninput="this.className = ''"></p>
        <p><input type="email" placeholder="Email..." id="rm-em" oninput="this.className = ''"></p>
      </div>

      <div class="tab">Additional Info:
        <p><input type="text" placeholder="Username..." id="rm-un" oninput="this.className = ''"></p>
        <p><input type="password" placeholder="Password..." id="rm-pw" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Family Admin (yes or no)..." id="rm-am" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Notify if Family joins (yes or no)..." id="rm-jn" oninput="this.className = ''"></p>
      </div>

      <div style="overflow:auto;">
        <div style="float:right;">
          <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
          <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
        </div>
      </div>

      <!-- Circles which indicates the steps of the form: -->
      <div style="text-align:center;margin-top:40px;">
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
      </div>
    </form>

  </div>

`)

let setRegisterData = (firstname, lastname, address, apt, city, state, zip, email, username, password, admin, join) => {

  // Object
  let regObj = {
    firstname: firstname.value,
    lastname: lastname.value,
    address: address.value,
    apt: apt.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    email: email.value,
    username: username.value,
    password: password.value,
    admin: admin.value,
    join: join.value
  }

  let registerOutput = document.getElementById('pgContent').innerHTML(`
    <div class="container">

      <div class="card">

        <div class="card-header">
          ${regObj.firstname}'s CONTACT OUTPUT DATA
        </div>

        <div class="card-body">

          <h5 class="card-title">REMINDER: This is a simulated database store</h5>

          <table class="table">

            <thead class="thead-dark">

              <tr>
                <th scope="col">FIELDS</th>
                <th scope="col">YOUR ENTRY</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th scope="row">FIRST NAME:</th>
                <td>${regObj.firstname}</td>
              </tr>
              <tr>
                <th scope="row">LAST NAME:</th>
                <td>${regObj.lastname}/td>
              </tr>
              <tr>
                <th scope="row">STREET ADDRESS:</th>
                <td>${regObj.address}</td>
              </tr>
              <tr>
                <th scope="row">APT / SUITE / PO BOX:</th>
                <td>${regObj.apt}</td>
              </tr>
              <tr>
                <th scope="row">CITY:</th>
                <td>${regObj.city}</td>
              </tr>
              <tr>
                <th scope="row">STATE:</th>
                <td>${regObj.state}</td>
              </tr>
              <tr>
                <th scope="row">ZIP CODE:</th>
                <td>${regObj.zip}</td>
              </tr>
              <tr>
                <th scope="row">EMAIL:</th>
                <td>${regObj.email}</td>
              </tr>
              <tr>
                <th scope="row">PASSWORD:</th>
                <td>${regObj.password}</td>
              </tr>
              <tr>
                <th scope="row">IS ADMIN:</th>
                <td>${regObj.admin}</td>
              </tr>
              <tr>
                <th scope="row">WILL TRACK JOINED MEMBERS:</th>
                <td>${regObj.join}</td>
              </tr>
            </tbody>
          </table>

          <a href="#" onclick="changePage(pgHome);" class="btn btn-primary">BACK TO HOME</a>
        </div>
      </div>
    </div>
  `)

  // Return a output webpage.
  return registerOutput
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
