let books=new Set();
books.add("sudha murthy");
books.add("charlie");
books.add("pingali");
books.add("pingali");
books.add("pingali");
books.add("Tagore");
books.add(4567);
 console.log(typeof books);
 console.log(books instanceof Set);
 console.log(books.keys());
console.log(books);
books.forEach(books=> {
    console.log(books);
    
});
console.log(books.has("Tagore"));
console.log(books);