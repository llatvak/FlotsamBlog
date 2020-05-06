package fi.tuni.server.controller;

import fi.tuni.server.blogpost.BlogPost;
import fi.tuni.server.blogpost.BlogPostRepository;
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
public class BlogPostRestController {

    private final String POSTS_URL = "api/posts";

    @Autowired
    BlogPostRepository postRepository;

    @RequestMapping(value = POSTS_URL, method = RequestMethod.POST)
    public ResponseEntity<BlogPost> savePost(@RequestBody BlogPost p, UriComponentsBuilder b) {

        this.postRepository.save(p);

        UriComponents uriComponents = b.path("api/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<BlogPost>(p, headers, HttpStatus.CREATED);
    }

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<BlogPost> updatePost(@PathVariable(value = "postId") int postId, @Valid @RequestBody BlogPost postDetails) throws Exception {
        BlogPost post = postRepository.findById(postId).orElseThrow(() -> new Exception("Not valid id"));
        post.setTitle(postDetails.getTitle());
        post.setDescription(postDetails.getDescription());
        post.setBody(postDetails.getBody());
        post.setDate(postDetails.getDate());
        post.setImageUrl(postDetails.getImageUrl());
        post.setCategory(postDetails.getCategory());
        post.setPostLikes(postDetails.getPostLikes());
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
}
