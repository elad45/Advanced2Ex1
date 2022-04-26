
<h3>Requirements:</h3>

For running this project it's required to have Node.JS installed on your computer.
After that navigate to the project directory and run at the CMD the following commands:
### `npx create-react-app project_name`
where project_name is the project name you want to have and that's will be the name of the directory. This command will install some react realted files.

It's required to have react bootstrap files as well. please run the follwing command at the node_modules directory
### `npm install react-bootstrap bootstrap`

after it has finished, navigate back to project_name directory run
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.


How to use the project:

The project has 3 routes.
1) Login - http://localhost:3000
2) Register - http://localhost:3000/register
3) Chat - http://localhost:3000/chat

The project holds some hard-coded users.
each user has:
username and password: used for login
nickname: This is the name others identify you and used for adding contacts as well.

Once you login or register you will be logged to the user's chat related.

Please login to the following user:
username: Michael
password: abcde

This user has some hard-coded messages and contacts as required in the assignment requirements.


Some information for the Register page:
The page asks you for username, nickname, password, avatar.

- Username, nickname: Must be unique. In case you enter a username or nickname that's already in the system it will not let you use this names and ask you to change. (Be advised that there are some hard-coded users in the system which appear at the bottom of the README)

- Password: must contain at least 5 characters with at least one digit and one special character     (!@#$%^&*)

- Avatar: you can upload an avatar image from your computer. In case you don't upload any avatar it will use a default avatar.


Hard coded users:

