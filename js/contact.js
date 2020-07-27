/*
; =======================================================
; Title: contact.js ( familysocial website - js folder )
; Authors: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 26 July 2020
; Description: JS Contact Page file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

let contactForm = document.getElementById('contact-form')

let cFn = contactForm.getElementById('cd-fn')
let cLn = contactForm.getElementById('cd-ln')
let CEm = contactForm.getElementById('cd-em')
let cAd = contactForm.getElementById('cd-ad')
let cAp = contactForm.getElementById('cd-ap')
let cCy = contactForm.getElementById('cd-cy')
let cSt = contactForm.getElementById('cd-st')
let cZp = contactForm.getElementById('cd-zp')
let cPr = contactForm.getElementById('cd-pr')
let cSc = contactForm.getElementById('cd-sc')
let cTm = contactForm.getElementById('cd-tm')

// This variable stores the HTML value for the CONTACT page.
let pgContact = document.getElementById('pgContent').innerHTML(`

  <div id="contact-desktop">

    <div class="container">

      <form id="contact-form">

        <div class="row">

          <div class="col-sm" id="contact-col-one">

            <div class="form-group">
              <label for="fnLbl">FIRST NAME/label>
              <input type="text" class="form-control" id="cd-fn" aria-describedby="fnHlp">
              <small id="fnHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="lnLbl">LAST NAME</label>
              <input type="text" class="form-control" id="cd-ln" aria-describedby="lnHlp">
              <small id="lnHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="emLbl">EMAIL</label>
              <input type="email" class="form-control" id="cd-em" aria-describedby="emHlp">
              <small id="emHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="adLbl">STREET ADDRESS</label>
              <input type="text" class="form-control" id="cd-ad" aria-describedby="adHlp">
              <small id="adHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>

          <div class="col-sm" id="contact-col-two">

            <div class="form-group">
              <label for="apLbl">APT / SUITE / PO BOX</label>
              <input type="text" class="form-control" id="cd-ap" aria-describedby="apHlp">
              <small id="apHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="cyLbl">CITY</label>
              <input type="text" class="form-control" id="cd-cy" aria-describedby="cyHlp">
              <small id="cyHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="stLbl">STATE</label>
              <input type="text" class="form-control" id="cd-st" aria-describedby="stHlp">
              <small id="stHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="zpLbl">ZIP CODE</label>
              <input type="text" class="form-control" id="cd-zp" aria-describedby="zpHlp">
              <small id="zpHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>

          <div class="col-sm" id="contact-col-three">

            <div class="form-group">
              <label for="prLbl">PRIMARY PHONE NUMBER</label>
              <input type="text" class="form-control" id="cd-pr" aria-describedby="prHlp">
              <small id="prHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="scLbl">SECONDARY PHONE NUMBER</label>
              <input type="text" class="form-control" id="cd-sc" aria-describedby="scHlp">
              <small id="scHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="tmLbl">BEST AVAILABLE CONTACT TIME (one entry of either morning, afternoon, or night):</label>
              <input type="text" class="form-control" id="cd-tm" aria-describedby="tmHlp">
              <small id="tmHlp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <div class="form-group" id="contact-button-bank">
              <button type="button" onclick="clearForm();" class="btn btn-primary">CLEAR FORM</button>
              <button type="submit" onclick="setContactData(cFn, cLn, cEm, cAd, cAp, cCy, cSt, cZp, cPr, cSc, cTm);" class="btn btn-raised btn-info" id="submit-conform">SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Undo Desktop Contact Modal ------------------------------------------------------------------------------------->

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
          <button type="button" onclick="undoForm(conData, pgContact);" class="btn btn-primary">UNDO FORM</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Separation between contact mobile and desktop --------------------------------------------------------------------------->

  <div id="contact-mobile">

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
              <a id="register" type="button" onclick="changePage(pgRegister);" class="btn btn-raised btn-lg btn-info">REGISTER</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <form id="conForm" action="">

      <h1>Contact Information:</h1>

      <!-- One "tab" for each step in the form: -->
      <div class="tab">Formal Name:
        <p><input type="text" placeholder="First name..." id="cm-fn" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Last name..." id="cm-ln" oninput="this.className = ''"></p>
        <p><input type="email" placeholder="Email..." id="cm-em" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Street Address..." id="cm-ad" oninput="this.className = ''"></p>
      </div>

      <div class="tab">Address Info:
        <p><input type="text" placeholder="Apt \ Suite \ PO Box..." id="cm-ap" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="City..." id="cm-cy" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="State..." id="cm-st" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Zip Code..." id="cm-zp" oninput="this.className = ''"></p>
      </div>

      <div class="tab">Additional Info:
        <p><input type="text" placeholder="Primary Phone Number..." id="cm-pr" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Secondary Phone Number..." id="cm-sc" oninput="this.className = ''"></p>
        <p><input type="text" placeholder="Best time to reach you..." id="cm-tm" oninput="this.className = ''"></p>
        <p><label id="time-day"> options: (Morning, Afternoon, Night)</label>
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

let setContactData = (firstname, lastname, email, address, apt, city, state, zip, primary, secondary, time) => {

  let thisContactObject = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    address: address.value,
    apt: apt.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    primary: primary.value,
    secondary: secondary.value,
    time: time.value
  }

  let thisContactOutput = document.getElementById('pgContent').innerHTML(`

    <div class="container">

      <div class="card">

        <div class="card-header">
          ${thisObject.firstname}'s CONTACT OUTPUT DATA
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
                <td>${thisContactObject.firstname}</td>
              </tr>
              <tr>
                <th scope="row">LAST NAME:</th>
                <td>${thisContactObject.lastname}/td>
              </tr>
              <tr>
                <th scope="row">EMAIL:</th>
                <td>${thisContactObject.email}</td>
              </tr>
              <tr>
                <th scope="row">STREET ADDRESS:</th>
                <td>${thisContactObject.address}</td>
              </tr>
              <tr>
                <th scope="row">APT / SUITE / PO BOX:</th>
                <td>${thisContactObject.apt}</td>
              </tr>
              <tr>
                <th scope="row">CITY:</th>
                <td>${thisContactObject.city}</td>
              </tr>
              <tr>
                <th scope="row">STATE:</th>
                <td>${thisContactObject.state}</td>
              </tr>
              <tr>
                <th scope="row">ZIP CODE:</th>
                <td>${thisContactObject.zip}</td>
              </tr>
              <tr>
                <th scope="row">PRIMARY PHONE NUMBER:</th>
                <td>${thisContactObject.primary}</td>
              </tr>
              <tr>
                <th scope="row">SECONDARY PHONE NUMBER:</th>
                <td>${thisContactObject.secondary}</td>
              </tr>
              <tr>
                <th scope="row">TIME OF DAY SELECTED:</th>
                <td>${thisContactObject.time}</td>
              </tr>
            </tbody>
          </table>

          <a href="#" onclick="changePage(pgHome);" class="btn btn-primary">BACK TO HOME</a>

        </div>
      </div>
    </div>
  `)

  return thisContactOutput
}
