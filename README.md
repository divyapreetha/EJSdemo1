<h1>Working with Express Framework - Tutorial</h1>
<h2>This project is aimed for developers who are new to Express Framework</h2>
<p>Express is a server-side framework that can be used to start up a server to listen for requests, parse incoming requests, match those requests to particular routes, and to craft our HTTP responses and their associated content</p>

<h3>Steps:</h3>

<h4>Step 1: </h4>
<p>Open NodeJS. If you haven't installed NodeJS yet, you can install it here. <a href="https://nodejs.org/en/download/">NodeJS</a>. NodeJS lets developers use JavaScript to write command line tools, and also for server-side scripting to generate dynamic content to a web page.</p>
<center><img src="C:\Users\Divya\README files\FirstApp\Step 1.png" alt="NodeJS Download Page"/></center>

<h4>Step 2: </h4>
<p>Just view the list of files in your device by typing <strong><code>ls</code></strong> in the NodeJS console</p>
<center><img src="C:\Users\Divya\README files\FirstApp\Step 2.png" alt="NodeJS page"></img></center>

<h4>Step 3: </h4>
<p>Create a new folder for practice. Type in the console, <br><strong><code>mkdir FirstApp</code></strong></p>

<h4>Step 4: </h4>
<p>Enter into the directory that you have created just now by typing <br><strong><code>cd FirstApp</code></strong></p>

<h4>Step 5: </h4>
<p>Now, initialize the node package manager (NPM) by typing <br><strong><code>npm init -y</code></strong></p>

<h4>Step 6: </h4>
<p>Now, a new file <code>package.json</code> will be created. You can view and explore that file by opening it in Visual Studio Code. <a href="https://code.visualstudio.com/download" alt="VS Code download page"></a></p>

<h4>Step 7: </h4>
<p>Now, go back to NodeJS and install Express by typing, <br><strong><code>npm i express</code></strong><br>Now, a new folder <code>node_modules</code> will be created</p>

<h4>Step 8: </h4>
<p>Now, let's create a javascript file named "<code>index.js</code>". You can do that either by typing, <br><strong><code>touch index.js</code></strong><br> in the NodeJS or directly by creating a new file named <code>index.js</code> from the VS Code.</p>

<h4>Step 9: </h4>
<p>You can copy contents from the <code>index.js</code> provided in this repository. You can use <br><strong><code>node index.js</code></strong><br>to run the file.</p>

<h4>Step 10: </h4>
<p>To view the results, you can open a browser's new tab and type <br><strong><code>localhost:3000</code></strong></p>

<h4>Step 11: </h4>
<p>Alternatively, you can use Postman to view the results. Open Postman, and type <strong><code>localhost:3000</code></strong>. You can install <a href="https://www.postman.com/downloads/">Postman</a> here.</p>

<h4>Step 12: </h4>
<p>Now, to check how Express Routing works, try typing <br><strong><code>localhost:3000/cats</code></strong><br>or<br><strong><code>localhost:3000/dogs</code></strong><br>in the Postman. </p>

<h4>Step 13: </h4>
<p>To explore how Query String works, type <br><strong><code>localhost:3000/search</code></strong> in the Postman. Under that, inside the PARAMS, set the KEY field as <strong>q</strong> and the VALUE field as any string you wish.
<br>Now, our <code>req.query</code> wil return the query string which we have passed. You can modify the key/values as per your convenience. You can also try sending multiple key/values.</p>

<h4>Step 14: </h4>
<p>
    NOTE: Every time you modify your code, you need to restart the server by pressing <code>Ctrl+C</code> and then <code>node index.js</code>. To automatically restart the server and reload the page, whenever we modify our code, we need the <code>nodemon</code> package. Install it globally
    <br><strong><code>npm i -g nodemon</code></strong>
    <br>
</p>

<h4>Step 15: </h4>
<p>
    Now, check if nodemon is installed properly by typing
    <br><strong><code>nodemon -v</code></strong>
    <br>If it returns the version number, it has been installed correctly, else it throws error
    
</p>

