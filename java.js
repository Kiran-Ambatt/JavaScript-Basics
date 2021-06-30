console.clear()
var str1 = 'Today is';
var str2 = ' A beautiful day '
var str3 = ' In Hawaii. '
//Result = 'Today is a beautiful day in Hawaii.'
var a = str2.charAt(1)
var b = a.toLowerCase()
var c = str3.charAt(1)
var d = c.toLowerCase()
var e = str2.slice(2)
var f = str3.substr(2)
console.log(str1.concat(' ',b,e,d,f))