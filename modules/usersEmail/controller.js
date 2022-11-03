const userEmailModel = require("./model");
exports.addEmailOfUser = async (req, res) => {
  try {
    // Find user with email
    // If user found with this email. Then throw error
    // otherwise add new email

    const userWithSameEmail = await userEmailModel.findOne({
      where: {
        email: req.body.email,
      },
    });

    // user with email is  found.
    if (userWithSameEmail) {
      return res.status(400).json({
        message: "This email is already register,try with another one",
      });
    }
    const data = await userEmailModel.create(req.body);

    return res.status(200).send({
      status: true,
      message: "New email added successfully.",
      result: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
exports.emailListing = async (req, res) => {
  try {
    //find all emails
    const emails = await userEmailModel.findAll();
    if (emails) {
      return res.status(200).json({
        success: true,
        message: "Emails fetched successfully",
        result: {
          emails: emails,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong",
    });
  }
};
exports.deleteEmailOfUser = async (req, res) => {
  try {
    await userEmailModel.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send({
      status: true,
      message: "User Email deleted succesfully",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
