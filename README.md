# Newspaper Scraper

This app is a sample projet to scrap newspaper websites using RSS feeds & phantomjs.
It's retrieve articles from RSS feeds and retrieves the content using phantomjs.

Content is injected into a MongoDB Database. A Redis channel is used to communicate between the RSS Scraper & Website Scraper

## Prerequisite

* A MongoDB server
* A redis server
* PhantomJS

## Usage

* git clone https://github.com/mywaystar/newspaper-scrapper.git
* cd newspaper-scrapper
* npm install
* node web_scrapper.js &
* node rss_scrapper.js

## Config

You can configure RSS feeds using the config.js file & adapt the phantomJS scrapper to other websites.

## Scrapped websites

* Le Monde
* Huffington Post
* Libération
* Figaro
* L'express
* Le parisien
* France TV
* Le point 
* Le nouvel obs
* Ouest France


