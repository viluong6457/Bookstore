# IceTeaBook - The website for book shop 📘
Welcome to our IceTeaBook project ✌️

# 💻 Technology in Use
Our website uses the following technologies:
* Front-end: ReactJS, Bootstrap 5, SASS and many complementary libaries provided by npm.
* Back-end: NodeJS, ExpressJS.
* Database: SQL Server.
* Architecture Pattern: Model-View-Controller (MVC).

### Import init data
You can find the file "bookstore.sql" in the "Document" folder. Open MSSQL, paste all the script, and run it.

### Setup enviroment
In the "server" folder, create a ".env" file with the information needed to connect to the SQL Server:
```
DATABASE=BOOKSTORE
SERVER=<your username>
```
### Install Dependencies
Next, you would need to install all of dependencies for our project. 
 First, go to the "client" folder and install all of the dependencies by running the following command:
```bash
  cd client
  npm i
```
Next, open a new terminal window and go to the "server" folder:
```bash
  cd server
  npm i
```
You have now installed all the necessary dependencies. Let's get started!

## 🛠 Running IceTeaBook

In client folder
```bash
  npm start
```

In server folder:
```bash
  npm start
```

The ReactJS application will run on http://localhost:3000 and the server run on http://localhost:8080


Done! Good luck and have fun <3