<h4>Step 16: </h4>
<p>
    Now, everytime you want to run the file, type the following command instead of <code>node index.js</code>
    <br><strong><code>nodemon index.js</code></strong>
    <br> Just replace <code>node</code> by <code>nodemon</code> everytime
</p>

<h4>Code Explanation</h4>
<ul>
    <li>
        You need to include <code>require("express")</code> in order to initialize the installed Express framework. You can refer the official documentation of <a href="https://expressjs.com/">Express</a> to learn more about it.
    </li>
    <li>
        <code>app.listen()</code> is included to make the server listen to you. We have mentioned the port number as 3000 here. You can change it, but make sure that the port you mentioned is free for use.
    </li>
    <li>
        Now that the server is listening, we need to send some data. <code>app.use() is included to send data to server. This callback function will run, whenever you pass an incoming request to server.</code>
    </li>
    <li>
        <code>req</code> and <code>res</code> are JavaScript objects, that are automatically created for us by Express
    </li>
    <li>
        <code>res</code> has several methods, including <code>res.send()</code>. The content you mention here will be displayed as a response from the server.
    </li>
    <li>
        If you have only one path, for example, if your web page contains only the Home Page, you can use <code>app.use()</code> to send data to the server and get back a response.
    </li>
    <li>
        But, if you have multiple paths (like, <code>/aboutus</code>,<code>/contact</code>, etc in your web page, you need to use <code>app.get()</code> to communicate with the server.
    </li>
    <li>
        In Express, we have Routing concepts as well - taking incoming requests and a path that is requested and match that to the same code/response. You can do that by typing <code>app.get(path,callBackFunction)</code>. For example <code>app.get('/cats', (req,res)=>{res.send("You are in the Cat page")})</code>
    </li>
    <li>
        You need to set a generic response for path that never exist. <br><strong><code>app.get('*',callBackFunction)</code></strong>
        <br>This * is the getAll default case and this should be included at the bottom of everything.
    </li>
    <li>
        So far, you have sent GET request to the server. You can also send POST requests, which can be done by typing <br><strong><code>app.post(path, callBackFunction)</code></strong>
    </li>
    <li>
        You can also set a generic pattern for your path by using the <code>/:pattern</code><br>
        In the place of <code>:pattern</code>, you can mention anything. <br>
        For example: If you have mentioned this <code>app.get('/r/:subreddit',(req,res)=>{console.log(req.params)})</code> as your generic pattern in your <code>index.js</code> file, you can open Postman and type <code>localhost:3000/r/chicken</code>, and the value that you passed, (chicken) in this case will be stored in the <code>req.params</code>. You can explore more about <code>req.params</code> in the official documentation of Express.
    </li>
    <li>
        We can also pass a Query String using Express. This can be done by <code>app.get('/search', callBackFunction)</code>. 
    </li>
</ul>

<h2>I hope, this was helpful. You can ping me if you have any queries</h2>


<h1 align="center">By the way 👋, I'm Divya Preetha</h1>
<h3 align="center">A passionate developer from India</h3>

- 🔭 I’m currently working on **Healthcare Security using Blockchain**

- 🌱 I’m currently learning **dApp development**

- 👨‍💻 All of my projects are available at [https://github.com/divyapreetha](https://github.com/divyapreetha)

- 💬 Ask me about **basics of full stack dev**

- 📫 How to reach me **jesusdiv18@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://codepen.io/divyapreetha" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="divyapreetha" height="30" width="40" /></a>
<a href="https://twitter.com/jesusdiv18" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="jesusdiv18" height="30" width="40" /></a>
<a href="https://linkedin.com/in/a-divya-preetha-3733bb66" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="a-divya-preetha-3733bb66" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/divya-preetha-aravindan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="divya-preetha-aravindan" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://bulma.io/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="bulma" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

<h3 align="left">Support:</h3>
<p><a href="https://www.buymeacoffee.com/codergirldivz"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="codergirldivz" /></a><a href="https://ko-fi.com/codergirldivz"> <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="codergirldivz" /></a></p><br><br>
