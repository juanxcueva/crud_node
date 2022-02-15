import  {Sequelize}  from "sequelize";

const db=new Sequelize('crud_basico','postgres','0000',{
    host: 'localhost',
    dialect:'postgres',
});


export default db;