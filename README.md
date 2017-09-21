# **[Acebusters Landing Page](http://acebusters.com/)**
---

Installation
------------
Install ruby and latest version [jekyll](https://jekyllrb.com/) from your local machine.

After a successful installation run this command in your terminal:

```bash
bundle exec jekyll serve
```

For build and watch next time you can use only
```bash
jekyll serve
```

More information can be found in the [jekyll official documentation](https://jekyllrb.com/docs/home/)

---

Project Structure
-----------------

├── [_data](./_data) *--- folder with languales data*
│   ├── {langname_folder} *--- folder for a specific language*
│   │   └── {filename}.yml *--- data for {langname_folder} *
│   └── {filename}.yml *--- common data file*
├── [_includes](./_includes) *--- reused parts*
│   └── {includes_name}.html
├── [_layouts](./_layouts) *--- templates for pages*
│   └── {layout_name}.html
├── [_posts](./_posts)
│   ├── {langname_folder} *--- folder for a specific language*
│       └──── {YYYY-MM-DD-filename}.md *--- bounties content  for {langname_folder}*
│   └── {YYYY-MM-DD-filename}.md *--- bounties content for default lang*
├── [_terms](./_terms)
│   ├── {langname_folder} *--- folder for a specific language*
│   │   └── terms.md *--- terms content for {langname_folder}*
│   └── [terms.md](./_terms/terms.md) *--- terms content for default lang*
├── [clips](./clips) *--- media resourses*
├── [css](./css) *--- all styles*
│   └── styles.scss *--- main styles file, autocompiled with jekyll*
├── [files](./files) *--- docs and other*
├── [fonts](./fonts) *--- all fonts*
├── [img](./img) *--- image resources*
└── js  *--- all scripts*
    └─── {script_name}.js
 ├── [_config.yml](./_config.yml) *--- jekyll configuring*
├── [index.html](./index.html) *--- jekyll configuring*
 ├── {pagename}.md
 ├── [CNAME](./CNAME) *--- canonical name*
├── [Gemfile](./Gemfile) *--- gem dependencies*
├── [README.md](./README.md) *--- project info file*

---

SEO info
-----------------

All auxiliary elements for SEO, should be specified in the header of the file with the extension * .md, or in the [index.html](./index.html)

For all other html files, other than [index.html](./index.html), this method does not work

**Examples:**
```bash
index.html

---
title: Acebusters - Poker on the Ethereum blockchain
description: Join Acebusters now! The decentralized economy to make online poker profitable, fair and secure. Poker on the Ethereum blockchain. Ace or bust!
image: AB_twitter_card@2x.png
---
```
```bash
bounties.md

---
title: Acebusters - Bounties
description: Acebusters - Earn yourself some Nutz with bug reporting, translations, community management or with our referral program.
image: AB_facebook_bounties.jpg
---
```
---

 Posts Bounty
-------------

For the bounty, a unique structure was created, with which you can easily add new blocks.

> In order to add a new block, you need to create a file in the [_posts](./_posts) directory in the format YYYY-MM-DD-filename.md for the desired language and specify the necessary options in the header.
>
> If you need to add for the default language, you must create the files in the root [_posts](./_posts).

This pages will help a lot with SEO


| Option | Value | Default | Info | SEO |
|:-----------:|:-------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|:---:|
| layout | someLayout | bounty-item | layout for content |  |
| title | Some title | Acebusters - Poker on the Ethereum blockchain | title page | yes |
| subtitle | Some subtitle |  | optional |  |
| description |  | Join Acebusters now! The decentralized economy to make online poker profitable, fair and secure. Poker on the Ethereum blockchain. Ace or bust! | optional | yes |
| order | 1 |  | determines the display order on the page /bounties |  |
| categories | someCategory |  | generate category for blocks |  |
| permalink | /:categories/:title |  | sorting same caterogies and generate unique URL for block. where *:title* is {filename} in `YYYY-MM-DD-filename.md` Example: `siteurl/bounty/affiliate-bounty` | yes |
| type | content-black | content-magenta | optional using for styling block color content-white content-black content-magenta content-purple |  |
| lang | ru | en | use only for `_posts/{langname_folder}/YYYY-MM-DD-filename.md` |  |
| image | imagePath | `AB_facebook_OG_Crowdsale.png` | optional | yes |

<br>

> use `<!--more-->` if you want to hide next text in not detail bounty page
> text after `<!--more-->` will shown on detail page

---

Markdown content
-------------

For fast filling and convenience, *.md was used, so you do not need to fix it again in html

*.md files are built on the basis of quick filling, if you have not worked with it yet, you can [see the documentation](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
