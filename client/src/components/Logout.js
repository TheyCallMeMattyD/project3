// import React, { useRef } from "react";
// import API from "../utils/API";


// const express = require("express");

// const app = express();

function Logout () {

     // app.get('/logout', function(req, res){
     //      req.logout();
     //      res.redirect('/');
     //    });
     localStorage.clear();
     window.location.href = '/';
}

export default Logout;