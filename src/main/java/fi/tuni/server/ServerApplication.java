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
        List<BlogPost> blogPosts = new ArrayList<>();
        List<Category> categories = new ArrayList<>();
        List<Comment> comments1 = new ArrayList<>();
        List<Comment> comments2 = new ArrayList<>();
        List<Comment> comments3 = new ArrayList<>();

        categories.add(new Category("Programming"));
        categories.add(new Category("Technology"));
        categories.add(new Category("AI"));
        categories.add(new Category("Android"));
        categories.add(new Category("Work"));
        categories.add(new Category("Lifestyle"));

        comments1.add(new Comment("Guest123","Very good post!", "14.4.2020", 3));
        comments1.add(new Comment("Guest222","Best post!", "13.3.2020", 100));
        comments1.add(new Comment("Guest333", "Nice one!", "23.3.2020", 22));

        comments2.add(new Comment("Guest123","Very good post!", "14.4.2020", 3));
        comments2.add(new Comment("Guest222","Best post!", "13.3.2020", 100));
        comments2.add(new Comment("Guest333", "Nice one!", "23.3.2020", 22));

        comments3.add(new Comment("Guest123","Very good post!", "14.4.2020", 3));
        comments3.add(new Comment("Guest222","Best post!", "13.3.2020", 100));
        comments3.add(new Comment("Guest333", "Nice one!", "23.3.2020", 22));

        BlogPost post1 = new BlogPost("There won't be new emoji in 2021 because of coronavirus",
                                        "No new emoji will be unveiled in 2021. The planned annual release inst...", 
                                        "No new emoji will be unveiled in 2021. The planned annual release instead will be pushed back to 2022, according to the Unicode Consortium, a non-profit that oversees emoji standards and is responsible for new releases.\n" +
                                        "That's because the coronavirus fallout has forced the Consortium to delay the new version of the Unicode Standard -- which underpins emoji -- by six months from March 2021 to September 2021.\n" +
                                        "As a result of the new schedule, developers won't have enough lead time to create new emoji. Each year emoji are typically approved in January before they're available across devices in September, when new versions of iOS and Android operating systems are usually announced." +
                                        "\"Under the current circumstances we've heard that our contributors have a lot on their plates at the moment and decided it was in the best interests of our volunteers and the organizations that depend on the standard to push out our release date,\" Mark Davis, president of the Consortium, said in a statement.\n" +
                                        "However, the delay doesn't impact the release of the previously announced new emojis new for 2020 -- like the transgender flag, the gender-neutral Santa Claus and others that were announced in January and will come out this September. The new set, part of Unicodes 13.0 standard, includes 117 new animated characters.",
                                        "11.3.2020", 
                                        "https://blog.emojipedia.org/content/images/2018/07/facebook-emoji-set-emojipedia.jpg", 
                                        "https://edition.cnn.com/2020/04/12/business/new-emoji-apple-android-2021-postponed/index.html", 
                                        "Technology",
                                        10,
                                        (Comment[]) comments1.toArray()
                                    );
         BlogPost post2 = new BlogPost("How to Share Files Wirelessly Between Windows 10 and Your Samsung Phone",
                                        "The latest Windows 10 Insider build now supports wireless file transfe...", 
                                        "The latest Windows 10 Insider build now supports wireless file transfers between the Samsung Link to Windows app and Microsoft’s Your Phone app for Windows 10. This should make sending photos and other files between your PC and your Galaxy smartphones much easier, provided you meet all the requirements.\n" +
                                        "For now, the feature is only live for Windows 10 Insiders, but its presence in the newest test build means it should be coming to general users soon. Similarly, wireless file transfers only work on Samsung devices that can run the “Link to Windows” app version 1.5 or higher. The Galaxy S10, S20, and Note 10 should all be fine, but users with older devices will need to check which version of the app they’re using.\n" +
                                        "And those aren’t the only caveats: only 100 files can be transferred at a time via Link to Windows; each individual file must be 512MB or less; and both devices must be connected to the same wifi network in order for the process to work (obviously).\n" + 
                                        "If you clear all those requirements, here’s how to wirelessly share files between your PC and Samsung smartphone.",
                                        "15.3.2020", 
                                        "https://blog.emojipedia.org/content/images/2018/07/facebook-emoji-set-emojipedia.jpg", 
                                        "https://lifehacker.com/how-to-share-files-wirelessly-between-windows-10-and-yo-1842839656", 
                                        "Technology",
                                        6,
                                        (Comment[]) comments2.toArray()
                                    );
        BlogPost post3 = new BlogPost("Meet the finalists of the Google Play Indie Games Festival ",
                                        "At the start of this year we opened submissions for 2020’s Google Play...", 
                                        "At the start of this year we opened submissions for 2020’s Google Play Indie Games Festival - an international competition celebrating incredible indie games from Europe, Japan and South Korea.\n" +
                                        "We’ve received hundreds of fantastic submissions that showcase the technical abilities and groundbreaking creativity of independent studios. Many thanks to everyone who submitted their game. After some hard choices and late nights, we’re happy to announce our 20 finalists in each region.\n" +
                                        "Please check out the games below (in alphabetical order); each one is a true work of art. They will be receiving promotions and prizes to help them grow their business. They’ll also be competing in the Finals for the top prizes.\n" +
                                        "While this is a happy announcement, we must also inform you that we will be unable to hold the Finals as planned on April 25 in Poland, Japan and South Korea due to the COVID-19 situation. We will be postponing the events until further notice, as the health and safety of finalists, jury members, players and others involved is our top priority. Please stay tuned for further announcements.",
                                        "20.4.2020", 
                                        "https://3.bp.blogspot.com/-Z7zdfBjgT7s/Xn5KK2tHgSI/AAAAAAAAOx8/T6bReu6ky4E8gnTOSsSZJDbTOs4W1HbzQCLcBGAsYHQ/s1600/Android%2BDevelopers%2BBlog%2B%25281200x600%2529.png", 
                                        "https://android-developers.googleblog.com/2020/03/meet-finalists-of-google-play-indie.html", 
                                        "Android",
                                        14,
                                        (Comment[]) comments3.toArray()
                                    );



        blogPosts.add(post1);
        blogPosts.add(post2);
        blogPosts.add(post3);
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
