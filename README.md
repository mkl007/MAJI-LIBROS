# MAJI-LIBROS

This is web application that allows the users read, upload and download books. The main feature on the app is that user are able to sale their books and buy.

# Project set up:

1. Clone the project:

   "git clone https://github.com/mkl007/MAJI-LIBROS.git"

2. inside of the main project folder install the dependencies:
   " npm i"

3. Instead of the file ¨example.env¨ create a ¨.env¨ file and follow the instructions below:

```javascript
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/MajiDB
JWT_PASS=mysecretpass
EMAIL_USER=<Replace with your email address>
EMAIL_PASS=<Replace with yor email's password or use password apps>
(to use password apps please follow the instructions on the link below)

```

[Guide to set up the password apps](https://www.google.com/search?sca_esv=1c3e42585d6876e1&sxsrf=ACQVn0_2ol-bUtx_xKMTkNcEKpvsN2RpcQ:1705968816918&q=contrase%C3%B1as+de+aplicaciones+gmail&tbm=vid&source=lnms&sa=X&ved=2ahUKEwjz-NCKnfKDAxUbRDABHaiyDMQQ0pQJegQICxAB&biw=1517&bih=674&dpr=0.9#fpstate=ive&vld=cid:91cd5943,vid:u3YIHs1Rx78,st:0)

4. Once all the steps above are done run
    "mongod" in the terminal to start the mongo server.
    "nodemon" in other terminal to start the backend server.

    If the connection is successful you'll see in console

    "Server start at port 3000
    Connected to DB"

5. In your Postman URL enter "http://localhost:3000/api/v1/register"
   In the Body enter:
   ```json
     {
    "fullname": "name",
    "email": "name@nama.com",
    "password": "name"
    }
   ```
 
 If succesfull an email confirmatio should be sent to your email. In case it doesnt work check the console error and solve the port issue. 
