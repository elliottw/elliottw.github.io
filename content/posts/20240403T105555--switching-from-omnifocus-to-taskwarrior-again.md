+++
title = "Switching from Omnifocus to Taskwarrior, again"
author = ["elliott williams"]
date = 2012-03-09T10:55:00-05:00
draft = false
+++

The big reason why I've stuck with Omnifocus instead of switching was the fast entry of auto-completion. But after poking around with TW I found this [link](http://taskwarrior/wiki/1/Tab_Completion) that shows how to have auto-completion. The problem is that this doc told me to put task_completion.sh into this folder:

```nil
/etc/bash_completion.d
```

But I didn't have it. Anyway, I just did:

```nil
brew install task-completion
source /usr/local/etc/bash_completion
```

And everything works like a charm now.
