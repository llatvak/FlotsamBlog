package fi.tuni.server.exception;

public class CannotFindPostException extends IllegalArgumentException {

    private int postId;

    public CannotFindPostException(int id) {
        postId = id;
    }

    public int getPostId() {
        return postId;
    }
}
