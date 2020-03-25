package fi.tuni.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ServerApplication implements CommandLineRunner {

	@Autowired
	BlogPostRepository postRepository;

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Insert dummy data as list to database and print them
		List<BlogPost> blogPosts = new ArrayList();
		blogPosts.add(new BlogPost("Featured post","Post description.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Mar 11", "Post url.", "https://source.unsplash.com/random", "Category 1"));
		blogPosts.add(new BlogPost("Featured post", "Post description.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Feb 12", "Post url.", "https://source.unsplash.com/random", "Category 2"));
		blogPosts.add(new BlogPost("Featured post", "Post description.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Jan 13", "Post url.", "https://source.unsplash.com/random", "Category 3"));
		postRepository.saveAll(blogPosts);

		// Curl commands and author text
		System.out.println("AUTHORS");
		System.out.println("-------------");
		System.out.println("Lauri Latva-Kyyny & Miko Kauhanen");
		System.out.println("-------------");
		System.out.println("CURL COMMANDS");
		System.out.println("-------------");
		System.out.println("GET all posts: ");
		System.out.println("	curl -X GET http://localhost:8080/api/posts");
		System.out.println("GET one post: ");
		System.out.println("	curl -X GET http://localhost:8080/api/posts/1");
		System.out.println("DELETE one post: ");
		System.out.println("	curl -X DELETE http://localhost:8080/api/posts/1");
		System.out.println("POST one post: ");
		System.out.println("	curl -X POST -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Featured post\\\", \\\"description\\\": \\\"Post description\\\",  \\\"body\\\": \\\"Post body\\\", \\\"date\\\": \\\"Dec 20\\\", \\\"url\\\": \\\"Post url.\\\", \\\"imageUrl\\\": \\\"https://source.unsplash.com/random\\\", \\\"category\\\": \\\"Category 1\\\"}\" http://localhost:8080/api/posts/");
		System.out.println("UPDATE post: ");
		System.out.println("	curl -X PUT -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Updated Featured post\\\", \\\"description\\\": \\\"Updated Post description\\\",  \\\"body\\\": \\\"Updated post body\\\", \\\"date\\\": \\\"Dec 24\\\", \\\"url\\\": \\\"Updated post url.\\\", \\\"imageUrl\\\": \\\"https://source.unsplash.com/random\\\", \\\"category\\\": \\\"Updated Category 1\\\"}\" http://localhost:8080/api/posts/1");

		postRepository.findAll().forEach(System.out::println);
	}

}
