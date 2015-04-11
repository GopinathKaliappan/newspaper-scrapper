var feed = require("feed-read");
var redis = require("redis");
var client = redis.createClient();

var medias = require('./config.js').medias;

var get_feed = function (media, rss_link, tags) {
    feed(rss_link, function (err, articles) {
        if (err) throw err;
        for (index in articles) {
            publish(media, articles[index].link, tags);
        }
    });
};

var publish = function (media, link, tags) {
    client.get("article:link:" + link, function (err, reply) {
        if (reply === null) {
            console.log("article", link);
            client.set("article:link:" + link, link);
            client.publish("article:publish", JSON.stringify({
                media: media,
                link: link,
                tags: tags
            }));
        }
    });
}

var scrap = function () {

    for (var media_title in medias) {
        var feeds = medias[media_title].feeds;

        for (var feeds_index in feeds) {
            get_feed(media_title, feeds[feeds_index].link, feeds[feeds_index].tags)
        }
    }
}

var CronJob = require('cron').CronJob;
new CronJob('1 * * * *', function () {
    scrap();
}, null, true, 'Europe/Paris');
scrap();