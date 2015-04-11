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
            var content = [];

            $('#articleBody p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content};
        }
    },
    "huffington-post": {
        feeds: [
            {link: 'http://www.huffingtonpost.fr/feeds/index.xml', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var content = [];

            $('#mainentrycontent p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content};
        }
    },
    "liberation": {
        feeds: [
            {link: 'http://liberation.fr.feedsportal.com/c/32268/fe.ed/rss.liberation.fr/rss/latest/', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var content = [];

            $('#article-body p').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content};
        }
    },
    "figaro": {
        feeds: [
            {link: 'http://feeds.lefigaro.fr/c/32266/f/438191/index.rss', tags: ['france']}
        ],
        scraper: function ($) {

            var title = $('article h1').text();
            var content = [];

            $('.fig-article-body').each(function (index) {
                var text = $(this).text();
                if (text.length < 3) return;
                content.push(text);
            });

            return {title: title, content: content};
        }
    },
};