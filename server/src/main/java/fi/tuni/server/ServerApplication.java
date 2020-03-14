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
		System.out.println("	curl -X POST -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Featured post\\\", \\\"description\\\": \\\"Post description\\\", \\\"date\\\": \\\"Featured post\\\", \\\"image\\\": \\\"https://source.unsplash.com/random\\\", \\\"imageText\\\": \\\"Image text\\\", \\\"category\\\": \\\"Category 1\\\"}\" http://localhost:8080/posts/");
	}

	@Override
	public void run(String... args) throws Exception {
		// Insert dummy data as list to database and print them
		List<BlogPost> blogPosts = new ArrayList();
		blogPosts.add(new BlogPost("Featured post", "Mar 11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 1"));
		blogPosts.add(new BlogPost("Featured post", "Feb 12", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 2"));
		blogPosts.add(new BlogPost("Featured post", "Jan 13", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 3"));
		postRepository.saveAll(blogPosts);
		postRepository.findAll().forEach(System.out::println);
	}

}
