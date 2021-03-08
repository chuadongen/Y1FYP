

var topicList={
"Problem Solving In Computing":
`<h2>Problem Solving In Computing</h2>
<h5>How to approach problems</h5>
<p>In programming/computing, you will face a lot of different problems, but the approach is usually the same</p>
<ol>
  <li>Define the problem clearly, know exactly what the problem is</li>
  <li>Define the goal/result clearly, know what the end result should be</li>
  <li>Define test case scenarios, come up with sample inputs and outputs e.g. (1+1=2)</li>
  <li>Plan your programme</li>
  <li>Execute</li>
</ol>
<h5>Algorithm</h5>
<p>An algorithm is a set of instructions that process an input and outputs a result</p>
<p>You can think of it as a problem solving machine like a washing machine, you input the dirty clothes and the clean clothes is the output</p>
<h5>Input</h5>
<p>What the user types in or does, using the example of washing machine the user inputs dirty clothes</P>
<h5>Processing</h5>
<p>The set of instructions your programme/algorithm/code does, the washing machine takes water and soap and mixes it with the
  dirty clothes</P>
<h5>Output</h5>
<p>What your programme will output or the end goal you want to achieve, clean clothes</P>
<h5>Psuedocode</h5>
<p>Psuedocode is planning your code in english, it helps you identify the steps you need to take to reach the
  goal<br>Here I am going to write psuedocode for an automated washing machine</p>
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
<p>Integrated Development Enviroments (IDE) are software that makes it easier to code, you can use default notepad to code but its pretty bad,
  so we will be using IDLE instead
</p>
<p>Python comes with an IDE called IDLE, launch it and you will be brought to the
  shell<br>Instead of writing your code in the shell, create a new file and write your code there</p>
<h5>Shortcuts</h5>
<p>Speed and precision are both important skills in programming, here are some shortcuts to help you</p>
<ul>
  <li>CTRL-S ~ Save</li>
  <li>F5 ~ Run</li>
  <li>CTRL-Z ~ Undo</li>
  <li>CTRL-SHIFT-Z ~ Redo</li>
  <li>CTRL-C ~ Copy</li>
  <li>CTRL-V ~ Paste</li>
  <li>CTRL-X ~ Cut</li>
</ul>
<h5>Syntax</h5>
<p>English got grammar, programming got rules called syntax</p>
<p>For example in python, you can't type <b>my height is 9</b>, programming languages don't understand English.<br>
instead you will write <b>height = 9</b></p>
<p>Be careful, screwing up the syntax will result in something called a syntax error, making your programme fail</p>
<h5>Format</h5>
<p>English got 2 finger spacing right, programming languages also has a set structure to follow</p>
<p>For example in python, it uses indentation, I will explain this in the next chapter</p>
<h5>Variables</h5>
<p>A variable is an object that holds data e.g.<br> height = 12<br>The variable <b>height</b> is now 12, so if
  you print(<b>height</b>) you get 12</p>
<h5>Variable Naming Convention</h5>
<p>Variable names must be meaningful, begin with a letter and not have a space bar<br>Also, variable names are
  case sensitive
  so the variable <b>height</b> is different from the variable <b>Height</b><br>Special characters are also
  not allowed except underscore (_)<br>Below are some popular naming conventions</p>
<ul>
  <li>camelCase</li>
  <ul>
    <li>
      starts with a lowercase letter and all words afterwards start with uppercase
    </li>
    <li>iceCream</li>
    <li>tomatoPizzaIsNice</li>
    <li>onePiece</li>
    <li>tom (1 word variables are still lowercase)</li>
  </ul>
  <li>PascalCase/TitleCase</li>
  <ul>
    <li>
      all words starts with uppercase letter
    </li>
    <li>IceCream</li>
    <li>TomatoPizzaIsNice</li>
    <li>OnePiece</li>
    <li>Tom</li>
  </ul>
  <li>snake_case</li>
  <ul>
    <li>
      all words starts with lowercase letter and spaces are denoted by underscore
    </li>
    <li>ice_cream</li>
    <li>tomato_pizza_is_nice</li>
    <li>one_piece</li>
    <li>tom</li>
  </ul>
</ul>
<p>I reccomend you to use camelCase</p>
<h5>Reserved Keywords</h5>
<p>Some keywords are reserved by the language, you can't use them as variables e.g.</p>
<ul>
  <li>IF</li>
  <li>ELSE</li>
  <li>TRUE</li>
  <li>FALSE</li>
  <li>NOT</li>
</ul>
<p>In IDEs the reserved keywords are usually highlighted in a different color, 
  there are also color themes for IDEs to make it suit your style, here is the one I use</p>
<a href="https://draculatheme.com/idle" target="_blank">https://draculatheme.com/idle</a>
`,
"Scope and Indentations":`
<h2>Scope and Indentations</h2>
          <h5>Scope</h5>
          <p>This is an important concept in programming, I will try to simplify it as best as possible</p>
          <p>SingaporeFood has island wide delivery service, so the scope is : Singapore<br>
            But BishanFood delivery service is only in Bishan, so the scope is : Bishan</p>
          <p>Here comes the key concept<br>Can you get SingaporeFood in Bishan? Yes<br>
            Can you get SingaporeFood in Yishun? Yes<br>
            Can you get BishanFood in Bishan? Yes<br>Can you get BishanFood in Yishun? No</p>
          <div>Singapore
            <div id='Singapore'>
              <div id='Bishan'>Bishan</div>
            </div>
          </div>
          <p>The idea is you can't access a local scope from other local scopes, you can't buy BishanFood from
            Yishun<br>
            But you can access global scope from local scope, both Bishan and Yishun are part of Singapore so both can
            buy SingaporeFood</p>
          <p>So why does this matter in programming? Because you have variables and they will be placed into their own scopes<br>
          Now you might ask me, why not make all variables global, liddat then bo taiji liao<br>
          The answer is you should confine Bishan stuff to Bishan, if you can access Bishan stuff from Yishun
        then it might cause some errors<br>Furthermore, as your programme gets more complex if you write 2 variables with the same name then die alr, it will overwrite the old data causing many issues</p>
        <h5>Indentation</h5>
        <p>So how do you define scopes in programming? Python uses indentation, which is 4 spacebar spacing, in this example i will use underscore instead of spaces</p>
        <p>Singapore<br>____Bishan<br>________Junction8<br>____________Junction8McDonalds<br>____Yishun</p>
        <p>As you can geuss, the variables in each scope will be confined to the scope and can only be used by the 'child' scopes but not the 'parent' scopes</p>
`,
"Statements and Comments":`<h2>Statements and Comments</h2>
<h5>Statements</h5>
<p>Each line you write in a programme is a statement e.g.<br>
print("Hello World")</p>
<p>What if you put it into 2 lines? e.g. <br> print("Hello <br> world")<br>Ans: Syntax error</p>
<p>Sometimes you need to write a long line so you can overcome this by using a backslash<br>print("Hello"\<br>
  "world")
</p>
<h5>Comments</h5>
<p>Comments are ignored by the computer and are only for humans to read, they help to explain and document the code
  for programmers to understand the code better<br>#Use hastag for single line comment<br>'''For multi line comment<br>use triple-quotes'''
</p>
<p>Remember how we talked about syntax? Each language has different ways of writing comments for example #, //, <-- etc so when you learn
a different language you will have to learn a new syntax, but the core programming concepts stay the same so if you get it down right you can transition between languages quite fast</p>

`,"Data Types":`<h2>Data Types</h2>
<h5>Defining and Assigning Variables</h5>
<p>To define a variable is to make it exist, to assign a variable is assigning a value to that variable
  In Python you can do both in 1 line like so<br><b>x = 1</b><br>Here you defined the variable <b>x</b> with the value <b>1</b>
</p>
<p></p>
<h5>Basic Data Types</h5>
<p>These are some data types used in Python, and here are the ways you can define them</p>
<ul>
  <li><b>str</b> ~ string/words/text</li>
  <p> x = 'potato'<br>x =  "potato"<br> x = """potato""" (3 quotes)<br> x = '''potato'''</p>

  <li><b>int</b> ~ integer</li>
  <p> x = 1 </p>
  <li><b>float</b> ~ numbers with decimal place</li>
  <p> x = 1.00</p>
  <li><b>bool</b> ~ boolean</li>
  <p> x = True<br>x = False</p>
</ul>
<h5>Low level vs high level languages</h5>
<p>Python is an excellent example of a high level language, for example when you define variables
  <br> x = 1<br>
  you don't need to tell the computer it is an integer, it does it automatically for you<br> But low level
  languages
  on the other hand needs to be told the data type of the variable for example in C# <br> int x = 1 ;
  <br>There are many pros and cons of each type
  but for now you will be learning py
</p>
`,


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
