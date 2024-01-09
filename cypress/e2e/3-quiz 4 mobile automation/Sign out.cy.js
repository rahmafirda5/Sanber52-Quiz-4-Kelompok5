describe('Sign Out', () => {
    it('should allow the user to signing out', () => {
      // Visit the Flight App
      cy.visit('https://drive.google.com/file/d/1EBSomgXH_MmVVtNVksPJqq8yO-GJdevc/view');
  
      // Assuming there's a link or button to navigate to the logout page
      cy.contains('Sign Out').click();
  
      // Assuming there are logout form fields
      cy.get('#email').type('your@email.com');
      cy.get('#pass').type('yourpassword');
  
      // Assuming there's a logout button
      cy.get('button[title="Sign Out"]').click();
    });
  });  

// *** Settings ***
// Library           AppiumLibrary

// *** Variables ***
// ${REMOTE_URL}     http://localhost:4723/wd/hub
// ${PLATFORM_NAME}  Android
// ${PLATFORM_VERSION}  10.0
// ${DEVICE_NAME}    Your_Device_Name
// ${APP_PACKAGE}    com.example.flightapp
// ${APP_ACTIVITY}   .MainActivity

// *** Test Cases ***
// Open Flight App
//     Open Application    ${REMOTE_URL}    platformName=${PLATFORM_NAME}    platformVersion=${PLATFORM_VERSION}    deviceName=${DEVICE_NAME}    appPackage=${APP_PACKAGE}    appActivity=${APP_ACTIVITY}

// Search Flights
//     Input Text    xpath=//input[@id='searchInput']    Los Angeles
//     Click Element    xpath=//button[@id='searchButton']

// Close Flight App
//     Close Application

