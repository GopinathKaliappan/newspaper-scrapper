module.exports.medias = {
    "le-monde": {
        feeds: [
            {link: 'http://www.lemonde.fr/rss/une.xml', tags: ['global']},
            {link: 'http://www.lemonde.fr/m-actu/rss_full.xml', tags: ['global']},
            {link: 'http://www.lemonde.fr/afrique/rss_full.xml', tags: ['africa']},
            {link: 'http://www.lemonde.fr/ameriques/rss_full.xml', tags: ['america']},
            {link: 'http://www.lemonde.fr/argent/rss_full.xml', tags: ['money']},
            {link: 'http://www.lemonde.fr/culture/rss_full.xml', tags: ['culture']},
            {link: 'http://www.lemonde.fr/technologies/rss_full.xml', tags: ['tech']}
        ],
        scraper: function ($) {

            var title = $('.article_normal h1').text();
            var img = $(".illustration_haut img").attr("src");
            var content = [];

            $('#articleBody p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "huffington-post": {
        feeds: [
            {link: 'http://www.huffingtonpost.fr/feeds/index.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $(".img-caption img").attr("src");
            var content = [];

            $('#mainentrycontent p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "liberation": {
        feeds: [
            {link: 'http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/latest/', tags: ['france']},
            {link: 'http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/13/', tags: ['economy']},
            {link: 'http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/10/', tags: ['world']}

        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $(".img-caption img").attr("src");
            var content = [];

            $('#article-body p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "figaro": {
        feeds: [
            {link: 'http://feeds.lefigaro.fr/c/32266/f/438191/index.rss', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $(".banner-headline img").attr("src");
            var content = [];

            $('.fig-article-body').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "l-express": {
        feeds: [
            {link: 'http://www.lexpress.fr/rss/alaune.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $(".ouverture img").attr("src");
            var content = [];

            $('.article_container p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "parisien": {
        feeds: [
            {link: 'http://www.leparisien.fr/actualites-a-la-une.rss.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $("article figure img").attr("src");
            var content = [];

            $('#contTexte p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "france-tv": {
        feeds: [
            {link: 'http://www.francetvinfo.fr/titres.rss', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $("article figure img").attr("src");
            var content = [];

            $('#middleColumn p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "le-point": {
        feeds: [
            {link: 'http://www.lepoint.fr/rss.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $("article figure img").attr("src");
            var content = [];

            $('.articleBody p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "le-nouvel-observateur": {
        feeds: [
            {link: 'http://rss.nouvelobs.com/c/32262/fe.ed/tempsreel.nouvelobs.com/rss.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $("article .ultimedia_image img").attr("src");
            var content = [];

            $('.obs-article-body p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    },
    "ouest-france": {
        feeds: [
            {link: 'http://www.ouest-france.fr/rss.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var img = $("article figure img").attr("src");
            var content = [];

            $('.article-content p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content, img: img};
        }
    }
};