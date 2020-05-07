package fi.tuni.server.security;

import fi.tuni.server.jwt.JwtTokenVerifier;
import fi.tuni.server.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

/**
 * Configuration for security configurations and creating users.
 *
 * @author Lauri Latva-Kyyny
 * @version 1.0
 */
@Configuration
@EnableWebSecurity
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    /**
     * Parameter constructor to initialize password encoder.
     *
     * @param passwordEncoder password encoder to be initialized
     */
    @Autowired
    public AppSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Custom security configurations to enable cors and set authorization for users.
     *
     * @param http current http security object to be configured
     * @throws Exception exception to be thrown
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and()
                .csrf().disable()
                    // Sets session to stateless
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager()))
                .addFilterAfter(new JwtTokenVerifier(), JwtUsernameAndPasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/", "index", "/css/*", "/js/*").permitAll();
                //.antMatchers("/api/**").hasRole(ApplicationUserRole.ADMIN.name());
    }

    /**
     * Creates user with specific username and password.
     * <p>
     * Optimally should be in a database instead of here but only one user is created
     * for testing admin authorization and login.
     * </p>
     *
     * @return in memory user detail manager with all users
     */
    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails admin1 = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin"))
                .roles(ApplicationUserRole.ADMIN.name())
                .build();
        return new InMemoryUserDetailsManager(
                admin1
        );
    }
}
