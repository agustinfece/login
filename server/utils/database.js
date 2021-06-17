import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'YOUR_PASSWORD', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
