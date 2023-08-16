const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");


// POST route for user registration
router.post("/register", async (req, res) => {
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(req.body.password, saltRounds);

        const Certification = {
            name: req.body.certificationName,
            auth_by: req.body.certificationAuthBy,
        };

        const Experience = {
            role: req.body.experienceRole,
            job_type: req.body.experienceJobType,
            company: req.body.experienceCompany,
            years: req.body.experienceYears,
        };

        const Education = {
            institute_name: req.body.educationInstitute,
            degree_name: req.body.educationDegree,
            years: req.body.educationYears,
            description: req.body.educationDescription,
        };

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            phone: req.body.phone,
            about: req.body.about,
            skills: req.body.skills,
            certifications: [Certification],
            experience: [Experience],
            education: [Education],
            pic: req.body.pic,
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while registering user" });
    }
});

module.exports = router;
