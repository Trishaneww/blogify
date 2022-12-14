const User = require('./User');
const Picture = require('./Picture');
const Comment = require('./Comment');
const Like = require('./Like');

User.hasMany(Picture, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Picture.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete:'CASCADE',
});

User.hasMany(Like,{
    foreignKey: 'user_id',
    onDelete:'CASCADE',
});

Like.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'CASCADE',
});

Picture.hasMany(Comment,{
    foreignKey: 'picture_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Picture, {
    foreignKey: 'picture_id',
    onDelete:'CASCADE',
});

Picture.hasMany(Like,{
    foreignKey: 'picture_id',
    onDelete: 'CASCADE',
});

Like.belongsTo(Picture, {
    foreignKey: 'picture_id',
    onDelete:'CASCADE',
});

module.exports = { User, Picture, Comment, Like };