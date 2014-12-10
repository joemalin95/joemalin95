---
layout: post
title: Showing formatted text in a TextBlock in Windows Phone apps
date: 2013-04-19 17:08
author: kanishk
comments: true
categories: [Windows Phone Development]
---
Here is a quick tip on Windows Phone development. If you want to show formatted text i.e. text having multiple styles or colors in a single line in your windows phone apps then you can easily do so with a TextBlock. Example below shows how you can show a normal text along with a highlighted text and a bold text all in the same line in a TextBlock. Text Wrapping also comes for free as it is handled by TextBlock itself.

Here is the XAML:
<p align=left>
<script src="https://gist.github.com/kanishkkunal/5561037.js"></script>
</p>

Here is the result:

<a href="http://kunruchcreations.com/wp-content/uploads/2012/08/FormattedTextWindowsPhone.png"><img class="aligncenter size-full wp-image-920" title="Formatted Text in WindowsPhone App" alt="Formatted Text in WindowsPhone App" src="http://kunruchcreations.com/wp-content/uploads/2012/08/FormattedTextWindowsPhone.png" width="456" height="223" /></a>

In case you want databinding to work with the multiple formatted text runs then kindly see the following link: <a href="http://stackoverflow.com/questions/5253622/databinding-textblock-runs-in-silverlight-wp7">http://stackoverflow.com/questions/5253622/databinding-textblock-runs-in-silverlight-wp7</a>
