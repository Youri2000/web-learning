1. js 红宝书
2. 如何理解js：html/css解析器，js解析器，解析js的, C/C++ Compiler（编译器）
3. 编译器（C/C++）生成.exe，一次编译到处运行。解析器（js/python/ruby/rust），较慢：边读边执行。JAVA在JVM。计算机能理解部分中间指令，拓展：量子计算：比特

4. js V8 => JIT
v8（属于解析器一大类）：v8从浏览器中结偶，是开源的，nodejs因此诞生。新机制TurboFan，优先转化为字节码（byte code）转换为机器码。for => add(x,y)
苹果：https://developer.apple.com/documentation/javascriptcore
v8: https://v8.dev/

netspace公司开发，最开始在网景浏览器运行（后来是火狐浏览器）
ECMAScript：ECMA协会，浏览器公司去实施

除了node，还有deno和bun可以运行js，运行在服务器
https://deno.com/
https://bun.com/

5. ES6(ESM: import/export)改变了解析器的方式，用V8

6. npm包管理 =》 现代模块化基础(commonJS)，最本质的区别是用函数Function

7. babel 一开始用于es6

8. 浏览器：v8+bom+dom+local storage...

作业：
1. 先看v8，了解其他语言的解析器
2. html + css
3. 红宝书