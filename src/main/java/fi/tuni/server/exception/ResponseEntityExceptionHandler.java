package fi.tuni.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResponseEntityExceptionHandler {

    @ExceptionHandler(CannotFindPostException.class)
    public ResponseEntity<ErrorInfo> handleConflict(CannotFindPostException ex) {
        ErrorInfo e = new ErrorInfo("Could not find post with id " + ex.getPostId());
        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CannotFindCommentException.class)
    public ResponseEntity<ErrorInfo> handleConflict(CannotFindCommentException ex) {
        ErrorInfo e = new ErrorInfo("Could not find comment with id " + ex.getCommentId());
        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CannotFindCategoryException.class)
    public ResponseEntity<ErrorInfo> handleConflict(CannotFindCategoryException ex) {
        ErrorInfo e = new ErrorInfo("Could not find category with id " + ex.getCategoryId());
        return new ResponseEntity<ErrorInfo>(e, HttpStatus.NOT_FOUND);
    }
}
