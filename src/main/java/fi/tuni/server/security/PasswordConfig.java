package fi.tuni.server.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Password config to set create password encoder with specific strength.
 *
 * @author Lauri Latva-Kyyny
 * @version 1.0
 */
@Configuration
public class PasswordConfig {
    /**
     * Default constructor to create password encoder.
     *
     * @return password encoder with specific strength
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
}
