package fi.tuni.server.exception;

/**
 * Custom exception for category not found.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public class CannotFindCategoryException extends IllegalArgumentException {

    private int categoryId;

    /**
     * Parameter constructor to receive category id.
     *
     * @param id current category id
     */
    public CannotFindCategoryException(int id) {
        categoryId = id;
    }

    /**
     * Gets category id.
     *
     * @return current category id
     */
    public int getCategoryId() {
        return categoryId;
    }
}
