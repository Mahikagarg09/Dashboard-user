const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");
const nodemailer = require('nodemailer');
const UserOTPVerification = require("../models/userOTPVerification");

const dotenv = require("dotenv");
dotenv.config();

const saltRounds = 10


// POST route for user registration
router.post("/register", async (req, res) => {
    try {
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

        const savedUser = await newUser.save()
            .then((result) => {
                sendOTPVerificationEmail(result, res)
            }).catch((err) => {
                console.log(err);
                res.json({
                    status: "FAILED",
                    message: "An error occured while saving user account!"
                })
            })

        // res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while registering user" });
    }
});

let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    secureConnection: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
    tls: {
        rejectUnauthorized: true,
    },
});

// send otp verification email
const sendOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        // mail options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Verify Your Email",
            html: `<div>
            <h5>Welcome to Oruphones
            <p>Enter the given <b>${otp}</b>in the app to verify your email adress and complete registration process
            <p>This code <b>expires in 1 hour</b></p>
            </div>`
        };
        // hash the otp
        const hashedOTP = await bcrypt.hash(otp, saltRounds);
        const newOTPVerification = await new UserOTPVerification({
            userId: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
        });
        // save the otp record
        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);
        res.json({
            status: "PENDING",
            message: "Verification OTP Email sent",
            data: {
                userId: _id,
                email,
            },
        });
    } catch (error) {
        res.json({
            status: "FAILED",
            message: error.message,
        });
    }
};

// verify otp email
router.post("/verifyOTP", async (req, res) => {
    try {
        let { userId, otp } = req.body;
        if (!userId || !otp) {
            throw Error("OTP Details are not found");
        } else {
            const UserOTPVerificationRecords = await UserOTPVerification.find({
                userId,
            });
            if (UserOTPVerificationRecords.length <= 0) {
                // no records found
                throw new Error(
                    "Account record does not found or has been verified already. Please signup or login"
                );
            } else {
                // user otp record exist
                const { expiresAt } = UserOTPVerificationRecords[0];
                const hashedOTP = UserOTPVerificationRecords[0].otp;
                if (expiresAt < Date.now()) {
                    // user otp has been expired
                    await UserOTPVerification.deleteMany({ userId });
                    throw new Error("Code has expired, please request again ");
                } else {
                    const validOTP = await bcrypt.compare(otp, hashedOTP);
                    if (!validOTP) {
                        // OTP is wrong
                        throw new Error("Invalid code. Please check your inbox");
                    } else {
                        // success
                        await User.updateOne({ _id: userId }, { verified: true });
                        await UserOTPVerification.deleteMany({ userId });
                        res.json({
                            status: "VERIFIED",
                            message: "User Email verified successfully",
                        });
                    }
                }
            }
        }
    } catch (error) {
        res.json({
            status: "FAILED",
            message: error.message,
        });
    }
});


module.exports = router;
