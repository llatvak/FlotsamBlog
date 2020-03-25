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
		blogPosts.add(new BlogPost("Featured post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Mar 11", "https://source.unsplash.com/random", "Image text", "Category 1"));
		blogPosts.add(new BlogPost("Featured post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Feb 12", "https://source.unsplash.com/random", "Image text", "Category 2"));
		blogPosts.add(new BlogPost("Featured post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "Jan 13", "https://source.unsplash.com/random", "Image text", "Category 3"));
		postRepository.saveAll(blogPosts);

		// Curl commands and author text
		System.out.println("AUTHORS");
		System.out.println("-------------");
		System.out.println("Lauri Latva-Kyyny & Miko Kauhanen");
		System.out.println("-------------");
		System.out.println("CURL COMMANDS");
		System.out.println("-------------");
		System.out.println("GET all posts: ");
		System.out.println("	curl -X GET http://localhost:8080/posts");
		System.out.println("GET one post: ");
		System.out.println("	curl -X GET http://localhost:8080/posts/1");
		System.out.println("DELETE one post: ");
		System.out.println("	curl -X DELETE http://localhost:8080/posts/1");
		System.out.println("POST one post: ");
		System.out.println("	curl -X POST -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Featured post\\\", \\\"description\\\": \\\"Post description\\\", \\\"date\\\": \\\"Dec 20\\\", \\\"image\\\": \\\"https://source.unsplash.com/random\\\", \\\"imageText\\\": \\\"Image text\\\", \\\"category\\\": \\\"Category 1\\\"}\" http://localhost:8080/posts/");
		System.out.println("UPDATE post: ");
		System.out.println("	curl -X PUT -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Updated Featured post\\\", \\\"description\\\": \\\"Updated Post description\\\", \\\"date\\\": \\\"Dec 24\\\", \\\"image\\\": \\\"https://source.unsplash.com/random\\\", \\\"imageText\\\": \\\"Updated Image text\\\", \\\"category\\\": \\\"Updated Category 1\\\"}\" http://localhost:8080/posts/1");

		postRepository.findAll().forEach(System.out::println);
	}

}
