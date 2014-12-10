---
layout: post
title: Running WordPress Multisite on Windows Azure Virtual Machines
date: 2013-05-18 04:18
author: kanishk
comments: true
categories: [Windows Azure, WordPress]
---
Recently I moved all my WordPress websites (including this site) to <strong>Azure Virtual Machine</strong> and I am pretty happy with the consequences. Compared to my earlier hosting provider, my sites are now <strong>faster</strong> and have higher <strong>availability </strong>thanks to Azure's solid infrastructure.
<h3>Azure Web Sites</h3>
When I took the decision to move my WordPress sites to Windows Azure and started hunting for various possibilities, the one that came as the first choice was to make use of the <a title="Web Sites by Windows Azure" href="http://www.windowsazure.com/en-us/home/scenarios/web-sites/" target="_blank">Web Sites </a>feature offered by Azure. As I was already hosting a custom made ASP.NET website <a href="http://www.mytexttwister.com/">http://www.mytexttwister.com/</a> (also accessible via <a href="http://mytexttwister.azurewebsites.net/">http://mytexttwister.azurewebsites.net/</a>) on Azure WebSites, I was pretty happy with its performance, availability and options of scalability.

In fact, Windows Azure makes it very easy way to create a WordPress site. You can read the quick tutorial below by Azure team on how to do it. Your site will be read in only few minutes.

<a title="Create a WordPress web site from the gallery in Windows Azure" href="http://www.windowsazure.com/en-us/develop/php/tutorials/website-from-gallery/" target="_blank">Create a WordPress web site from the gallery in Windows Azure</a>

However, if you go via this approach you would need to be aware of the following:

<strong>ClearDB</strong> : WordPress needs a MySQL database which is not provided by Azure by default. Azure uses a third party partner called <a title="ClearDB" href="https://www.cleardb.com/store/azure" target="_blank">ClearDB </a>for this. By default ClearDB gives a MySQL DB of 20MB with max allowed connection of 4 for free. In order to increase this limit, you must upgrade to a premium plan. You can check out the prices at <a title="ClearDB Azure pricing" href="https://www.cleardb.com/store/azure" target="_blank">ClearDB's portal</a>. If you go with the free plan, it may not be suitable for a real production website with moderate traffic and people have had <a title="WordPress Database Error on Azure" href="http://www.schwammysays.net/wordpress-database-error-on-azure/" target="_blank">problems in the past</a> with this.

You can always go for the upgrade of ClearDB's plan but I personally found their prices to be bit high, especially compared to Azure's SQL database pricing. Also, since my intention was to create a Wordpress multi-site which would certainly require me to have a DB of higher size I decided to avoid ClearDB altogether.

Another option which I evaluated was to make WordPress work with SQL database (instead of MySQL) provided by Azure. Few brave folks have experimented this in the past and have made <a title="WordPress with SQL Azure" href="http://mikaelkoskinen.net/wordpress-sql-azure/" target="_blank">how-to article </a>available. However I would discourage this approach as updating to latest version of WordPress may not be possible until someone makes the latest version workable with SQL. Running an up-to-date WordPress is an absolute must for security reasons.
<h3><strong>Azure Virtual Machine</strong></h3>
I always wanted to host something on <a title="Azure Infrastructure Services" href="http://www.windowsazure.com/en-us/home/scenarios/infrastructure-services/" target="_blank">Azure Virtual Machines </a>from the day I learned about its availability. Having your own virtual machine in the cloud which you can tinker with is a great little toy for any geek. I decided that I will host my wordpress multi-site on my very own Azure Virtual Machine as a learning experience and also because it came out to be the best possible option for my needs.
<h3>Apache vs Nginx</h3>
My initial thoughts were to prepare a Linux Virtual Machine with a LAMP (Linux, Apache, MySQL, PHP) stack and then go ahead with the WordPress install. If you want to go ahead with this approach you read up the following post:

<a title="Setting up WordPress on an Ubuntu 12.04.1 LTS VM on Windows Azure" href="https://jabong1.wordpress.com/2013/01/16/setting-up-wordpress-on-an-ubuntu-12-04-1-lts-vm-on-windows-azure/" target="_blank">Setting up WordPress on an Ubuntu 12.04.1 LTS VM on Windows Azure</a>

