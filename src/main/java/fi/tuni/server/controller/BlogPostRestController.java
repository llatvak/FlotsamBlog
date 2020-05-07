package fi.tuni.server.controller;

import fi.tuni.server.blogpost.BlogPost;
import fi.tuni.server.blogpost.BlogPostRepository;
import fi.tuni.server.category.Category;
import fi.tuni.server.exception.CannotFindPostException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.Optional;

@RestController
public class BlogPostRestController {

    private final String POSTS_URL = "api/posts";

    @Autowired
    BlogPostRepository postRepository;

    @RequestMapping(value = POSTS_URL, method = RequestMethod.POST)
    public ResponseEntity<BlogPost> savePost(@RequestBody(required = true) @Valid BlogPost p, UriComponentsBuilder b, BindingResult result) {
        if (result.hasErrors()) {
            // Validation problems!
            return new ResponseEntity<BlogPost>(HttpStatus.BAD_REQUEST);
        }
        this.postRepository.save(p);
        UriComponents uriComponents = b.path("api/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<BlogPost>(p, headers, HttpStatus.CREATED);
    }

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<BlogPost> updatePost(@PathVariable(value = "postId") int postId, @Valid @RequestBody BlogPost postDetails, BindingResult result, UriComponentsBuilder b) throws Exception {
        if(result.hasErrors()) {
            return new ResponseEntity<BlogPost>(HttpStatus.BAD_REQUEST);
        }
        Optional<BlogPost> blogPost = postRepository.findById(postId);
        if(blogPost.isPresent()) {
            BlogPost existingPost = blogPost.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setDescription(postDetails.getDescription());
            existingPost.setBody(postDetails.getBody());
            existingPost.setDate(postDetails.getDate());
            existingPost.setImageUrl(postDetails.getImageUrl());
            existingPost.setCategory(postDetails.getCategory());
            existingPost.setPostLikes(postDetails.getPostLikes());
            final BlogPost updatedPost = postRepository.save(existingPost);
            return ResponseEntity.ok(updatedPost);
        } else {
            postRepository.save(postDetails);
            UriComponents uriComponents = b.path("api/posts/{id}").buildAndExpand(postDetails.getId());
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(uriComponents.toUri());
            return new ResponseEntity<BlogPost>(postDetails, headers, HttpStatus.CREATED);
        }
    }

    @RequestMapping(value = POSTS_URL, method = RequestMethod.GET)
    public Iterable<BlogPost> fetchPosts() {
        return postRepository.findAll();
    }

    @RequestMapping(value = "api/posts/{postId}", method = RequestMethod.GET)
    public Optional<BlogPost> fetchPost(@PathVariable int postId) {
        if(postRepository.findById(postId).isPresent()) {
            return postRepository.findById(postId);
        } else {
            throw new CannotFindPostException(postId);
        }
    }

    @RequestMapping(value = "api/posts/{postId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deletePost(@PathVariable int postId) {
        if(postRepository.findById(postId).isPresent()) {
            postRepository.deleteById(postId);
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        } else {
            throw new CannotFindPostException(postId);
        }
    }
}
