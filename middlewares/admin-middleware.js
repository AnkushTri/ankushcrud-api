
const AdminMidlleware = async (req, res, next) => {
    try {
        // console.log(req.user)
        const Admin = req.user.isAdmin;
        if (!Admin) {
            return res.status(200).json({ msg: "Accsss denied unauthorized user" });
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = AdminMidlleware;