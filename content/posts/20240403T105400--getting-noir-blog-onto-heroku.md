+++
title = "Getting Noir Blog onto Heroku"
author = ["elliott williams"]
date = 2012-06-09T00:00:00-04:00
draft = false
+++

Continuing in my series of posts incase anything I'm doing breaks.

Fork [this on github](https://github.com/elliottw/Noir-blog). I forked it from someone else who put a procfile into the folder so it would work OTB on heroku.

Then the usual from [here](https://devcenter.heroku.com/articles/clojure/):

```nil
heroku create
git push heroku master
heroku ps:scale web=1
```
