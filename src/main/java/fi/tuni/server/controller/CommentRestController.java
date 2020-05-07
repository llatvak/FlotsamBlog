package fi.tuni.server.controller;

import fi.tuni.server.comment.Comment;
import fi.tuni.server.comment.CommentRepository;
import fi.tuni.server.exception.CannotFindCommentException;
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
public class CommentRestController {

    @Autowired
    CommentRepository commentRepository;

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
        if(commentRepository.findById(commentId).isPresent()) {
            return commentRepository.findById(commentId);
        } else {
            throw new CannotFindCommentException(commentId);
        }
    }

    @RequestMapping(value = "api/comments/{commentId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteComment(@PathVariable int commentId) {
        if(commentRepository.findById(commentId).isPresent()) {
            commentRepository.deleteById(commentId);
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        } else {
            throw new CannotFindCommentException(commentId);
        }
    }
}
