const { User, UserCourse, Course } = require("../models");


const getCourses = async (req, res, _next) => {
    try {
        const { id } = req.params
        const courses = await UserCourse.findAll({
            include: {
                model: Course,

            },
            where: { idUser: id }
        })
        res.json(courses)
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

module.exports = {
    getCourses,
}