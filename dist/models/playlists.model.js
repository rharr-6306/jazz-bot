var mongoose = require('mongoose');
var playlistSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    playlists: {
        type: Array,
        required: false,
        "default": []
    }
});
module.exports = mongoose.model('Playlists', playlistSchema);