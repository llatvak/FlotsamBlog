package fi.tuni.server.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;

/**
 * Verifies credentials sent by client to determine can JWT-token be created.
 *
 * @author Lauri Latva-Kyyny
 * @version 1.0
 */
// Verify credentials sent by client
public class JwtUsernameAndPasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    /**
     * Parameter constuctor to initialize authentication manager.
     *
     * @param authenticationManager current authentication manager to be initialized
     */
    public JwtUsernameAndPasswordAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    /**
     * Authenticates user by checking username and password.
     *
     * @param request current request
     * @param response current response
     * @return authentication from manager
     * @throws AuthenticationException authentication exception to be thrown
     */
    // Try to authenticate user
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {
        try {
            // Object mapper reads value from input stream and puts it into UsernameAndPasswordAuthentication class
            UsernameAndPasswordAuthenticationRequest authenticationRequest = new ObjectMapper()
                    .readValue(request.getInputStream(), UsernameAndPasswordAuthenticationRequest.class);
            // Create authentication with principal and credentials and authenticate does username exist and password is correct
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()
            );
            return authenticationManager.authenticate(authentication);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Called when authentication successful and generates JWT-token and adds it to header.
     *
     * @param request current request
     * @param response current response
     * @param chain current filter chain
     * @param authResult authentication result to get credentials
     * @throws IOException IO exception to be thrown
     * @throws ServletException servlet exception to be thrown
     */
    // Called if authentication is successful
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        // Generate token with metadata
        // Key has to be long and secure
        String key = "securesecuresecuresecuresecuresecuresecuresecuresecuresecure";
        String token = Jwts.builder()
                .setSubject(authResult.getName())
                .claim("authorities", authResult.getAuthorities())
                .setIssuedAt(java.sql.Date.valueOf(LocalDate.now().plusWeeks(2)))
                .signWith(Keys.hmacShaKeyFor(key.getBytes()))
                .compact();
        response.addHeader("Authorization", "Bearer " + token);
    }
}