But then after reading the following blogpost by <a title="View all posts by Gwyneth Llewelyn" href="http://wpmu.org/author/gwyneth-llewelyn/" rel="author">Gwyneth Llewelyn</a>, I decided to go with Nginx instead.

<a title="WordPress Multisite with Nginx" href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">WordPress Multisite with Nginx – How to set it all up and enjoy the blazing fast consequences</a>

Steps that I took are more or less same as that described in the above post by <a title="View all posts by Gwyneth Llewelyn" href="http://wpmu.org/author/gwyneth-llewelyn/" rel="author">Gwyneth Llewelyn</a> and I will be referring to that at many instances below. You should definitely read her post as she details a lot about her choices and about the configuration options of different modules used.
<h3>STEPS</h3>
<strong>1. Get a Azure subscription:</strong>

If you don't already have a Azure subscription, you can sign up for a <a title="Windows Azure 3 month free trial" href="http://www.windowsazure.com/en-us/pricing/free-trial/" target="_blank">FREE 3 months trial.</a>

<strong>2. Create your virtual machine: </strong>

Next you need to create a Linux virtual machine in Windows Azure portal. You can read about it in the following tutorial by Azure. I chose to create a virtual machine with <strong>Ubuntu Server 12.04 LTS</strong> of size Small (1 core, 1.75GM Memory)
<p id="header-1"><a title="How to create a custom virtual machine running the Linux operating system by using the Management Portal" href="http://www.windowsazure.com/en-us/manage/linux/tutorials/virtual-machine-from-gallery/#header-1" target="_blank">How to create a custom virtual machine running the Linux operating system by using the Management Portal</a></p>
<strong>3. Connect to your virtual machine: </strong>

Once your virtual machine is setup (may take few minutes), you need to login into the machine to proceed with your installations. To do so you would need an <strong>SSH</strong> client such as <strong>PuTTY</strong> which is a <a title="Download PuTTY" href="http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html" target="_blank">free download</a>. Azure would have created an SSH endpoint for you with a random port assigned to it. It is advisable not to change this port to the default SSH port (22) and not to disclose the port to anyone else for extra security measures. For a step by step tutorial, read the following:
<p id="header-2"><a title="How to log on to the virtual machine after you create it" href="http://www.windowsazure.com/en-us/manage/linux/tutorials/virtual-machine-from-gallery/#header-2" target="_blank">How to log on to the virtual machine after you create it</a></p>
From here on, we can pretty much follow <a title="WordPress Multisite with Nginx " href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">the tutorial </a>written by Gwyneth Llewelyn. However I will briefly mention the remaining key steps here along with deviations that I took from that tutorial in my setup. Once again I would advice you to read <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">her tutorial </a>as it contains lot of great insights.

<strong>4. Install and configure MySQL: </strong>

Run the following command on your ssh windows to install MySQL
<pre>sudo apt-get install mysql-server</pre>
At the end of the installation you would be asked to set the root password so go ahead and set it.

Note that in <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">Gwyneth's Tutorial</a>, she chose to alter the default configuration and go with MyISAM, however I chose to keep the default configuration of InnoDB specifically because I was using a VM size with higher memory size and I plan to scale my VM to have multiple-cores and even more RAM later on. In case you chose the Extra-Small VM size, I would recommend you to follow her configuration tweaks in the  <strong>/etc/mysql/my.cnf</strong> file.

Once you are done with your configuration tweaks, start MySQL service with
<pre>service mysql start</pre>
<strong>5. Install Nginx</strong>

As already pointed out we are not using Apache for out setup. We will be installing <a title="Install nginx" href="http://wiki.nginx.org/Install" target="_blank">Nginx </a>using the following commands:
<pre>sudo -s
nginx=stable # use nginx=development for latest development version
add-apt-repository ppa:nginx/$nginx
apt-get update
apt-get install Nginx</pre>
At this point we will not be doing any configuration to Nginx.

<strong>6. Install  PHP5, PHP5 Extensions and PHP-FPM</strong>

Since Nginx only handles static files, we need to install support for PHP. For that we will install PHP5, PHP5 extensions and PHP-FPM using the following commands:
<pre id="fvch-code-8">sudo apt-get install php5-common php5-mysql php5-xmlrpc php5-cgi php5-curl php5-gd php5-cli php5-fpm php-apc php5-dev php5-mcrypt</pre>
Note that I didn't have to add any extra repositories to get the latest php version. I also added <strong>php5-pear</strong> and <strong>php5-tidy</strong> modules.

