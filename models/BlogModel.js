
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    blog_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModel;