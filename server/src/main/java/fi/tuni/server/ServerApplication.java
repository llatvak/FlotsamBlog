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
		System.out.println("Lauri Latva-Kyyny & Miko Kauhanen");
	}

	@Override
	public void run(String... args) throws Exception {
		List<BlogPost> blogPosts = new ArrayList();
		blogPosts.add(new BlogPost("Featured post", "Mar 11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 1"));
		blogPosts.add(new BlogPost("Featured post", "Feb 12", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 2"));
		blogPosts.add(new BlogPost("Featured post", "Jan 13", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", "https://source.unsplash.com/random", "Image text", "Category 3"));
		postRepository.saveAll(blogPosts);
		postRepository.findAll().forEach(System.out::println);
	}

}
