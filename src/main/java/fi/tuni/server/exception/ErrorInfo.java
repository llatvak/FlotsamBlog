package fi.tuni.server.exception;

public class ErrorInfo {
    private String errorMsg;

    public ErrorInfo() {}

    public ErrorInfo(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
