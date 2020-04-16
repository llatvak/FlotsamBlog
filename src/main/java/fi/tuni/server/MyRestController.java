package fi.tuni.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class MyRestController {

    private final String POSTS_URL = "api/posts";
    private final String CATEGORIES_URL = "api/categories";

    @Autowired
    BlogPostRepository postRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CommentRepository commentRepository;

    // ##################### Blogposts #####################
    @RequestMapping(value = POSTS_URL, method = RequestMethod.POST)
    public ResponseEntity<BlogPost> savePost(@RequestBody BlogPost p, UriComponentsBuilder b) {

        this.postRepository.save(p);

        UriComponents uriComponents = b.path("api/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<BlogPost>(p, headers, HttpStatus.CREATED);
    }

    /*@RequestMapping(value = "/posts/{postId}", method = RequestMethod.PUT)
    public ResponseEntity<BlogPost> updatePost(@RequestBody BlogPost p, UriComponentsBuilder b, @PathVariable int postId) {
        this.postRepository.save(p);
        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());
        return new ResponseEntity<BlogPost>(p, headers, HttpStatus.OK);
    }*/

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<BlogPost> updatePost(@PathVariable(value = "postId") int postId, @Valid @RequestBody BlogPost postDetails) throws Exception {
        BlogPost post = postRepository.findById(postId).orElseThrow(() -> new Exception("Not valid id"));
        post.setTitle(postDetails.getTitle());
        post.setDescription(postDetails.getDescription());
        post.setBody(postDetails.getBody());
        post.setDate(postDetails.getDate());
        post.setImageUrl(postDetails.getImageUrl());
        post.setCategory(postDetails.getCategory());
        final BlogPost updatedPost = postRepository.save(post);
        return ResponseEntity.ok(updatedPost);
    }

    @RequestMapping(value = POSTS_URL, method = RequestMethod.GET)
    public Iterable<BlogPost> fetchPosts() {
        return postRepository.findAll();
    }

    @RequestMapping(value = "api/posts/{postId}", method = RequestMethod.GET)
    public Optional<BlogPost> fetchPost(@PathVariable int postId) {
        return postRepository.findById(postId);
    }

    @RequestMapping(value = "api/posts/{postId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deletePost(@PathVariable int postId) {
        postRepository.deleteById(postId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    // ##################### Categories #####################
    @RequestMapping(value = "api/categories", method = RequestMethod.POST)
    public ResponseEntity<Category> saveCategory(@RequestBody Category p, UriComponentsBuilder b) {

        this.categoryRepository.save(p);

        UriComponents uriComponents = b.path("api/categories/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Category>(p, headers, HttpStatus.CREATED);
    }

    @PutMapping("api/categories/{categoryId}")
    public ResponseEntity<Category> updateCategory(@PathVariable(value = "categoryId") int categoryId, @Valid @RequestBody Category categoryDetails) throws Exception {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new Exception("Not valid id"));
        category.setTitle(categoryDetails.getTitle());
        final Category updatedCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updatedCategory);
    }

    @RequestMapping(value = "api/categories", method = RequestMethod.GET)
    public Iterable<Category> fetchCategories() {
        return categoryRepository.findAll();
    }

    @RequestMapping(value = "api/categories/{categoryId}", method = RequestMethod.GET)
    public Optional<Category> fetchCategories(@PathVariable int categoryId) {
        return categoryRepository.findById(categoryId);
    }

    @RequestMapping(value = "api/categories/{categoryId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteCategory(@PathVariable int categoryId) {
        categoryRepository.deleteById(categoryId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    // ##################### Comments #####################
    @RequestMapping(value = "api/comments", method = RequestMethod.POST)
    public ResponseEntity<Comment> saveComment(@RequestBody Comment c, UriComponentsBuilder b) {

        this.commentRepository.save(c);

        UriComponents uriComponents = b.path("api/comments/{id}").buildAndExpand(c.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Comment>(c, headers, HttpStatus.CREATED);
    }

    @PutMapping("api/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "commentId") int commentId, @Valid @RequestBody Comment commentDetails) throws Exception {
        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new Exception("Not valid id"));
        comment.setAuthor(commentDetails.getAuthor());
        comment.setContent(commentDetails.getContent());
        comment.setDate(commentDetails.getDate());
        comment.setLikes(commentDetails.getLikes());
        comment.setPostId(commentDetails.getPostId());
        final Comment updatedComment = commentRepository.save(comment);
        return ResponseEntity.ok(updatedComment);
    }

    @RequestMapping(value = "api/comments", method = RequestMethod.GET)
    public Iterable<Comment> fetchComments() {
        return commentRepository.findAll();
    }

    @RequestMapping(value = "api/comments/{commentId}", method = RequestMethod.GET)
    public Optional<Comment> fetchComments(@PathVariable int commentId) {
        return commentRepository.findById(commentId);
    }

    @RequestMapping(value = "api/comments/{commentId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteComment(@PathVariable int commentId) {
        commentRepository.deleteById(commentId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
