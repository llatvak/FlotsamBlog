package fi.tuni.server.comment;

import org.springframework.data.repository.CrudRepository;

/**
 * Crud repository for comments.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public interface CommentRepository extends CrudRepository<Comment, Integer> {
}
