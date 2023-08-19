got to>> console.cloud.google.com
create a new project 
name it anything you want

and just click create 

open the side navigation bar 
got to > APIs and Servicer>Credentials 

click CreateCredentials >oAuthClientID

click Configure Consent Screen
User Type>> External 

App Info

Name 
usersupport email>> can use your email
no logo needed or you can add your logo file

leave the rest as it is 

fill in the Developer Contact Information 
email>> any email use the above one preferrable


save and continue

skip these --> scopes>> test users 

Now get on the dashboard >> on the OAuth consent screen and publish the app 
Push to production >> click confirm 


Go to Create credentials again chose 


got to OAuth client ID
choose web app


under the Authorized JS origins
add origin URL

it's going to be your localhost link 
http://localhost:3000/

click create 
now we have our client id and the client secret 
we don't need secret 
we're done now 
