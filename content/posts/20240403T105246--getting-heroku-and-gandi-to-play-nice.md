+++
title = "Getting Heroku and Gandi to Play Nice"
author = ["elliott williams"]
date = 2012-05-09T00:00:00-04:00
draft = false
+++

in the command line:

```nil
$ heroku domains:add www.titlecase
$ heroku domains:add titlecase
```

and in gandi:

```nil
@ 10800 IN A 174.129.212.2
@ 10800 IN A 75.101.145.87
@ 10800 IN A 75.101.163.44
www 10800 IN CNAME titlecase.herokuapp.com.
```

notes:

Using Heroku's interface to change things, breaks things. Use the CLI. Be patient for changes to spread over the internet.
