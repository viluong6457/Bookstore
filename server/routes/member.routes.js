const express = require("express");
const member = require("../controllers/member.controllers.js");

module.exports = app => {
    router = express.Router();

    router.get("/", member.getList);  // example localhost:8080/api/order
    router.get("/:id", member.getMember); //example localhost:8080/api/order/10001
    router.get("/", member.searchMembers);
    router.post("/", member.addMember);
    router.put("/:id", member.updateMember);
    router.delete("/:id", member.deleteMember);
    app.use('/api/member', router);
} 