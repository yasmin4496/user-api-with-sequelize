const userDataModel = require("./model");
exports.addDataOfUser = async (req, res) => {
  try {
    // Find user with email and phone number
    // If user found with this email and phone number. Then throw error
    // otherwise add new data

    const userWithSameEmail = await userDataModel.findOne({
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
    const userWithSamePhoneNo = await userDataModel.findOne({
      where: { phone_no: req.body.phone_no },
    });
    // user with same phone number is  found.
    if (userWithSamePhoneNo) {
      return res.status(400).json({
        message: "This Phone Number is already register,try with another one",
      });
    }
    const data = await userDataModel.create(req.body);

    return res.status(200).send({
      status: true,
      message: "New data added successfully.",
      result: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
exports.getAllDataOfUser = async (req, res) => {
  try {
    //find all data
    const userData = await userDataModel.findAll();
    if (userData)
      return res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        result: {
          userData: userData,
        },
      });
    else
      return res.status(400).json({
        success: false,
        message: "data not found",
      });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong",
    });
  }
};
exports.deleteDataOfUser = async (req, res) => {
  try {
    await userDataModel.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send({
      status: true,
      message: "User Data deleted succesfully",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
