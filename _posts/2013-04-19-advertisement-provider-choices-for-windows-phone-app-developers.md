---
layout: post
title: Advertisement provider choices for Windows Phone App developers
date: 2013-04-19 16:52
author: kanishk
comments: true
categories: [Windows Phone Development]
---
This post is now old and somewhat outdated. For an up to date list, kindly see <a href="http://superdevresources.com/list/?name=advertisement-providers" target="_blank">Advertisement Providers for Windows Phone and Windows Store Apps</a>. You can also find a detailed list of <a href="http://blog.superdevresources.com/pubcenter-alternatives-windows-phone/">pubCenter alternatives on Windows Phone</a>.

I have always been experimenting with different Advertisement providers and AdRotators in order to monetize my free apps on Windows Phone. Here is a list of all the Advertisement providers that claim to support windows phone apps (either via SDK or API) that I came across.

Also included is a list of ad-rotating libraries for Windows Phone. AdRotators can help you rotate ads in your apps from different providers and help you maximize your revenues.

<strong>Ad Providers</strong>
<ul>
	<li><a href="http://advertising.microsoft.com/mobile-apps">Microsoft PubCenter</a>  - Silverlight &amp; XNA SDK</li>
	<li><a href="http://www.adduplex.com?ref=wr9883">AdDuplex</a> - Silverlight &amp; XNA SDK</li>
	<li><a href="http://admob.com/">Google AdMob</a> - Silverlight only SDK</li>
	<li><a href="http://inner-active.com/">Inner-Active</a> - Silverlight &amp; XNA SDK</li>
	<li><a href="https://www.developer.nokia.com/Distribute/NAX/" target="_blank">Nokia Ad Exchange (NAX)</a> – Silverlight SDK</li>
	<li><a href="http://mobfox.com/">MobFox</a>  - Silverlight &amp; XNA SDK</li>
	<li><a href="http://www.smaato.com/">Smaato</a>  - Silverlight Only SDK</li>
	<li><a href="http://www.millennialmedia.com/">MillenialMedia</a> - Silverlight Only SDK</li>
	<li><a href="http://www.mobclix.com/developers.html" target="_blank">MobClix</a> - Claims SDK, but we couldn't find it</li>
	<li><a href="http://www.komlimobile.com/" target="_blank">Komli Mobile</a> - API, they have <a href="http://www.komlimobile.com/static/komli_static/windows_phone7_sdk" target="_blank">sample silverlight app</a> for Windows Phone which they call as SDK</li>
	<li><a href="http://adiquity.com/" target="_blank">AdIquity</a> - Claims to give <a href="http://adiquity.com/?page_id=6#apptable" target="_blank">API support</a> for windows phone</li>
	<li><a href="https://www.inmobi.com" target="_blank">InMobi</a> - Silverlight SDK and API - <a href="http://developer.inmobi.com/wiki/index.php?title=InMobi_Ad_SDK_for_Windows_Phone_7" target="_blank">Getting started guide</a>.</li>
	<li><a href="http://madvertise.com" target="_blank">masvertise</a> - Claims to give <a href="http://madvertise.com/en/publisher-developer/code-snippet-api/" target="_blank">API support</a> for Windows Phone</li>
	<li><a href="http://everbadge.com/" target="_blank">Everbadge - Mobile Affiliate Network</a> - Claims support for Windows Phone. We don't know if it offers an SDK or API.</li>
	<li><a href="http://smartadserver.com/" target="_blank">Smart Adserver</a> - Claims support for Windows Phone. We don't know if it offers an SDK or API.</li>
</ul>
Unfortunately there are very few providers (like pubCenter and AdDuplex) who have a very good and reliable SDK support as well as ad inventory for Windows Phone. Hopefully, soon we will see a lot other providers releasing stable SDKs for the Windows Phone platform. We will keep you  posted if we see anything new. Do let us know if there are any Ad providers that we might have missed.

<strong>AdRotators</strong>

1. <a href="http://wp7adrotator.codeplex.com/" target="_blank">Windows Phone 7 Ad Rotator</a>  (Silverlight + XNA) - Supports rotation between pubCenter, AdDuplex, AdMob, Inner-active, MobFox, Smaato and House Ads

2. <a href="http://wpunifiedad.codeplex.com/" target="_blank">Unified Ad control for Windows Phone</a> (Silverlight ) - Supports rotation between pubCenter, AdDuplex, AdMob, Inner-active, MobFox, Smaato, MillenialMedia and House Ads

<strong>Ads in KunRuch Creations apps</strong>

Microsoft’s PubCenter, <a href="http://www.adduplex.com?ref=wr9883">AdDuplex</a> and AdMob are the only providers that I am currently using in my ad-based FREE apps. I have written my own custom AdRotator for my apps, which also rotate through ads pulled from my azure backend and cross-promote my own apps.
