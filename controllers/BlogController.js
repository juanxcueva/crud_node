import BlogModel from "../models/BlogModel.js";

//Show all registers
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Show one register

export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                blog_id: req.params.id,
            }
        })
        res.json(blog[0]);
    } catch (error) {
        res.json({ message: error.message });

    }
}

//Create a register
export const createBlog = async (req, res) => {
    try {
        console.log(req.body);
        await BlogModel.create(req.body);
        res.json({ message: '!Registro Creado Correctamente!' })
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Update a register

export const updateRegister = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                blog_id: req.params.id,
            }
        });
        res.json({ message: 'Registro Actualizado Correctamente!' })
    } catch (error) {
        res.json({ message: error.message });
    }
}
//Delete a register


export const deleteRegister = async (req, res) => {
    try {
        BlogModel.destroy({
            where: { blog_id: req.params.id },
        })
        res.json({ message: 'Registro Eliminado Correctamente!' })
    } catch (error) {
        res.json({ message: error.message });

    }
}