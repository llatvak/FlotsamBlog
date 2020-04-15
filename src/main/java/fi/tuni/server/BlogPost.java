package fi.tuni.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Arrays;

@Entity
public class BlogPost {

    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String description;
    private String body;
    private String imageUrl;
    private String date;
    private String url;
    private String category;
    private int likes;
    private Comment[] comments;

    public BlogPost(String title, String description, String body, String date, String url, String imageUrl, String category, int likes, Comment[] comments) {
        this.title = title;
        this.description = description;
        this.body = body;
        this.date = date;
        this.imageUrl = imageUrl;
        this.url = url;
        this.category = category;
        this.likes = likes;
        this.comments = comments;
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

    public int getId() {
        return id;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public Comment[] getComments() {
        return comments;
    }

    public void setComments(Comment[] comments) {
        this.comments = comments;
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
                ", likes='" + likes + '\'' +
                ", comments='" + Arrays.toString(comments) + '\'' +
                '}';
    }

}
