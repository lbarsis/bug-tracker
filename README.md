# Bug Tracker
This Bug Tracker application is designed to allow users to manage and track issues found in multiple jobs and assign people to specific tasks. 

## Description
There are two tabs in the navigational tool bar: Projects, and Users. Projects is where most of the application lives, new projects can be added, tickets can be created and users can be assigned to each project. The Users tab is where team members can be added so they can later be assigned to various tickets. Each user can be selected to see various stats about how many tickets have been completed and how many are currently in progress.

## Installation
1. **Copy the repository:** 
```
git@github.com:lbarsis/bug-tracker.git
```
2. **Open up the terminal and clone the repository into the desired directory using:**
```
git clone git@github.com:lbarsis/bug-tracker.git
```
3. **Install bundles** 
```
bundle install
```
4. **Install npm** 
```
npm install
```
5. **Start Server** 
```
bundle exec rake server
```
6. **Run application using:** 
```
npm start
```

## Usage
1. **Projects**
The application will start on the Projects page with any existing data that may be in the server. To add a project to track issues, simply click the `New Project` button in the bottom right hand corner of the screen. This will display a form, fill out all the information and submit it, a new project will appear at the bottom. On the right side of every project is a `Create ticket` button, clicking this will display another form that allows a ticket to be created. To view the tickets associated with a job, click on the `Tickets` field for the desired job. A list of tickets will be displayed which each one can be edited or deleted. A new ticket can alos be created to add to the list.

2. **Users**
The Users tab is where all the users can be added or deleted. To view a user already on the system click any row to display the detailed information and ticket specific stats. A user can be created by clicking the `Add User` button on the top right of the screen. A new form will appear with input fields to fill out and submit. This user can also seen in the dropdown menu when creating or editing a ticket. 

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.