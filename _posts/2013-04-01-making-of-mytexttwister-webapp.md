---
layout: post
title: Making of MyTextTwister webapp
date: 2013-04-01 16:15
author: kanishk
comments: true
categories: [Web Development]
---
As you may already know, today I launched a webapp/Facebook app for my most popular app <a href="http://apps.kunruchcreations.com/mytexttwister/" target="_blank">MyTextTwister</a>. You can read more about it in the <a href="http://kunruchcreations.com/introducing-mytexttwister-webapp-with-facebook-integration/" target="_blank">product announcement</a> post I made on KunRuch Creation’s site. Also don’t miss some of the April Fool prank ideas I posted there. <img class="wlEmoticon wlEmoticon-smile" alt="Smile" src="http://kanishkkunal.kunruchcreations.com/wp-content/uploads/sites/2/2013/04/wlEmoticon-smile11.png" />

<a href="http://kanishkkunal.kunruchcreations.com/wp-content/uploads/sites/2/2013/04/MyTextTwisterWebApp.png"><img class="aligncenter size-full wp-image-240" alt="MyTextTwisterWebApp" src="http://kanishkkunal.kunruchcreations.com/wp-content/uploads/sites/2/2013/04/MyTextTwisterWebApp.png" width="715" height="414" /></a>
<h3>Why webapp?</h3>
The top user request for my apps has always been the ask to make it available on other platforms like iOS, android etc. Being a Windows Phone lover at heart, I could never find the motivation to do so. Moreover setting up a development environment for all the different platforms is big pain. Making a webapp somewhat solves the issue as a webapp can be accessed from any web capable device. Though it creates another problem i.e. making your app cross browser compatible. Nonetheless, I believe webapps have bright future specially when there are more and more app development environments coming up.
<h3>Why Facebook Integration?</h3>
MyTextTwister app has always been a social category app as it allows you to enhance your texts in your social communication (don’t use it for business purpose <img class="wlEmoticon wlEmoticon-winkingsmile" alt="Winking smile" src="http://kanishkkunal.kunruchcreations.com/wp-content/uploads/sites/2/2013/04/wlEmoticon-winkingsmile1.png" />). Since WindowsPhone has great social experience integrated right into its heart, I always found it unnecessary to integrate my apps also with social sites. However, I still get a high number of requests for integrating Facebook in the app.

I decided to make use of Facebook integration by providing some value adds to what the app already offers. Hence, as you can see, the webapp offers not only sharing of your enhanced texts, but also advises you of your friends’ upcoming birthdays and few belated ones too. If these new features are well received then I plan to bring them to the native Windows Phone and Windows 8 apps too.
<h3>Technologies I have used for this webapp</h3>
Before I end, let me list down all the technologies I happened to use in some way or the other while making this webapp. Let me know if more detail is required regarding how I used them or if you have any comments on alternatives you may have used.

1. <a href="http://www.windowsazure.com" target="_blank"><strong>Windows Azure</strong></a> – For hosting the webapp. One of my favourite features it has is its capability to deploy from my BitBucket repository. <a href="http://fabriccontroller.net/blog/posts/continuous-deployment-with-windows-azure-websites-and-bitbucket/" target="_blank">Read more here</a>.

2. <a href="https://bitbucket.org/" target="_blank"><strong>Bitbucket</strong></a> – Provides unlimited private Git or Mercurial repositories. (I use Git)

3.  <a href="http://www.asp.net/mvc" target="_blank"><strong>ASP.NET MVC</strong></a> – For building the webapp and connecting with Facebook. You can read <a href="http://www.asp.net/mvc/tutorials/mvc-4/aspnet-mvc-facebook-birthday-app" target="_blank">this great tutorial</a> on using ASP.NET MVC Facebook libraries. You can also check out <a href="http://facebooksdk.net/" target="_blank">facebooksdk.net</a>

4. <a href="http://getbootstrap.com" target="_blank">Bootstrap</a> – For doing a great cross-plat web development. I have used Bootstrap in both <a href="http://www.mytexttwister.com/" target="_blank">mytexttwister.com</a> main page and the webapp.

5. <a href="http://jquery.com/" target="_blank"><strong>JQuery</strong></a> – Powerful JavaScript library for dynamic client side scripting and making AJAX calls in the webapp
<h3>What next?</h3>
You will be seeing more webapps (with or without Facebook integration) from me in near future (Of course along-with a Windows Phone and Windows8 native app). Also do checkout <a href="http://www.scirra.com/" target="_blank">Scirra</a>, for an awesome HTML5 game maker, which I am <a href="http://www.scirra.com/arcade/addicting-action-games/3422/helicopter-run" target="_blank">experimenting</a> with currently.
