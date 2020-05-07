package fi.tuni.server.blogpost;

import org.springframework.data.repository.CrudRepository;

/**
 * Crud repository for blog posts.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public interface BlogPostRepository extends CrudRepository<BlogPost, Integer> {
}
