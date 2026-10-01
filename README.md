# Grayling

Grayling turns HTML into plain text. It goes through the given file and deletes tags like header tags (h1-h6), `<p>`, and `<br>`.

Grayling doesn't filter out any more tags right now because when writing normal text in html, you are unlikely to use any other tags. In fact, I based my tag list entirely off of one of my own HTML files.

In the future I will have Grayling remove the HTML boilerplate commonly found at the top of files, however, if you use Embedded Ruby files instead of plain HTML then you won't have to deal with that.

# Use Grayling

First, get Grayling on your machine. Then, in the same directory as Grayling, run:

```
node grayling.js <old_file> <new_file>
```

Grayling is the opposite of [Yorklyn](https://github.com/Centurion774477/Yorklyn), which turns plain text files into HTML.

Grayling is designed for when you wrote something down in an HTML file but you want to share that information with somebody, 
whereas Yorklyn is for writing blog posts in plain text and generating HTML to add to your blog.

Cheers!
