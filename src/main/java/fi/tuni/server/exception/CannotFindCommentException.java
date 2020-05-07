package fi.tuni.server.exception;

public class CannotFindCommentException extends IllegalArgumentException {

    private int commentId;

    public CannotFindCommentException(int id) {
        commentId = id;
    }

    public int getCommentId() {
        return commentId;
    }
}
