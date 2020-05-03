package fi.tuni.server.blogpost;

import org.springframework.data.repository.CrudRepository;

public interface BlogPostRepository extends CrudRepository<BlogPost, Integer> {
}
