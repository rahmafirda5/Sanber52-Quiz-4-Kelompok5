*** Settings ***
Resource      ../pageObjects/base/base.robot
Variables   homepagelocators.yaml

Library    AppiumLibrary

*** Keywords ***
Verify homepage appears
   Wait Until Element Is Visible   ${logo_homepage}

   Click Sign In Button on Home page
   Click Element    l${signIn_button_homepage}