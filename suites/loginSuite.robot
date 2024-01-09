*** Settings ***
Resource      ../pageObjects/base/base.robot
Resource      ../pageObjects/LoginPageObject/loginpage.robot
Suite Setup   Open Flight application
Test Setup
Suite Teardown  Close Flight application
Test Teardown


*** Variables ***
${VALID_EMAIL}       testquiz@sanber.com
${VALID_PASSWORD}    twk123

*** test case ***
User should be able to login with valid credentials
Open application
    # Step 1: Open application
    Open Flight application
    # Step 2: Verify home page appears
    Verify home page appears
    # Step 3: Click sign in button on home page
    Click sign in button on home page
    # Step 4: Verify login page appears
    Verify login page appears
    # Step 5: Input username
    Input username email on login page    ${VALID_EMAIL}
    # Step 6: Input password
    Input password on login page   ${VALID_PASSWORD}
    # Step 7: Click sign in button on login page
    Click sign in button on login page
    # Step 8: verify user is logged in
    # Step 9: Close application
    Close Flight application

User should not able to login with invalid credentils