<strong>7. Configure Nginx</strong>

Now we need to configure Nginx in order to make it aware of PHP. Also we need to do a few tweaks as described by <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">Gwyneth's Tutorial</a>

You can lookup the final <a href="https://gist.github.com/kanishkkunal/5602320" target="_blank">/etc/nginx/nginx.conf </a>file that I created.

Also create <strong>/etc/nginx/conf.d/wordpress.conf, </strong><strong>/etc/nginx/conf.d/wordpress-mu.conf </strong>and <strong><strong>/etc/nginx/conf.d/restrictions.conf</strong></strong> similar to the ones given in <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">Gwyneth's Tutorial</a>. I made exact same conf files for these three as given in her tutorial.

If you are not creating WordPress multi-site and just want to host a single site. You can skip the creation of <strong>/etc/nginx/conf.d/wordpress-mu.conf</strong>.

At this point you should restart Nginx service once and then type the following to check that everything is working fine. It should produce a message like "Testing nginx configuration: nginx."
<pre>sudo service nginx restart
sudo service nginx configtest</pre>
<strong>8. Configure PHP-FPM</strong>

Read up the detail about configuring PHP-FPM in <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">Gwyneth's Tutorial</a>. However all you need to do is edit <strong><strong><strong>/etc/php5/fpm/pool.d/<strong>www.conf. </strong></strong></strong></strong>You can see my final <a href="https://gist.github.com/kanishkkunal/5602396" target="_blank">www.conf</a> file for reference.

Now start PHP-FPM with
<pre>sudo service php5-fpm start</pre>
<strong>9. Install and configure WordPress</strong>

Lets install WordPress now into<strong> /var/www</strong>
<pre>sudo -i
cd /var/www
wget -O wordpress.tar.gz http://wordpress.org/latest.tar.gz
tar -zxvf wordpress.tar.gz
chown -R www-data:www-data /var/www/wordpress
rm wordpress.tar.gz</pre>
After that create a new MySQL user for WordPress and a new database named 'wordpress'
<pre>mysql -u root -p 
CREATE DATABASE wordpress;
CREATE USER wordpress;
SET PASSWORD FOR wordpress = PASSWORD("VeryHardToFigureOut2013!");
GRANT ALL PRIVILEGES ON wordpress.* TO wordpress@localhost IDENTIFIED BY 'VeryHardToFigureOut2013!';
FLUSH PRIVILEGES;
exit</pre>
Next you need to add your sites conf file under <strong>/etc/nginx/sites-available</strong>. You can name this file anything but lets assume its named <strong>mydomain.conf </strong>and your virtual machine's address is <strong>mydomain.cloudapp.net. </strong>You should add the following to your <strong>mydomain.conf </strong>file. We will later edit this file to point to the actual domain.
<pre>map $http_host $blogid {
 default 0;
 mydomain.cloudapp.net 1;
}
server {
 server_name mydomain.cloudapp.net;
 root /var/www/wordpress;
 access_log /var/log/nginx/mydomain.com-access.log;
 error_log /var/log/nginx/mydomain.com-error.log;
 include conf.d/restrictions.conf;
 include /var/www/wordpress/nginx.conf;
 include conf.d/wordpress-mu.conf;
}</pre>
Now that we have added our site's configuration to <strong>/etc/nginx/sites-available</strong> we need to enable it by making a link to this file under <strong>/etc/nginx/sites-enabled. </strong>Then you should unlink the default configuration present there (this part is missing for <a href="http://wpmu.org/wordpress-multisite-wordpress-nginx/" target="_blank">Gwyneth's Tutorial</a>, but not doing so will cause problems). After that we will create a Nginx.conf file by touching it and then make <strong>/var/www/wordpress </strong>readable by the webserver.
<pre>cd /etc/nginx/sites-enabled
ln -s /etc/nginx/sites-available/mydomain.conf
unlink default
touch /var/www/wordpress/nginx.conf
chown -R www-data:www-data /var/www/wordpress</pre>
<strong>10. Configure Multi-Site</strong>

<strong>11. Map custom domain and making it work before that</strong>

<strong>12. Plugins</strong>

&nbsp;

&nbsp;

&nbsp;

my customization

wordpress plugins

Bitnami

&nbsp;

&nbsp;

&nbsp;
