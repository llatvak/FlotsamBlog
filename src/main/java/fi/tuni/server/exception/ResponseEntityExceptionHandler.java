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
}
