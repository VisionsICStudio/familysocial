// Display the current tab
showRegTab(currentTab)

let showTab = (nxt) => {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName('tab')
  x[nxt].style.display = 'block'
  // ... and fix the Previous/Next buttons:
  if (nxt == 0) {
    document.getElementById('prevBtn').style.display = 'none'
  } else {
    document.getElementById('prevBtn').style.display = 'inline'
  }
  if (nxt == (x.length - 1)) {
    document.getElementById('nextBtn').innerHTML = 'Submit'
  } else {
    document.getElementById('nextBtn').innerHTML = 'Next'
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(nxt)
}

let nextPrev = (nxt) => {
  // This function will figure out which tab to display.
  var x = document.getElementsByClassName('tab')
  // Exit the function if any field in the current tab is invalid.
  if (nxt == 1 && !validateForm()) return false
  // Hide the current tab:
  x[currentTab].style.display = 'none'
  // Increase or decrease the current tab by 1.
  currentTab = currentTab + nxt
  // if you have reached the end of the form...
  if (currentTab >= x.length) {

    // Create variables to check if the current form is the right form.
    let regForm = document.getElementById('regForm')

    //...the form gets submitted.
    regForm.submit(regForm.addEventListener('submit', (e) => {

      // Prevent browser from refreshing the page.
      e.preventDefault()

      // Make a variable that captures an empty object and others for the values.
      let firstname = regForm.getElementById('firstnameInput')
      let lastname = regForm.getElementById('lastnameInput')
      let address = regForm.getElementById('addressInput')
      let apt = regForm.getElementById('aptInput')
      let city = regForm.getElementById('cityInput')
      let state = regForm.getElementById('stateInput')
      let zip = regForm.getElementById('zipInput')
      let email = regForm.getElementById('emailInput')
      let username = regForm.getElementById('addressInput')
      let password = regForm.getElementById('addressInput')
      let admin = regForm.getElementById('adminInput')
      let join = regForm.getElementById('joinInput')

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

      let mobileRegisterOutput = document.getElementById('pgContent').innerHTML(`
        <div class="container">

          <div class="card">

            <div class="card-header">
              ${frmObj.firstname}'s CONTACT OUTPUT DATA
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
      return mobileRegisterOutput
    }))

      // Submit the contact form.
      conForm.submit(conForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let firstname = conForm.getElementById('firstnameInput')
        let lastname = conForm.getElementById('lastnameInput')
        let email = conForm.getElementById('emailInput')
        let address = conForm.getElementById('addressInput')
        let apt = conForm.getElementById('aptInput')
        let city = conForm.getElementById('cityInput')
        let state = conForm.getElementById('stateInput')
        let zip = conForm.getElementById('zipInput')
        let primary = conForm.getElementById('primaryInput')
        let secondary = conForm.getElementById('secondaryInput')
        let time = conForm.getElementById('timeInput')

        let conObj = {
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

        let contactOutput = document.getElementById('pgContent').innerHTML(`

          <div class="container">

            <div class="card">

              <div class="card-header">
                ${conObj.firstname}'s CONTACT OUTPUT DATA
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
                      <td>${conObj.firstname}</td>
                    </tr>
                    <tr>
                      <th scope="row">LAST NAME:</th>
                      <td>${conObj.lastname}/td>
                    </tr>
                    <tr>
                      <th scope="row">EMAIL:</th>
                      <td>${conObj.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">STREET ADDRESS:</th>
                      <td>${conObj.address}</td>
                    </tr>
                    <tr>
                      <th scope="row">APT / SUITE / PO BOX:</th>
                      <td>${conObj.apt}</td>
                    </tr>
                    <tr>
                      <th scope="row">CITY:</th>
                      <td>${conObj.city}</td>
                    </tr>
                    <tr>
                      <th scope="row">STATE:</th>
                      <td>${conObj.state}</td>
                    </tr>
                    <tr>
                      <th scope="row">ZIP CODE:</th>
                      <td>${conObj.zip}</td>
                    </tr>
                    <tr>
                      <th scope="row">PRIMARY PHONE NUMBER:</th>
                      <td>${conObj.primary}</td>
                    </tr>
                    <tr>
                      <th scope="row">SECONDARY PHONE NUMBER:</th>
                      <td>${conObj.secondary}</td>
                    </tr>
                    <tr>
                      <th scope="row">TIME OF DAY SELECTED:</th>
                      <td>${conObj.time}</td>
                    </tr>
                  </tbody>
                </table>

                <a href="#" onclick="changePage(pgHome);" class="btn btn-primary">BACK TO HOME</a>

              </div>
            </div>
          </div>
        `)

        return contactOutput
      }))

  }
  // Otherwise, display the correct tab.
  showTab(currentTab)
}

let validateForm = () => {
  // This function deals with validation of the form fields.
  var x, y, i, valid = true
  x = document.getElementsByClassName('tab')
  y = x[currentTab].getElementsByTagName('input')
  // A loop that checks every input field in the current tab.
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field.
      y[i].className += ' invalid'
      // and set the current valid status to false.
      valid = false
    }
  }
  // If the valid status is true, mark the step as finished and valid.
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish'
  }

  // return the valid status.
  return valid
}

let fixStepIndicator = (nxt) => {
  // This function removes the "active" class of all steps.
  var i, x = document.getElementsByClassName('step')
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '')
  }
  //... and adds the "active" class to the current step.
  x[nxt].className += ' active'
}

let setDesktopOutputData = (form, dataObject) => {

  // Single out the contact form with an if statement.
  if(dataObject === connectObject) {

    let thisObject = connectObject

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
                  <td>${thisObject.firstname}</td>
                </tr>
                <tr>
                  <th scope="row">LAST NAME:</th>
                  <td>${thisObject.lastname}/td>
                </tr>
                <tr>
                  <th scope="row">EMAIL:</th>
                  <td>${thisObject.email}</td>
                </tr>
                <tr>
                  <th scope="row">STREET ADDRESS:</th>
                  <td>${thisObject.address}</td>
                </tr>
                <tr>
                  <th scope="row">APT / SUITE / PO BOX:</th>
                  <td>${thisObject.apt}</td>
                </tr>
                <tr>
                  <th scope="row">CITY:</th>
                  <td>${thisObject.city}</td>
                </tr>
                <tr>
                  <th scope="row">STATE:</th>
                  <td>${thisObject.state}</td>
                </tr>
                <tr>
                  <th scope="row">ZIP CODE:</th>
                  <td>${thisObject.zip}</td>
                </tr>
                <tr>
                  <th scope="row">PRIMARY PHONE NUMBER:</th>
                  <td>${thisObject.primary}</td>
                </tr>
                <tr>
                  <th scope="row">SECONDARY PHONE NUMBER:</th>
                  <td>${thisObject.secondary}</td>
                </tr>
                <tr>
                  <th scope="row">TIME OF DAY SELECTED:</th>
                  <td>${thisObject.time}</td>
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

  let currentObject = registerObject

  let thisRegisterOutput = document.getElementById('pgContent').innerHTML(`
    <div class="container">

      <div class="card">

        <div class="card-header">
          ${currentObject.firstname}'s REGISTER OUTPUT DATA
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
                <td>${currentObject.firstname}</td>
              </tr>
              <tr>
                <th scope="row">LAST NAME:</th>
                <td>${currentObject.lastname}/td>
              </tr>
              <tr>
                <th scope="row">STREET ADDRESS:</th>
                <td>${currentObject.address}</td>
              </tr>
              <tr>
                <th scope="row">APT / SUITE / PO BOX:</th>
                <td>${currentObject.apt}</td>
              </tr>
              <tr>
                <th scope="row">CITY:</th>
                <td>${currentObject.city}</td>
              </tr>
              <tr>
                <th scope="row">STATE:</th>
                <td>${currentObject.state}</td>
              </tr>
              <tr>
                <th scope="row">ZIP CODE:</th>
                <td>${currentObject.zip}</td>
              </tr>
              <tr>
                <th scope="row">EMAIL:</th>
                <td>${currentObject.email}</td>
              </tr>
              <tr>
              <th scope="row">USERNAME:</th>
              <td>${currentObject.username}</td>
            </tr>
              <tr>
                <th scope="row">PASSWORD:</th>
                <td>${currentObject.password}</td>
              </tr>
              <tr>
                <th scope="row">IS ADMIN:</th>
                <td>${currentObject.admin}</td>
              </tr>
              <tr>
                <th scope="row">WILL TRACK JOINED MEMBERS:</th>
                <td>${currentObject.join}</td>
              </tr>
            </tbody>
          </table>

          <a href="#" onclick="changePage(pgHome);" class="btn btn-primary">BACK TO HOME</a>

        </div>
      </div>
    </div>
  `)

  return thisRegisterOutput
}
