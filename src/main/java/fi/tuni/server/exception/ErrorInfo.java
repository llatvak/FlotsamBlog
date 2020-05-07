package fi.tuni.server.exception;

/**
 * Pojo for custom error info.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public class ErrorInfo {
    private String errorMsg;

    public ErrorInfo() {}

    /**
     * Parameter constructor that receives sent error message.
     *
     * @param errorMsg sent error message
     */
    public ErrorInfo(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    /**
     * Return current error message.
     *
     * @return current error message to be returned
     */
    public String getErrorMsg() {
        return errorMsg;
    }

    /**
     * Sets error message sent.
     *
     * @param errorMsg error message to be set
     */
    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
