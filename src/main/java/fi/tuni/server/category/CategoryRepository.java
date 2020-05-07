package fi.tuni.server.category;

import org.springframework.data.repository.CrudRepository;

/**
 * Crud repository for categories.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
public interface CategoryRepository extends CrudRepository<Category, Integer> {
}