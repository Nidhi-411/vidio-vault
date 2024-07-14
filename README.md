# Vidio vault

A project build with React js , Tailwind css , Redux toolkit .
It's a vidio streaming plateform , it is like a youtube clone .  

## features - 

  1. debouncing 
  2. nested comments 
  3. live chat

 ### Debouncing:

typing slow = 200ms typing fast = 30ms

Perfomance:

iphone pro max = 14 letter * 1000 = 140000
with debouncing= 3 API calls * 1000 = 3000
Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
200ms make an API call

Cache: time complexity tro search in array = O(n) time complexity tro search in Object = O(1)

[i, ip, iph, iphone]

{ i: ip: iph: iphone: }

new Map();   // for cache
We can implement least Recently used cache also ( LRU cache).  // cache


// Youtubes debouncing time is very less , approx har keystrok par api kar deta h
// Flipcarts debouncing time is a bit more then yt ,  km api call krta h 

## n level nested comments 

  List inside list  && recursion - 

  ComementContainer 
  
  Comment - Component ( where we displayed  the icon ,  username , text )

  CommentList - we used recursion in this component . 

  CommentData - data , text , replies(itself a Comment)