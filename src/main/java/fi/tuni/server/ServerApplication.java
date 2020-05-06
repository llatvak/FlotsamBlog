package fi.tuni.server;

import fi.tuni.server.blogpost.BlogPost;
import fi.tuni.server.blogpost.BlogPostRepository;
import fi.tuni.server.category.Category;
import fi.tuni.server.category.CategoryRepository;
import fi.tuni.server.comment.Comment;
import fi.tuni.server.comment.CommentRepository;
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

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CommentRepository commentRepository;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Override
    public void run(String... args) {
        // Insert dummy data as list to database and print them
        List<BlogPost> blogPosts = new ArrayList<>();
        List<Category> categories = new ArrayList<>();
        List<Comment> comments = new ArrayList<>();

        BlogPost post1 = new BlogPost("There won't be new emoji in 2021 because of coronavirus",
                                        "No new emoji will be unveiled in 2021. The planned annual release inst...", 
                                        "No new emoji will be unveiled in 2021. The planned annual release instead will be pushed back to 2022, according to the Unicode Consortium, a non-profit that oversees emoji standards and is responsible for new releases.\n\n" +
                                        "That's because the coronavirus fallout has forced the Consortium to delay the new version of the Unicode Standard -- which underpins emoji -- by six months from March 2021 to September 2021.\n\n" +
                                        "As a result of the new schedule, developers won't have enough lead time to create new emoji. Each year emoji are typically approved in January before they're available across devices in September, when new versions of iOS and Android operating systems are usually announced." +
                                        "\"Under the current circumstances we've heard that our contributors have a lot on their plates at the moment and decided it was in the best interests of our volunteers and the organizations that depend on the standard to push out our release date,\" Mark Davis, president of the Consortium, said in a statement.\n\n" +
                                        "However, the delay doesn't impact the release of the previously announced new emojis new for 2020 -- like the transgender flag, the gender-neutral Santa Claus and others that were announced in January and will come out this September. The new set, part of Unicodes 13.0 standard, includes 117 new animated characters.",
                                        "11.3.2020", 
                                        "https://edition.cnn.com/2020/04/12/business/new-emoji-apple-android-2021-postponed/index.html", 
                                        "https://blog.emojipedia.org/content/images/2018/07/facebook-emoji-set-emojipedia.jpg", 
                                        "Technology"
                                    );
         BlogPost post2 = new BlogPost("How to Share Files Wirelessly Between Windows 10 and Your Samsung Phone",
                                        "The latest Windows 10 Insider build now supports wireless file transfe...", 
                                        "The latest Windows 10 Insider build now supports wireless file transfers between the Samsung Link to Windows app and Microsoft’s Your Phone app for Windows 10. This should make sending photos and other files between your PC and your Galaxy smartphones much easier, provided you meet all the requirements.\n\n" +
                                        "For now, the feature is only live for Windows 10 Insiders, but its presence in the newest test build means it should be coming to general users soon. Similarly, wireless file transfers only work on Samsung devices that can run the “Link to Windows” app version 1.5 or higher. The Galaxy S10, S20, and Note 10 should all be fine, but users with older devices will need to check which version of the app they’re using.\n\n" +
                                        "And those aren’t the only caveats: only 100 files can be transferred at a time via Link to Windows; each individual file must be 512MB or less; and both devices must be connected to the same wifi network in order for the process to work (obviously).\n\n" + 
                                        "If you clear all those requirements, here’s how to wirelessly share files between your PC and Samsung smartphone.",
                                        "15.3.2020", 
                                        "https://lifehacker.com/how-to-share-files-wirelessly-between-windows-10-and-yo-1842839656", 
                                        "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/fmagv2s9zlk3iopmkwfb.jpg", 
                                        "Technology"
                                    );
        BlogPost post3 = new BlogPost("Meet the finalists of the Google Play Indie Games Festival ",
                                        "At the start of this year we opened submissions for 2020’s Google Play...", 
                                        "At the start of this year we opened submissions for 2020’s Google Play Indie Games Festival - an international competition celebrating incredible indie games from Europe, Japan and South Korea.\n\n" +
                                        "We’ve received hundreds of fantastic submissions that showcase the technical abilities and groundbreaking creativity of independent studios. Many thanks to everyone who submitted their game. After some hard choices and late nights, we’re happy to announce our 20 finalists in each region.\n\n" +
                                        "Please check out the games below (in alphabetical order); each one is a true work of art. They will be receiving promotions and prizes to help them grow their business. They’ll also be competing in the Finals for the top prizes.\n\n" +
                                        "While this is a happy announcement, we must also inform you that we will be unable to hold the Finals as planned on April 25 in Poland, Japan and South Korea due to the COVID-19 situation. We will be postponing the events until further notice, as the health and safety of finalists, jury members, players and others involved is our top priority. Please stay tuned for further announcements.",
                                        "20.4.2020", 
                                        "https://android-developers.googleblog.com/2020/03/meet-finalists-of-google-play-indie.html", 
                                        "https://3.bp.blogspot.com/-Z7zdfBjgT7s/Xn5KK2tHgSI/AAAAAAAAOx8/T6bReu6ky4E8gnTOSsSZJDbTOs4W1HbzQCLcBGAsYHQ/s1600/Android%2BDevelopers%2BBlog%2B%25281200x600%2529.png", 
                                        "Android"
                                    );
        BlogPost post4 = new BlogPost("USPTO: AIs cannot be credited as inventors...",
                                        "US Patent Office has ruled that an AI cannot be legally credited as an inventor...",
                                        "The US Patent and Trademark Office (USPTO) has ruled that an AI cannot be legally credited as an inventor. AI will assist us mere humans in coming up with new innovations in the years to come. However, the USPTO will not let them take the credit. The USPTO has rejected two early filings of inventions credited to an AI system called DABUS which was created by Stephen Thaler. \n\n" +
                                                "DABUS invented two devices; a shape-shifting food container, and a new type of emergency flashlight. The filings were submitted by the Artificial Inventor Project (AIP) last year. AIP’s lawyers argued that Thaler is an expert in building AI systems like DABUS but has no experience in consumer goods and would not have created them himself.\n\n" +
                                                "The USPTO concluded that “only natural persons may be named as an inventor in a patent application,” under the current law. Similar applications by the AIP in the UK and EU were rejected along the same lines by their respective patent authorities.\n\n" +
                                                "“If I teach my Ph.D. student and they go on to make a final complex idea, that doesn’t make me an inventor on their patent, so it shouldn’t with a machine,” Ryan Abbott, a professor at the University of Surrey who led a group of legal experts in the AI patent project, told the Wall Street Journal last year. \n\n" +
                                                "The case over whether only humans should hold such rights has similarities to the infamous monkey selfie saga where PETA argued that a monkey could own the copyright to a selfie. The US Copyright Office also ruled in that instance that only photographs taken by humans can be copyrighted and PETA’s case was subsequently dismissed.",
                                        "30.4.2020",
                                        "https://artificialintelligence-news.com/2020/04/30/us-patent-office-ai-credited-inventor/",
                                        "https://www.wpp.com/-/media/project/wpp/images/voices/ai-and-the-personalised-marketing-approach-of-the-future-min.jpg?width=1600&height=900",
                                        "AI"
        );
        BlogPost post5 = new BlogPost("Coronavirus: Graduates struggling for job",
                                        "On the cusp of entering the world of work, young people are seeing uncertainty engulf their employment prospects...",
                                        "On the cusp of entering the world of work, young people are seeing uncertainty engulf their employment prospects. Elise Lauriot-Prévost, from Lyon, France, has just finished a master's degree.\n\n " +
                                                "After sending 50 job applications, she has received little encouragement. Especially right now, you are getting the negative responses and you are getting the responses 'there are no new job adverts anyway', said the 22-year-old.\n\n" +
                                                "And even when it's not an outright rejection, there's still no good news. You are getting the responses, 'thanks for applying, however, because of coronavirus, we are suspending our job hunting and we will let you know when things have moved on', but none of us know when that will be, she said. \n\n" +
                                                "Prospects for getting a paid traineeship or a short duration contract are also slim.At this point I (wonder) what field I can even work in. I do not even have anything to do to hold me over until a job in my field, which is very competitive, opens up again. I can not do babysitting, I can not do all the jobs that I usually do, which I have done during school, to be able to earn money, laments Elise.\n\n" +
                                                "Before the pandemic, the average rate for youth unemployment in the EU stood at 15 per cent. In southern EU countries, some of the hardest hit by COVID-19, the figure stood at 30 per cent.",
                                        "29.4.2020",
                                        "https://www.euronews.com/2020/04/29/coronavirus-graduates-struggling-for-job-leads-amid-covid-19-lockdown-uncertainty",
                                        "https://www.albawaba.com/sites/default/files/styles/de2e_standard/public/im_new/dima/Unemployment_shutterstock_Apr15.jpg?h=b3660f0d&itok=s9eK1KUg",
                                        "Work"
        );
        BlogPost post6 = new BlogPost("GitHub makes its core tools free for all development teams",
                                        "GitHub has given developers a welcome helping hand during these difficult times by making its core tools free...",
                                        "GitHub has given developers a welcome helping hand during these difficult times by making its core tools free. Organisations can now make private repositories without paying any fees. Previously, even small teams would’ve had to pay for a premium membership starting from $7/month.\n\n" +
                                                "Last year, GitHub made private repositories available for free users but with restrictions in areas such as the number of collaborators; which hindered teams. Unlimited collaborators and private repositories are now included in the free tier. Teams can now also access 2,000 GitHub “action minutes” per month at no additional cost.\n\n" +
                                                "GitHub Actions enable applications to automate individual tasks. Developers can combine their own series of tasks to create Actions, or use ones created by the community. 500MB of GitHub Packages storage is also now included in the free tier. The free tier is great for many small teams with smaller budgets, but larger teams will likely need a few more features.\n\n" +
                                                "GitHub has reduced its former “Team” premium tier from $9/month to $4/month. For the additional fee, development teams can access 3,000 Actions minutes and 2GB of GitHub Packages storage. While the COVID-19 pandemic likely prompted a quicker rollout, GitHub CEO Nat Friedman says the company has been considering the change for the last 18 months.",
                                        "15.4.2020",
                                        "https://developer-tech.com/news/2020/apr/15/github-core-tools-free-development-teams/",
                                        "https://images.wallpaperscraft.com/image/code_text_colorful_140555_1600x900.jpg",
                                        "Programming"
        );

        // Add dummy BlogPosts to list and save to crud repository
        blogPosts.add(post1);
        blogPosts.add(post2);
        blogPosts.add(post3);
        blogPosts.add(post4);
        blogPosts.add(post5);
        blogPosts.add(post6);
        postRepository.saveAll(blogPosts);

        // Add dummy Categories to list and save to crud repository
        categories.add(new Category("Programming"));
        categories.add(new Category("Technology"));
        categories.add(new Category("AI"));
        categories.add(new Category("Android"));
        categories.add(new Category("Work"));
        categories.add(new Category("Lifestyle"));
        categoryRepository.saveAll(categories);

        // Add dummy Comments to list and save to crud repository
        comments.add(new Comment(1,"Guest123","Very good post!", "2020.04.14", 3));
        comments.add(new Comment(2, "Guest222","Best post!", "2020.03.13", 100));
        comments.add(new Comment(3, "Guest333", "Nice one!", "2020.03.23", 22));
        comments.add(new Comment(4, "Guest578", "Really good!", "2020.04.16", 4));
        comments.add(new Comment(5, "Guest895", "Liked this one!", "2020.05.02", 7));
        comments.add(new Comment(6, "Guest925", "W A U!", "2020.05.04", 12));
        commentRepository.saveAll(comments);

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
        System.out.println("-------------");
        System.out.println("GET all comments: ");
        System.out.println("	curl -X GET http://localhost:8080/api/comments");
        System.out.println("GET one comment: ");
        System.out.println("	curl -X GET http://localhost:8080/api/comments/1");
        System.out.println("DELETE one comment: ");
        System.out.println("	curl -X DELETE http://localhost:8080/api/comments/1");
        System.out.println("POST one comment: ");
        System.out.println("	curl -X POST -H \"Content-type: application/json\" -d \"{\\\"author\\\": \\\"Guest123\\\", \\\"content\\\": \\\"Nice post!\\\",  \\\"date\\\": \\\"14-4-2020\\\", \\\"likes\\\": \\\"10\\\", \\\"postId\\\": \\\"1\\\"}\" http://localhost:8080/api/comments/");
        System.out.println("UPDATE comment: ");
        System.out.println("	curl -X PUT -H \"Content-type: application/json\" -d \"{\\\"author\\\": \\\"Guest123\\\", \\\"content\\\": \\\"Updated comment!\\\",  \\\"date\\\": \\\"14-4-2020\\\", \\\"likes\\\": \\\"10\\\", \\\"postId\\\": \\\"1\\\"}\" http://localhost:8080/api/comments/1");
        System.out.println("-------------");
        System.out.println("GET all categories: ");
        System.out.println("	curl -X GET http://localhost:8080/api/categories");
        System.out.println("GET one category: ");
        System.out.println("	curl -X GET http://localhost:8080/api/categories/1");
        System.out.println("DELETE one category: ");
        System.out.println("	curl -X DELETE http://localhost:8080/api/categories/1");
        System.out.println("POST one category: ");
        System.out.println("	curl -X POST -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Technology\\\"}\" http://localhost:8080/api/categories/");
        System.out.println("UPDATE category: ");
        System.out.println("	curl -X PUT -H \"Content-type: application/json\" -d \"{\\\"title\\\": \\\"Updated Category\\\"}\" http://localhost:8080/api/categories/1");
        System.out.println("-------------");
        System.out.println("Dashboard admin username and password: ");
        System.out.println("    Username: admin, Password: admin");

        //postRepository.findAll().forEach(System.out::println);
    }
}
