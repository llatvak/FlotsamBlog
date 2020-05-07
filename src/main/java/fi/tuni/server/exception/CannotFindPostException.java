package fi.tuni.server.exception;

/**
 * Custom exception for post not found.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public class CannotFindPostException extends IllegalArgumentException {

    private int postId;

    /**
     * Parameter constructor that receives current post id.
     *
     * @param id current post id
     */
    public CannotFindPostException(int id) {
        postId = id;
    }

    /**
     * Return current post id.
     *
     * @return current post id.
     */
    public int getPostId() {
        return postId;
    }
}
