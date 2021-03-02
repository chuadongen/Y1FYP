

var topicList={
"Problem Solving In Computing":
`<h2>Problem Solving In Computing</h2>
<h5>How to approach problems</h5>
<p>Define problem and goal > Plan > Execute</p>
<h5>Algorithm</h5>
<p>An algorithm is basically a washing machine, you throw in the problem and the solution comes out.</p>
<h5>Input</h5>
<p>What the user types in or does, using the example of washing machine the user inputs dirty clothes</P>
<h5>Processing</h5>
<p>What your programme/algorithm/code does, the washing machine takes water and soap and mixes it with the dirty clothes</P>
<h5>Output</h5>
<p>What your programme will output or the end goal you want to achieve, clean clothes</P>
<h5>Psuedocode</h5>
<p>Psuedocode is planning your code in english, it helps you identify the steps you need to take to reach the goal<br>Here I am going to write psuedocode for an automated washing machine</p>
<ol>
  <li>Ask user to put in dirty clothes</li>
  <li>Add 3l water</li>
  <li>Add 50mg soap</li>
  <li>Mix for 20mins</li>
  <li>Beep for 10 seconds</li>
</ol>`,
"Introduction to Python":
`<h2>Introduction to Python</h2>
<h5>IDLE</h5>
<p>Python comes with an IDE (code editor) called IDLE, launch it and you will be brought to the shell<br>Instead of writing your code in the shell, create a new file and write your code there</p>
<h5>Shortcuts</h5>
<ul>
  <li>CTRL-S - Save</li>
  <li>F5 - Run</li>
  <li>CTRL-Z - Undo</li>
  <li>CTRL-SHIFT-Z - Redo</li>
</ul>
<h5>Syntax</h5>
<p>English got grammer, programming got rules called syntax</p>
<h5>Format</h5>
<p>English got 2 finger spacing right, programming languages also has a set structure to follow</p>
<h5>Variables</h5>
<p>A variable is an object that holds data e.g.<br> height = 12<br>The variable <b>height</b> is now 12, so if you print(<b>height</b>) you get 12.</p>
<h5>Variable Naming Convention</h5>
<p>Variable names must be meaningful, begin with a letter and not have a space bar<br>Also, variable names are case sensitive
  so the variable <b>height</b> is different from the variable <b>Height</b><br>Special characters are also not allowed except underscore _<br>Below is an example of a naming convention we call camelCase</p>
<ul>
  <li>height</li>
  <li>tomHeight</li>
  <li>x</li>
  <li>uSeeThisIsLikeACamel</li>
</ul>
<p>FYI: camelCase, TitleCase/PascalCase, snake_case</p>
<h5>Reserved Keywords</h5>
<p>Some keywords are reserved by the language, you can't use them as variables e.g.</p>
<ul>
  <li>IF</li>
  <li>ELSE</li>
  <li>TRUE</li>
  <li>FALSE</li>
  <li>NOT</li>
</ul>`,


};
$(document).ready(function(){
    for(var key in topicList){
        $('#topic-nav').append('<a href="#" data-topic="'+key+'">' +key+ '</a>');
    }
    $('#topic-nav>a').on('click',function(){
        let key = $(this).data("topic");
        let newcontent = topicList[key];
        $('#content').empty();
        $('#content').html(newcontent);
    })
});
