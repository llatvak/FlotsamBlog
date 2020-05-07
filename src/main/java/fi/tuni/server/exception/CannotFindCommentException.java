package fi.tuni.server.exception;

/**
 * Custom exception for comment not found.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public class CannotFindCommentException extends IllegalArgumentException {

    private int commentId;

    /**
     * Parameter constructor that receives current id.
     *
     * @param id current id
     */
    public CannotFindCommentException(int id) {
        commentId = id;
    }

    /**
     * Returns current id.
     *
     * @return current id to be returned
     */
    public int getCommentId() {
        return commentId;
    }
}
