package fi.tuni.server.blogpost;

import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * Entity that holds blog post information.
 *
 * @version 1.0
 * @author Lauri Latva-Kyyny
 */
@Entity
public class BlogPost {

    @Id
    @GeneratedValue
    private int id;
    @NotNull
    @NotBlank
    private String title;
     @NotNull
     @NotBlank
    private String description;
    @Lob
    @Column(length=100000)
    @NotNull
    @NotBlank
    private String body;
    @NotNull
    @NotBlank
    private String imageUrl;
    @NotNull
    @NotBlank
    private String date;
    @NotNull
    @NotBlank
    private String url;
    @NotNull
    @NotBlank
    private String category;
    @Range(min = 0)
    private int postLikes;

    public BlogPost(String title, String description, String body, String date, String url, String imageUrl, String category, int postLikes) {
        this.title = title;
        this.description = description;
        this.body = body;
        this.date = date;
        this.imageUrl = imageUrl;
        this.url = url;
        this.category = category;
        this.postLikes = postLikes;
    }

    public BlogPost() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getPostLikes() {
        return postLikes;
    }

    public void setPostLikes(int postLikes) {
        this.postLikes = postLikes;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", body='" + body + '\'' +
                ", date='" + date + '\'' +
                ", url='" + url + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", category='" + category + '\'' +
                ", postLikes='" + postLikes + '\'' +
                '}';
    }

}
