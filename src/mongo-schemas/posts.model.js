/**
 * Created by mingxuanli on 28/9/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsModelSchema = new Schema({
    Id: Number,
});

const PostsModel = mongoose.model('Posts', PostsModelSchema);

module.exports = PostsModel;