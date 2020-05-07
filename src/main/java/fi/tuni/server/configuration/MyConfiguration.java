package fi.tuni.server.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;

/**
 * Custom configuration class for enabling cors and exposing headers.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
@Configuration
public class MyConfiguration implements WebMvcConfigurer {

    /**
     * Enables cors and exposes headers to show JWT token.
     *
     * @param registry registry to configure
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedMethods("*")
                .exposedHeaders("Authorization")
        ;
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.setUseTrailingSlashMatch(false);
    }
}
