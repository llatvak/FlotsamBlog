package fi.tuni.server.exception;

public class CannotFindCategoryException extends IllegalArgumentException {

    private int categoryId;

    public CannotFindCategoryException(int id) {
        categoryId = id;
    }

    public int getCategoryId() {
        return categoryId;
    }
}
