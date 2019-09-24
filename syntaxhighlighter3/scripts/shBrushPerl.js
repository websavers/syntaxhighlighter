;(function()
{SyntaxHighlighter=SyntaxHighlighter||(typeof require!=='undefined'?require('shCore').SyntaxHighlighter:null);function Brush()
{var funcs='abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr '+'chroot close closedir connect cos crypt defined delete each endgrent '+'endhostent endnetent endprotoent endpwent endservent eof exec exists '+'exp fcntl fileno flock fork format formline getc getgrent getgrgid '+'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr '+'getnetbyname getnetent getpeername getpgrp getppid getpriority '+'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid '+'getservbyname getservbyport getservent getsockname getsockopt glob '+'gmtime grep hex index int ioctl join keys kill lc lcfirst length link '+'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd '+'oct open opendir ord pack pipe pop pos print printf prototype push '+'quotemeta rand read readdir readline readlink readpipe recv rename '+'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl '+'semget semop send setgrent sethostent setnetent setpgrp setpriority '+'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread '+'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf '+'sqrt srand stat study substr symlink syscall sysopen sysread sysseek '+'system syswrite tell telldir time times tr truncate uc ucfirst umask '+'undef unlink unpack unshift utime values vec wait waitpid warn write '+'say';var keywords='bless caller continue dbmclose dbmopen die do dump else elsif eval exit '+'for foreach goto if import last local my next no our package redo ref '+'require return sub tie tied unless untie until use wantarray while '+'given when default '+'try catch finally '+'has extends with before after around override augment';this.regexList=[{regex:/(<<|&lt;&lt;)((\w+)|(['"])(.+?)\4)[\s\S]+?\n\3\5\n/g,css:'string'},{regex:/#.*$/gm,css:'comments'},{regex:/^#!.*\n/g,css:'preprocessor'},{regex:/-?\w+(?=\s*=(>|&gt;))/g,css:'string'},{regex:/\bq[qwxr]?\([\s\S]*?\)/g,css:'string'},{regex:/\bq[qwxr]?\{[\s\S]*?\}/g,css:'string'},{regex:/\bq[qwxr]?\[[\s\S]*?\]/g,css:'string'},{regex:/\bq[qwxr]?(<|&lt;)[\s\S]*?(>|&gt;)/g,css:'string'},{regex:/\bq[qwxr]?([^\w({<[])[\s\S]*?\1/g,css:'string'},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},{regex:/(?:&amp;|[$@%*]|\$#)\$?[a-zA-Z_](\w+|::)*/g,css:'variable'},{regex:/\b__(?:END|DATA)__\b[\s\S]*$/g,css:'comments'},{regex:/(^|\n)=\w[\s\S]*?(\n=cut\s*(?=\n)|$)/g,css:'comments'},{regex:new RegExp(this.getKeywords(funcs),'gm'),css:'functions'},{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'}];this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);}
Brush.prototype=new SyntaxHighlighter.Highlighter();Brush.aliases=['perl','Perl','pl'];SyntaxHighlighter.brushes.Perl=Brush;typeof(exports)!='undefined'?exports.Brush=Brush:null;})();