package fi.tuni.server.controller;

import fi.tuni.server.comment.Comment;
import fi.tuni.server.comment.CommentRepository;
import fi.tuni.server.exception.CannotFindCommentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.Optional;

/**
 * Rest controller for comments, allows get, post, put and delete requests.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
@RestController
public class CommentRestController {

    @Autowired
    CommentRepository commentRepository;

    /**
     * Saves new comment from POST request.
     *
     * @param c received comment to be added
     * @param b url builder to expand url to correct value
     * @param result result for checking validation errors
     * @return returns ResponseEntity with appropriate status, and meta info if required
     */
    @RequestMapping(value = "api/comments", method = RequestMethod.POST)
    public ResponseEntity<Comment> saveComment(@RequestBody(required = true) @Valid Comment c, UriComponentsBuilder b, BindingResult result) {

        if(result.hasErrors()) {
            return new ResponseEntity<Comment>(HttpStatus.BAD_REQUEST);
        }
        this.commentRepository.save(c);

        UriComponents uriComponents = b.path("api/comments/{id}").buildAndExpand(c.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<Comment>(c, headers, HttpStatus.CREATED);
    }

    /**
     * Updates comment from PUT request if comment doesn't exist create one.
     *
     * @param commentId comment id to be updated
     * @param commentDetails current comment data to update or create from
     * @param result result to check validation errors
     * @param b url builder to expand url to correct value
     * @return returns ResponseEntity with appropriate status, and meta info if required
     */
    @PutMapping("api/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "commentId") int commentId, @Valid @RequestBody Comment commentDetails, BindingResult result, UriComponentsBuilder b) throws Exception {
        if(result.hasErrors()) {
            return new ResponseEntity<Comment>(HttpStatus.BAD_REQUEST);
        }
        Optional<Comment> comment = commentRepository.findById(commentId);
        if(comment.isPresent()) {
            Comment existingComment = comment.get();
            existingComment.setAuthor(commentDetails.getAuthor());
            existingComment.setContent(commentDetails.getContent());
            existingComment.setDate(commentDetails.getDate());
            existingComment.setLikes(commentDetails.getLikes());
            existingComment.setPostId(commentDetails.getPostId());
            final Comment updatedComment = commentRepository.save(existingComment);
            return ResponseEntity.ok(updatedComment);
        } else {
            commentRepository.save(commentDetails);

            UriComponents uriComponents = b.path("api/comments/{id}").buildAndExpand(commentDetails.getId());
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(uriComponents.toUri());

            return new ResponseEntity<Comment>(commentDetails, headers, HttpStatus.CREATED);
        }
    }

    /**
     * Gets all comments from GET request.
     *
     * @return returns all comments from repository
     */
    @RequestMapping(value = "api/comments", method = RequestMethod.GET)
    public Iterable<Comment> fetchComments() {
        return commentRepository.findAll();
    }

    /**
     * Gets one comment from GET request by id.
     *
     * @param commentId comment id to get
     * @return returns comment if found
     */
    @RequestMapping(value = "api/comments/{commentId}", method = RequestMethod.GET)
    public Optional<Comment> fetchComments(@PathVariable int commentId) {
        if(commentRepository.findById(commentId).isPresent()) {
            return commentRepository.findById(commentId);
        } else {
            throw new CannotFindCommentException(commentId);
        }
    }

    /**
     * Delete one comment from id received.
     *
     * @param commentId comment id to be deleted
     * @return returns appropriate status if comment found
     */
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
