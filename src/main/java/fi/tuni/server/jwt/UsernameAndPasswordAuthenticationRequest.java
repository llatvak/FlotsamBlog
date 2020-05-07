package fi.tuni.server.jwt;

/**
 * Pojo class for setting user username and password from request.
 *
 * @author Lauri Latva-Kyyny
 * @version 1.0
 */
public class UsernameAndPasswordAuthenticationRequest {
    private String username;
    private String password;

    public UsernameAndPasswordAuthenticationRequest() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
