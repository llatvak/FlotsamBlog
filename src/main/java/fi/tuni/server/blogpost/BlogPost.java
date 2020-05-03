package fi.tuni.server.blogpost;

import javax.persistence.*;

@Entity
public class BlogPost {

    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String description;
    @Lob
    @Column(length=100000)
    private String body;
    private String imageUrl;
    private String date;
    private String url;
    private String category;

    public BlogPost(String title, String description, String body, String date, String url, String imageUrl, String category) {
        this.title = title;
        this.description = description;
        this.body = body;
        this.date = date;
        this.imageUrl = imageUrl;
        this.url = url;
        this.category = category;
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
                '}';
    }

}
